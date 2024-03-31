import {useState} from "react";

import {Text} from "@chakra-ui/react";

import {DetailsCode} from "./DetailsCode.tsx";
import {DetailsKey} from "./DetailsKey.tsx";
import {detailsKeys, fields} from "./ResultJSON.constants.ts";
import {CodeContainer, CodeRow, CodeRows} from "@entities/code";
import {
    ResultDetails,
    ResultKey,
    ResultsItemProps,
    SymbolsPerSecondChart,
    symbolsPerSecondToChart
} from "@entities/results";

export const ResultJSON = (props: ResultsItemProps) => {
    const {
        resultIndex,
        symbolsPerSecond,
        codeExampleUUID,
        ...restResult
    } = props
    const [openDetails, setOpenDetails] = useState<undefined | ResultDetails>()

    const chartData = symbolsPerSecondToChart(symbolsPerSecond)

    const handleToggleDetails = (details: ResultDetails) => () => {
        setOpenDetails(prev => prev === details ? undefined : details)
    }

    return (
        <>
            <CodeContainer>
                <CodeRows autoRows="33px">
                    <CodeRow>
                        <Text as="span" color="main.500" ml={3}>
                            // result
                            number: {resultIndex + 1}
                        </Text>
                    </CodeRow>
                    <CodeRow>
                        {`{`}
                    </CodeRow>
                    {Object.entries(fields).map(([key, props]) => (
                        <ResultKey
                            key={key}
                            jsonKey={key}
                            value={JSON.stringify(restResult[key as keyof typeof restResult])}
                            {...props}
                        />
                    ))}
                    {detailsKeys.map(({jsonKey, name}) => (
                        <DetailsKey
                            key={jsonKey}
                            name={name}
                            onShowDetails={handleToggleDetails(name)}
                            jsonKey={jsonKey}
                            openDetails={openDetails}
                        />
                    ))}
                    <CodeRow>{`}`}</CodeRow>
                </CodeRows>
            </CodeContainer>

            {openDetails === 'chart' && (
                <SymbolsPerSecondChart data={chartData}/>
            )}
            {openDetails === 'code' && !!codeExampleUUID && (
                <DetailsCode uuid={codeExampleUUID}/>
            )}
        </>
    )
}