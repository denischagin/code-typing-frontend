import {PrintingInput, PrintingRow, transformCodeToRows, useRandomText, useTypingAction} from "@entities/text";
import {getPrintingRowStatus, useTypingCode} from "@widgets/TypingCode";
import {ChangeEventHandler, KeyboardEvent, useEffect, useMemo} from "react";
import {useUnit} from "effector-react";
import {$timerStore, eventResetTimer, eventStartTimer, eventStopTimer} from "@entities/timer";
import {Box, Text} from "@chakra-ui/react";

export const TypingCode = () => {
    const endIndent = 2
    const [randomText, newText] = useRandomText()
    const rows = useMemo(() => transformCodeToRows(randomText ?? null), [randomText])

    const {
        typingValue,
        currentRowIndex,
        setTypingValue,
        setValueWithTab,
        resetState,
        nextRow
    } = useTypingCode(rows)

    const {timer, startTimer, stopTimer, resetTimer} = useUnit({
        timer: $timerStore,
        startTimer: eventStartTimer,
        stopTimer: eventStopTimer,
        resetTimer: eventResetTimer
    })

    const {
        isEnded,
        isNotStarted,
        start,
        end,
        reset
    } = useTypingAction({
        onStartEffect: () => {
            startTimer(Date.now())
        },
        onEndEffect: () => {
            newText()
            stopTimer(Date.now())
            window.scroll({
                top: document.body.scrollHeight,
                behavior: "smooth"
            })
        }
    })

    useEffect(() => {
        return () => {
            resetState()
            resetTimer()
            reset()
        }
    }, [randomText]);

    const handleKeyDown = (row: string, rowIndex: number) => (e: KeyboardEvent) => {
        if (!rows) return

        switch (e.key) {
            case "Enter":
                if (row !== typingValue)
                    return
                if (rowIndex === rows.length - 1) {
                    if (timer.timerStatus === "stopped") return
                    end()
                }
                return nextRow()
            case "Tab":
                e.preventDefault()
                setValueWithTab()

        }
    }
    const handleChangePrintingInput: ChangeEventHandler<HTMLInputElement> = (e) => {
        setTypingValue(e.target.value)
        const isFirstRow = currentRowIndex === 0
        const isTimerNotStarted = timer.timerStatus !== "started"

        start(isFirstRow && isTimerNotStarted && isNotStarted)
    };

    const getPrintingRowProps = (row: string, rowIndex: number) => {
        const status = getPrintingRowStatus(rowIndex, currentRowIndex)
        const isActive = status === "active"

        return {
            index: rowIndex,
            text: row,
            endIndent: endIndent,
            status,
            typingValue: isActive ? typingValue : null,
            printingInput: status === 'active' ? (
                <PrintingInput
                    typingValue={typingValue}
                    isRightRow={row.startsWith(typingValue)}
                    handleKeyDown={handleKeyDown(row, rowIndex)}
                    onChange={handleChangePrintingInput}
                    maxLength={row.length + 1}
                />
            ) : null
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
                    {...getPrintingRowProps(row, rowIndex)}
                />
            ))}
            {isEnded && (
                <>
                    {Array.from({length: 10}).map((_, index) => (
                        <PrintingRow text="" index={(rows?.length ?? 0) + index}/>
                    ))}
                    <PrintingRow text="wpm: 100" textProps={{textAlign: "center", fontSize: "35px"}} index={1000}/>
                    <PrintingRow text="accuracy: 100%" textProps={{textAlign: "center", fontSize: "35px"}}
                                 index={1000}/>
                    <PrintingRow text="time: 1.50.50" textProps={{textAlign: "center", fontSize: "35px"}} index={1000}/>
                    {Array.from({length: 20}).map((_, index) => (
                        <PrintingRow text="" index={(rows?.length ?? 0) + index}/>
                    ))}
                </>
            )}
        </Box>
    )
}