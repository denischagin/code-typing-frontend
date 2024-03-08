import {useState} from "react";

import {Button, Text} from "@chakra-ui/react";

import {CodeContainer, CodeRow, CodeRows} from "@entities/code";
import {ResultJSONKey, ResultsItemProps, SymbolsPerSecondChart, symbolsPerSecondToChart} from "@entities/results";

export const ResultJSON = (props: ResultsItemProps) => {
    const {resultIndex, symbolsPerSecond, ...restResult} = props
    const [isOpenChart, setIsOpenChart] = useState(false)

    const chartData = symbolsPerSecondToChart(symbolsPerSecond)

    const fieldDetails: Record<keyof ResultsItemProps, string> = {
        accuracy: "Accuracy",
        // text: "Typing code text",
        symbolsPerSecond: "Symbols per second (graph with symbols per second)",
        symbolPerMinute: "Symbols per minute (spm)",
        resultTime: "Result time",
        startTime: "Start time",
        endTime: "End time",
    }

    const handleToggleChart = () => {
        setIsOpenChart(prev => !prev)
    }

    return (
        <>
            {/*<Text fontSize="sm" color="green.500">*/}
            {/*    Status 200 ok*/}
            {/*</Text>*/}

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
                    {Object.keys(restResult).map((key) => (
                        <ResultJSONKey
                            key={key}
                            jsonKey={key}
                            value={JSON.stringify(restResult[key as keyof typeof restResult])}
                            details={fieldDetails[key as keyof typeof restResult]}
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