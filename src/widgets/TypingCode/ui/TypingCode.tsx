import {useState} from "react";
import {PrintingRow, useRandomText} from "@entities/text";

export const TypingCode = () => {
    const randomText = useRandomText()
    const [currentRowIndex, setCurrentRowIndex] = useState(0)
    const rows = randomText.split('\n')
    const [startIndent, setStartIndent] = useState(0)

    const handleNextRow = () => {
        const nextRow = rows[currentRowIndex + 1]

        if (nextRow) {
            const startIndexText = nextRow.search(/\S/g)
            setStartIndent(startIndexText === -1 ? 0 : startIndexText)
        } else
            setStartIndent(0)

        setCurrentRowIndex(prev => prev + 1)

    }

    return (
        <div>
            {rows.map((row, rowIndex) => (
                <PrintingRow
                    isActive={rowIndex === currentRowIndex}
                    index={rowIndex}
                    onNextRow={handleNextRow}
                    text={row}
                    indent={startIndent}
                    isPrinted={currentRowIndex > rowIndex}
                />
            ))}
        </div>
    )
}