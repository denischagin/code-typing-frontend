import {PrintingInput, PrintingRow, useRandomText} from "@entities/text";
import {useRow} from "@widgets/TypingCode";
import {KeyboardEvent, useEffect, useMemo} from "react";
import {useUnit} from "effector-react";
import {$timerStore, eventResetTimer, eventStartTimer, eventStopTimer} from "@entities/timer";
import {Box, Text} from "@chakra-ui/react";

export const TypingCode = () => {
    const randomText = useRandomText()
    const rows = useMemo(() => randomText?.split('\n').map((row) => row.replace(/\t/g, "    ")), [randomText])

    const {
        nextRow,
        currentRowIndex,
        setTypingValue,
        typingValue,
        setValueWithTab,
        resetState
    } = useRow(rows)


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
    }, [randomText, resetState, resetTimer]);

    useEffect(() => {
        if (currentRowIndex === 0 && timer.timerStatus !== "started" && typingValue.length === 1) {
            startTimer(Date.now())
        }
    }, [currentRowIndex, startTimer, timer.timerStatus, typingValue.length]);

    const handleKeyDown = (row: string, rowIndex: number) => (e: KeyboardEvent) => {
        if (!rows) return

        if (e.key === 'Enter' && row === typingValue) {
            if (rowIndex === rows.length - 1)
                return stopTimer(Date.now())
            nextRow()
        }
        if (e.key === 'Tab') {
            e.preventDefault()
            setValueWithTab()
        }
    }
    return (
        <Box>
            {!randomText && (
                <Text>
                    Пока еще нет текстов
                </Text>
            )}

            {rows?.map((row, rowIndex) => (
                <PrintingRow
                    key={rowIndex}
                    isActive={rowIndex === currentRowIndex}
                    index={rowIndex}
                    text={row}
                    isPrinted={currentRowIndex > rowIndex}
                    printingInput={currentRowIndex === rowIndex ? (
                        <PrintingInput
                            typingValue={typingValue}
                            isRightRow={row.startsWith(typingValue)}
                            handleKeyDown={handleKeyDown(row, rowIndex)}
                            onChange={(e) => setTypingValue(e.target.value)}
                            maxLength={row.length + 1}
                        />
                    ) : null}
                />
            ))}
        </Box>
    )
}