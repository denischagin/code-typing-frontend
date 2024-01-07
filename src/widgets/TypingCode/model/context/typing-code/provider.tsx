import {TypingCodeContext} from "@widgets/TypingCode/model";
import {ChangeEventHandler, KeyboardEvent, ReactNode, useEffect, useMemo} from "react";
import {transformCodeToRows, useRandomText, useTypingAction} from "@entities/text";
import {useScrollIntoView} from "@shared/libs/hooks/scroll-into-view";
import {useCurrentRow} from "@widgets/TypingCode";
import {useResult} from "@entities/results";
import {useTick} from "@shared/libs/hooks/tick";
import {useTimer} from "@entities/timer";

export const TypingCodeProvider = ({children}: { children: ReactNode }) => {
    const [randomText, newRandomText] = useRandomText()

    const rows = useMemo(() =>
            transformCodeToRows(randomText?.trim() ?? null),
        [randomText])
    const [
        resultRef,
        containerRef,
        {scrollIntoView: scrollToResult, scrollTo}
    ] = useScrollIntoView<HTMLDivElement>(-50)

    const {
        typingValue,
        currentRowIndex,
        setTypingValue,
        setValueWithTab,
        resetState,
        nextRow,
        prevRowsRightSymbols,
        currentRowRightSymbols,
    } = useCurrentRow(rows)

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

    const {
        isEnded,
        isNotStarted,
        startTyping,
        endTyping,
        resetTyping
    } = useTypingAction({
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

    const handleResetAll = () => {
        resetState()
        resetTimer()
        resetTyping()
        clearResult()
        endTick()
        resultRef
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
        <TypingCodeContext.Provider value={{
            currentRowIndex,
            typingValue,
            isEnded,
            handleKeyDown,
            handleChangePrintingInput,
            containerRef,
            resultRef,
            handleNewText,
            rows,
            randomText,
            scrollTo
        }}>
            {children}
        </TypingCodeContext.Provider>
    )
}