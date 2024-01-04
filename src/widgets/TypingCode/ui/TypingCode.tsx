import {PrintingInput, PrintingRow, transformCodeToRows, useRandomText} from "@entities/text";
import {useTypingCode} from "@widgets/TypingCode";
import {ChangeEventHandler, KeyboardEvent, useEffect, useMemo, useRef} from "react";
import {useUnit} from "effector-react";
import {$timerStore, eventResetTimer, eventStartTimer, eventStopTimer} from "@entities/timer";
import {Box, Text} from "@chakra-ui/react";

export const TypingCode = () => {
    const endIndent = 2
    const randomText = useRandomText()
    const rows = useMemo(() => transformCodeToRows(randomText ?? null), [randomText])
    const rowRef = useRef<HTMLDivElement>(null)

    const
        {
            typingValue,
            currentRowIndex,
            setTypingValue, setValueWithTab, resetState, nextRow
        } = useTypingCode(rows)

    const {timer, startTimer, stopTimer, resetTimer} = useUnit({
        timer: $timerStore,
        startTimer: eventStartTimer,
        stopTimer: eventStopTimer,
        resetTimer: eventResetTimer
    })

    useEffect(() => {
        return () => {
            resetState()
            resetTimer()
        }
    }, [randomText]);

    const handleKeyDown = (row: string, rowIndex: number) => (e: KeyboardEvent) => {
        if (!rows) return

        const keyHandler = {
            Enter: () => {
                if (row !== typingValue)
                    return
                if (rowIndex === rows.length - 1)
                    return stopTimer(Date.now())
                nextRow()
            },
            Tab: () => {
                e.preventDefault()
                setValueWithTab()
            }
        }

        keyHandler[e.key]?.()
    }
    const handleChangePrintingInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        setTypingValue(e.target.value)
        const isFirstRow = currentRowIndex === 0
        const isTimerNotStarted = timer.timerStatus !== "started"
        const isFirstSymbolInput = typingValue.length === 1

        if (isFirstRow && isTimerNotStarted && isFirstSymbolInput)
            startTimer(Date.now())
    };

    return (
        <Box>
            {!randomText && (
                <Text>
                    Пока еще нет текстов
                </Text>
            )}

            {rows?.map((row, rowIndex) => {
                const isCurrentRow = rowIndex === currentRowIndex

                return (
                    <PrintingRow
                        key={rowIndex}
                        isActive={isCurrentRow}
                        index={rowIndex}
                        text={row}
                        isPrinted={currentRowIndex > rowIndex}
                        endIndent={endIndent}
                        typingValue={isCurrentRow ? typingValue : null}
                        printingInput={isCurrentRow ? (
                            <PrintingInput
                                typingValue={typingValue}
                                isRightRow={row.startsWith(typingValue)}
                                handleKeyDown={handleKeyDown(row, rowIndex)}
                                onChange={handleChangePrintingInput}
                                maxLength={row.length + 1}
                            />
                        ) : null}
                    />
                );
            })}
        </Box>
    )
}