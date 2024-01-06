import {PrintingInput, PrintingRow, transformCodeToRows, useRandomText, useTypingAction} from "@entities/text";
import {getPrintingRowStatus, TypingCodeResultRows, useTypingCode} from "@widgets/TypingCode";
import {ChangeEventHandler, KeyboardEvent, useEffect, useMemo} from "react";
import {useTimer} from "@entities/timer";
import {Box, Text} from "@chakra-ui/react";
import {useScrollIntoView} from "@shared/libs/hooks/scroll-into-view";

export const TypingCode = () => {
    const endIndent = 2
    const [randomText, newText] = useRandomText()

    const rows = useMemo(() => transformCodeToRows(randomText?.trim() ?? null), [randomText])
    const [resultRef, scrollToResult, containerRef] = useScrollIntoView<HTMLDivElement>(-50)

    const {
        typingValue,
        currentRowIndex,
        setTypingValue,
        setValueWithTab,
        resetState,
        nextRow
    } = useTypingCode(rows)

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
            startTimer(Date.now())
        },
        onEndEffect: () => {
            stopTimer(Date.now())
            scrollToResult()
            nextRow()
        }
    })

    useEffect(() => {
        return () => {
            resetState()
            resetTimer()
            resetTyping()
        }
    }, [randomText]);

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

    const getPrintingRowProps = (row: string, rowIndex: number) => {
        const status = getPrintingRowStatus(rowIndex, currentRowIndex)
        const isActive = status === "active"

        return {
            key: rowIndex,
            index: rowIndex,
            text: row,
            endIndent: endIndent,
            status,
            typingValue: isActive ? typingValue : null,
            printingInput: status === 'active' && !isEnded ? (
                <PrintingInput
                    typingValue={typingValue}
                    isRightRow={row.startsWith(typingValue)}
                    handleKeyDown={handleKeyDown}
                    onChange={handleChangePrintingInput}
                    maxLength={row.length + 1}
                />
            ) : null
        }
    }

    return (
        <Box h="100%" overflowY="scroll" ref={containerRef} mr="4px" pr="4px">
            {!randomText && (
                <Text>
                    Пока еще нет текстов
                </Text>
            )}

            {rows?.map((row, rowIndex) => (
                <PrintingRow {...getPrintingRowProps(row, rowIndex)} />
            ))}
            {isEnded && (
                <TypingCodeResultRows ref={resultRef} startIndex={rows?.length ?? 0}/>
            )}
        </Box>
    )
}