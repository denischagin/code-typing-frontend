import {forwardRef} from "react";
import {TypingCodeResultRowsProps} from "@widgets/TypingCode";
import {useResult} from "@entities/results";
import {convertMillisecondsToTime} from "@shared/libs";
import {Flex, Text, Tooltip} from "@chakra-ui/react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip as TooltipChart, XAxis, YAxis} from "recharts";
import {CodeContainer, CodeIndexesRange, CodeRow, CodeRows, useCodeErrors} from "@entities/code";

export const TypingCodeResultRows = forwardRef<HTMLDivElement, TypingCodeResultRowsProps>((props, scrollRef) => {
    const {startIndex} = props

    const {result: {resultTime, symbolPerMinute, symbolsPerSecond}} = useResult()
    const chartData = symbolsPerSecond.map((value, index) =>
        ({name: `${index + 1}`, value: value}));
    const {errorsCount} = useCodeErrors()

    const startRows = 10
    return (
        <>
            <CodeContainer>
                <CodeIndexesRange startIndex={startIndex} length={10}/>

                <CodeRows>
                    {Array.from({length: startRows}).map((_, index) => (
                        <CodeRow key={index} />
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
                                    {symbolPerMinute?.toFixed(3)}
                                </Text>
                            </Flex>
                        </Tooltip>
                    </CodeRow>

                    <CodeRow>
                        <Text fontSize="25px" color="whiteAlpha.500">
                            time: {convertMillisecondsToTime(resultTime ?? 0)}
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
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart width={1000} height={300} data={chartData}>
                                        <XAxis/>
                                        <YAxis/>
                                        <TooltipChart/>
                                        <CartesianGrid stroke="rgba(238, 238, 238, 0.46)" strokeDasharray="7 7"/>
                                        <Line type="monotone" dataKey="value" dot={false} stroke="#8884d8"/>
                                    </LineChart>
                                </ResponsiveContainer>
                            </Flex>
                        </Flex>
                    </CodeRow>
                </CodeRows>
            </CodeContainer>
        </>
    )
})