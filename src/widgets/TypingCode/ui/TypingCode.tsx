import {Box, Text} from "@chakra-ui/react";

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
} from "@entities/code";
import {TypingCodeResultRows} from "@features/result";

export const TypingCode = () => {
    const endIndent = 2

    const {
        handleChangePrintingInput,
        handleKeyDown,
        isEnded,
        containerRef,
        resultRef,
    } = useTypingCodeHandlers()

    const {rows, randomText} = useRandomCode()

    const {currentRowIndex, typingValue} = useCurrentRow()

    const getPrintingRowProps = (row: string, rowIndex: number): PrintingRowProps => {
        const status = getPrintingRowStatus(rowIndex, currentRowIndex)
        const isActive = status === "active"

        return {
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
        <Box overflowX="hidden" overflowY="auto" ref={containerRef} mr="4px" pr="4px">
            {!randomText && (
                <Text>
                    Пока еще нет текстов
                </Text>
            )}

            <CodeContainer>
                <CodeIndexesRange startIndex={1} length={rows?.length ?? 0}/>

                <CodeRows>
                    {rows?.map((row, rowIndex) => (
                        <PrintingRow key={rowIndex} {...getPrintingRowProps(row, rowIndex)} />
                    ))}
                </CodeRows>
            </CodeContainer>

            {isEnded && (
                <TypingCodeResultRows ref={resultRef} startIndex={rows?.length ?? 0}/>
            )}
        </Box>
    )
}