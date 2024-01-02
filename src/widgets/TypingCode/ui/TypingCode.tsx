import {PrintingInput, PrintingRow, useRandomText} from "@entities/text";
import {useRow} from "@widgets/TypingCode";
import {KeyboardEvent} from "react";

export const TypingCode = () => {
    const randomText = useRandomText()
    const rows = randomText.split('\n')

    const {
        nextRow,
        currentRowIndex,
        setTypingValue,
        typingValue,
        setValueWithTab,
    } = useRow(rows)

    const handleKeyDown = (row: string) => (e: KeyboardEvent) => {
        if (e.key === 'Enter' && row === typingValue.trimEnd()) {
            nextRow()
        }
        if (e.key === 'Tab') {
            e.preventDefault()
            setValueWithTab()
        }
    }

    return (
        <div>
            {rows.map((row, rowIndex) => (
                <PrintingRow
                    isActive={rowIndex === currentRowIndex}
                    index={rowIndex}
                    text={row}
                    isPrinted={currentRowIndex > rowIndex}
                    printingInput={(
                        <PrintingInput
                            typingValue={typingValue}
                            isRightRow={row.startsWith(typingValue)}
                            handleKeyDown={handleKeyDown(row)}
                            onChange={(e) => setTypingValue(e.target.value)}
                        />
                    )}
                />
            ))}
        </div>
    )
}