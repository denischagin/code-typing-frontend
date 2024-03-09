import {useState} from "react";

import {BoxProps, Button, Text} from "@chakra-ui/react";

import {CodeContainer, CodeRow, CodeRows} from "@entities/code";
import {ResultJSONKey, ResultsItemProps, SymbolsPerSecondChart, symbolsPerSecondToChart} from "@entities/results";

export const ResultJSON = (props: ResultsItemProps) => {
    const {resultIndex, symbolsPerSecond, ...restResult} = props
    const [isOpenChart, setIsOpenChart] = useState(false)

    const chartData = symbolsPerSecondToChart(symbolsPerSecond)

    const fields: Record<string, BoxProps & { details?: string }> = {
        accuracy: {color: 'green.100', details: "Accuracy"},
        errorsCount: {color: 'red.100', details: "Errors count"},
        symbolsPerMinute: {color: 'blue.100', details: "Symbols per minute (spm)"},
        startTime: {color: 'gray.400', details: "Start time"},
        endTime: {color: 'gray.400', details: "End time"},
        id: {color: "gray.500"},
        userID: {color: "gray.500"},
        codeExampleUUID: {color: "gray.500"},
        text: {},
    }

    const handleToggleChart = () => {
        setIsOpenChart(prev => !prev)
    }

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
                                {isOpenChart ? "Hide" : "Show chart"}
                            </Button>
                        }
                        details="Chart with symbols per second"
                    />
                    <CodeRow>{`}`}</CodeRow>
                </CodeRows>
            </CodeContainer>

            {isOpenChart && (
                <SymbolsPerSecondChart data={chartData}/>
            )}
        </>
    )
}