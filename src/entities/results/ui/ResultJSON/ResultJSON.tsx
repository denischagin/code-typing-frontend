import {useState} from "react";

import {BoxProps, Button, Text} from "@chakra-ui/react";

import {CodeContainer, CodeRow, CodeRows, transformCodeToRows, useGetCodeExampleByUuid} from "@entities/code";
import {ResultJSONKey, ResultsItemProps, SymbolsPerSecondChart, symbolsPerSecondToChart} from "@entities/results";

export const ResultJSON = (props: ResultsItemProps) => {
    const {resultIndex, symbolsPerSecond, codeExampleUUID, ...restResult} = props
    const [openDetails, setOpenDetails] = useState<undefined | 'code' | 'chart'>()

    const chartData = symbolsPerSecondToChart(symbolsPerSecond)
    const {
        data: codeExample,
    } = useGetCodeExampleByUuid(codeExampleUUID, !!codeExampleUUID && openDetails === 'code')

    const fields: Record<string, BoxProps & { details?: string }> = {
        accuracy: {color: 'green.100', details: "Accuracy"},
        errorsCount: {color: 'red.100', details: "Errors count"},
        symbolsPerMinute: {color: 'blue.100', details: "Symbols per minute (spm)"},
        startTime: {color: 'gray.400', details: "Start time"},
        endTime: {color: 'gray.400', details: "End time"},
        // text: {},
    }

    const handleToggleChart = () => {
        setOpenDetails(prev => prev === 'chart' ? undefined : 'chart')
    }

    const handleToggleCode = () => {
        setOpenDetails(prev => prev === 'code' ? undefined : 'code')
    }

    const rows = transformCodeToRows(codeExample?.content ?? null)

    return (
        <>
            <CodeContainer>
                <CodeRows autoRows="33px">
                    <CodeRow>
                        <Text as="span" color="gray.500" ml={3}>
                            // result
                            number: {resultIndex + 1}
                        </Text>
                    </CodeRow>
                    <CodeRow>
                        {`{`}
                    </CodeRow>
                    {Object.entries(fields).map(([key, props]) => (
                        <ResultJSONKey
                            key={key}
                            jsonKey={key}
                            value={JSON.stringify(restResult[key as keyof typeof restResult])}
                            {...props}
                        />
                    ))}
                    <ResultJSONKey
                        jsonKey={"symbolsPerSecond"}
                        value={
                            <Button
                                variant='outline'
                                size='sm'
                                onClick={handleToggleChart}
                            >
                                {openDetails === 'chart' ? 'Hide chart' : 'Show chart'}
                            </Button>
                        }
                        details="Chart with symbols per second"
                    />
                    <ResultJSONKey
                        jsonKey={"text"}
                        value={
                            <Button
                                variant='outline'
                                size='sm'
                                onClick={handleToggleCode}
                            >
                                {openDetails === 'code' ? 'Hide code' : 'Show code'}
                            </Button>
                        }
                        details="Show typing code"
                    />
                    <CodeRow>{`}`}</CodeRow>
                </CodeRows>
            </CodeContainer>

            {openDetails === 'chart' && (
                <SymbolsPerSecondChart data={chartData}/>
            )}
            {openDetails === 'code' && (
                <CodeContainer ml={5} overflowX="auto">
                    <CodeRows autoRows="20px">
                        {rows?.map((line, index) => (
                            <CodeRow>
                                <Text fontSize="sm" color="gray.500" whiteSpace="pre" key={index}>{line}</Text>
                            </CodeRow>
                        ))}
                    </CodeRows>
                </CodeContainer>
            )}
        </>
    )
}