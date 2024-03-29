import {ChangeEventHandler, KeyboardEvent, ReactNode, useEffect, useRef} from "react";

import {
    TypingCodeHandlersContext,
    useCodeErrors,
    useCodeErrorsHandlers,
    useCurrentRow,
    useCurrentRowHandlers,
    useRandomCode,
    useTypingAction
} from "@entities/code";
import {useTypingCodeTimer} from "@entities/code/libs/hooks/use-typing-code-timer.ts";
import {useResult} from "@entities/results";
import {useScrollIntoView} from "@shared/libs/hooks/scroll-into-view";
import {useTick} from "@shared/libs/hooks/tick";

export const TypingCodeHandlersProvider = ({children}: { children: ReactNode }) => {
    const [
        resultRef,
        containerRef,
        {scrollIntoView: scrollToResult, scrollTo}
    ] = useScrollIntoView<HTMLDivElement>(-50)
    const inputRef = useRef<HTMLInputElement>(null)

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
    } = useCurrentRow()
    const {
        setTypingValue,
        nextRow,
        setValueWithTab,
        resetState,
    } = useCurrentRowHandlers()

    const {isError, errorsCount} = useCodeErrors()
    const {setErrorsCount, setIsError, incrementErrors} = useCodeErrorsHandlers()

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
    } = useTypingCodeTimer()


    const typingAction = useTypingAction()
    const {
        isNotStarted,
        startTyping,
        endTyping,
        resetTyping,
        isEnded,
    } = typingAction

    const handleStart = () => {
        if (!randomText) return

        startTyping()
        const dateStart = new Date()
        startTimer(dateStart.valueOf())
        startTick()
        startResult({startTime: dateStart, text: randomText})
    }

    const handleEnd = () => {
        const dateEnd = new Date()
        endTyping()
        stopTimer(dateEnd.valueOf())
        nextRow(rows)
        endTick()
        endResult({
            endTime: dateEnd,
            textSymbolCount: prevRowsRightSymbols + currentRowRightSymbols,
            errorsCount
        })
    }

    useEffect(() => {
        if (isEnded) {
            scrollToResult()
        }
    }, [isEnded]);

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

    useEffect(() => {
        return () => handleResetAll()
    }, [randomText]);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (!rows) return
        const row = rows[currentRowIndex]

        switch (e.key) {
            case "Enter":
                if (row !== typingValue) return incrementErrors()
                return nextRow(rows)
            case "Tab":
                e.preventDefault()
                setValueWithTab()

        }
    }
    const handleChangePrintingInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        const currentTypingValue = e.target.value
        setTypingValue({ value: currentTypingValue, rows})
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
            handleStart()

        const isTypingValueRight = currentTypingValue === rows[currentRowIndex]
        const isLastRow = currentRowIndex === rows.length - 1

        if (isTypingValueRight && isLastRow)
            handleEnd()
    };

    return (
        <TypingCodeHandlersContext.Provider value={{
            ...typingAction,
            handleKeyDown,
            handleChangePrintingInput,
            containerRef,
            resultRef,
            handleNewText,
            scrollTo,
            resetTyping: handleResetAll,
            endTyping: handleEnd,
            startTyping: handleStart,
            scrollToResult,
            inputRef
        }}>
            {children}
        </TypingCodeHandlersContext.Provider>
    )
}