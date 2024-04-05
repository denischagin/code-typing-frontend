import { Box, Text } from "@chakra-ui/react"

import {
    CodeContainer,
    CodeIndexesRange,
    CodeRows,
    getPrintingRowStatus,
    PrintingInput,
    PrintingRow,
    PrintingRowProps,
    useCurrentRow,
    useRandomCode,
    useTypingCodeHandlers
} from "@entities/code"
import { useCurrentFont } from "@entities/font"
import { useNewCodeMouseDown } from "@features/code/new"
import { useRepeatCodeMouseDown } from "@features/code/repeat"
import { TypingCodeResultRows } from "@features/result"
import { CodeLoading, CodeLoadingProgress, CodeLoadingTitle } from "@shared/ui/loading"

export const TypingCode = () => {
    const endIndent = 2

    useNewCodeMouseDown()
    useRepeatCodeMouseDown()

    const { handleChangePrintingInput, handleKeyDown, isEnded, containerRef, resultRef, inputRef } =
        useTypingCodeHandlers()

    const { rows, randomText, isPending } = useRandomCode()

    const { currentRowIndex, typingValue } = useCurrentRow()
    const { typingFontSize } = useCurrentFont()
    const autoRows = typingFontSize + typingFontSize * 0.6 + "px"

    const getPrintingRowProps = (row: string, rowIndex: number): PrintingRowProps => {
        const status = getPrintingRowStatus(rowIndex, currentRowIndex)
        const isActive = status === "active"

        return {
            index: rowIndex,
            text: row,
            endIndent: endIndent,
            status,
            typingValue: isActive ? typingValue : null,
            printingInput:
                status === "active" && !isEnded ? (
                    <PrintingInput
                        ref={inputRef}
                        value={typingValue}
                        isRightRow={row.startsWith(typingValue)}
                        onKeyDown={handleKeyDown}
                        onChange={handleChangePrintingInput}
                        maxLength={row.length + 1}
                    />
                ) : null
        }
    }

    if (isPending) {
        return (
            <CodeLoading>
                <CodeLoadingTitle title="Loading typing content..." />
                <CodeLoadingProgress />
            </CodeLoading>
        )
    }

    return (
        <Box overflowX="hidden" overflowY="auto" ref={containerRef} mr="4px" pr="4px">
            {randomText === undefined && <Text>Пока еще нет текстов</Text>}

            <CodeContainer>
                <CodeIndexesRange startIndex={1} length={rows?.length ?? 0} autoRows={autoRows} />

                <CodeRows autoRows={autoRows}>
                    {rows?.map((row, rowIndex) => (
                        <PrintingRow key={rowIndex} {...getPrintingRowProps(row, rowIndex)} />
                    ))}
                </CodeRows>
            </CodeContainer>

            {isEnded && <TypingCodeResultRows ref={resultRef} startIndex={rows?.length ?? 0} />}
        </Box>
    )
}
