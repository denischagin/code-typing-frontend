import {ChangeEventHandler, KeyboardEvent, ReactNode, useEffect} from "react";
import {useScrollIntoView} from "@shared/libs/hooks/scroll-into-view";
import {useResult} from "@entities/results";
import {useTick} from "@shared/libs/hooks/tick";
import {useTimer} from "@entities/timer";
import {TypingCodeHandlersContext, useCodeErrors, useCurrentRow, useRandomCode, useTypingAction} from "@entities/code";

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
        resetState,
    } = useCurrentRow()

    const {isError, setIsError, incrementErrors, setErrorsCount, errorsCount} = useCodeErrors()

    const {startResult, tickResult, endResult, clearResult} = useResult()

    const {startTick, endTick} = useTick(() => {
        const date = new Date()
        tickResult({symbols: prevRowsRightSymbols + currentRowRightSymbols, date})
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
            const dateStart = new Date()
            startTimer(dateStart.valueOf())
            startTick()
            startResult({startTime: dateStart, text: randomText})
        },
        onEndEffect: () => {
            const dateEnd = new Date()
            stopTimer(dateEnd.valueOf())
            scrollToResult()
            nextRow()
            endTick()
            endResult({
                endTime: dateEnd,
                textSymbolCount: prevRowsRightSymbols + currentRowRightSymbols,
                errorsCount
            })
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
        setErrorsCount(0)
        setIsError(false)
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
                if (row !== typingValue) return incrementErrors()
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
        if (!rows[currentRowIndex].startsWith(currentTypingValue)) {
            if (!isError) {
                incrementErrors()
                setIsError(true)
            }
        } else setIsError(false)


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