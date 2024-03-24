import {forwardRef} from "react";

import {Flex, Text, Tooltip} from "@chakra-ui/react";

import {useSaveResultOnEnd} from "./TypingCodeResultRows.hooks.ts";
import {CodeContainer, CodeIndexesRange, CodeRow, CodeRows, useCodeErrors} from "@entities/code";
import {SymbolsPerSecondChart, symbolsPerSecondToChart, useResult} from "@entities/results";
import {TypingCodeResultRowsProps} from "@features/result";
import {convertMillisecondsAndDateToTime} from "@shared/libs";

export const TypingCodeResultRows = forwardRef<HTMLDivElement, TypingCodeResultRowsProps>((props, scrollRef) => {
    const {startIndex} = props

    const {result} = useResult()
    const {resultTime, symbolsPerMinute, symbolsPerSecond} = result

    useSaveResultOnEnd()

    const chartData = symbolsPerSecondToChart(symbolsPerSecond)
    const {errorsCount} = useCodeErrors()

    const startRows = 10

    return (
        <>
            <CodeContainer>
                <CodeIndexesRange startIndex={startIndex} length={10}/>

                <CodeRows>
                    {Array.from({length: startRows}).map((_, index) => (
                        <CodeRow key={index}/>
                    ))}
                </CodeRows>
            </CodeContainer>

            <div ref={scrollRef}/>

            <CodeContainer>
                <CodeIndexesRange startIndex={startIndex + 10} length={20}/>

                <CodeRows>
                    <CodeRow>
                        <Tooltip label="symbols per minute">
                            <Flex mr="100px" gap="10px">
                                <Text as="span" fontSize="25px">
                                    spm:
                                </Text>

                                <Text as="span" fontSize="25px">
                                    {symbolsPerMinute?.toFixed(3)}
                                </Text>
                            </Flex>
                        </Tooltip>
                    </CodeRow>

                    <CodeRow>
                        <Text fontSize="25px" color="whiteAlpha.500">
                            time: {convertMillisecondsAndDateToTime(resultTime ?? 0)}
                        </Text>
                    </CodeRow>

                    <CodeRow>
                        <Text fontSize="25px" color="red.200">errors: {errorsCount}</Text>
                    </CodeRow>

                    <CodeRow>
                        <Flex direction="column" pos="relative" w="100%">
                            <Flex
                                pos="absolute"
                                top="0"
                                left="0"
                                h="300px"
                                width="97%"
                            >
                                <SymbolsPerSecondChart data={chartData}/>
                            </Flex>
                        </Flex>
                    </CodeRow>
                </CodeRows>
            </CodeContainer>
        </>
    )
})