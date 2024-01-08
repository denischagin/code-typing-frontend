import {ChangeEventHandler, KeyboardEvent, ReactNode, useEffect} from "react";
import {useScrollIntoView} from "@shared/libs/hooks/scroll-into-view";
import {useResult} from "@entities/results";
import {useTick} from "@shared/libs/hooks/tick";
import {useTimer} from "@entities/timer";
import {useCurrentRow, useRandomCode, useTypingAction, TypingCodeHandlersContext} from "@entities/code";

export const TypingCodeHandlersProvider = ({children}: { children: ReactNode }) => {
    const [
        resultRef,
        containerRef,
        {scrollIntoView: scrollToResult, scrollTo}
    ] = useScrollIntoView<HTMLDivElement>(-50)

    const {
        randomText,
        newRandomText,
        rows
    } = useRandomCode()

    const {
        typingValue,
        currentRowRightSymbols,
        prevRowsRightSymbols,
        currentRowIndex,
        setTypingValue,
        nextRow,
        setValueWithTab,
        resetState
    } = useCurrentRow()

    const {startResult, tickResult, endResult, clearResult} = useResult()

    const {startTick, endTick} = useTick(() => {
        tickResult({symbols: prevRowsRightSymbols + currentRowRightSymbols, msDate: Date.now()})
    })

    const {
        timer: {
            timerStatus,
        },
        startTimer,
        stopTimer,
        resetTimer
    } = useTimer()

    const typingAction = useTypingAction({
        onStartEffect: () => {
            if (!randomText) return
            const dateStart = Date.now()
            startTimer(dateStart)
            startTick()
            startResult({startTime: dateStart, text: randomText})
        },
        onEndEffect: () => {
            const dateEnd = Date.now()
            stopTimer(dateEnd)
            scrollToResult()
            nextRow()

            endTick()
            endResult({endTime: dateEnd, textSymbolCount: prevRowsRightSymbols + currentRowRightSymbols})
        }
    })
    const {
        isNotStarted,
        startTyping,
        endTyping,
        resetTyping
    } = typingAction

    const handleResetAll = () => {
        resetState()
        resetTimer()
        resetTyping()
        clearResult()
        endTick()
    }

    const handleNewText = () => {
        handleResetAll()
        newRandomText()
    }

    useEffect(() => handleResetAll, [randomText]);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (!rows) return
        const row = rows[currentRowIndex]

        switch (e.key) {
            case "Enter":
                if (row !== typingValue) return
                return nextRow()
            case "Tab":
                e.preventDefault()
                setValueWithTab()

        }
    }
    const handleChangePrintingInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        const currentTypingValue = e.target.value
        setTypingValue(currentTypingValue)
        if (!rows) return

        const isFirstRow = currentRowIndex === 0
        const isTimerNotStarted = timerStatus !== "started"

        if (isFirstRow && isTimerNotStarted && isNotStarted)
            startTyping()

        const isTypingValueRight = currentTypingValue === rows[currentRowIndex]
        const isLastRow = currentRowIndex === rows.length - 1

        if (isTypingValueRight && isLastRow)
            endTyping()
    };

    return (
        <TypingCodeHandlersContext.Provider value={{
            handleKeyDown,
            handleChangePrintingInput,
            containerRef,
            resultRef,
            handleNewText,
            scrollTo,
            ...typingAction
        }}>
            {children}
        </TypingCodeHandlersContext.Provider>
    )
}