import {Text} from "@chakra-ui/react";

import {CodeContainer, CodeRow, CodeRows, transformCodeToRows, useGetCodeExampleByUuid} from "@entities/code";
import {DetailsCodeProps} from "@entities/results";
import {CodeLoading, CodeLoadingProgress} from "@shared/ui/loading";

export const DetailsCode = (props: DetailsCodeProps) => {
    const {uuid} = props

    const {
        data: codeExample,
        isLoading
    } = useGetCodeExampleByUuid(uuid)

    const rows = transformCodeToRows(codeExample?.content ?? null)
    if (isLoading) return (
        <CodeLoading>
            <CodeLoadingProgress fontSize="sm" />
        </CodeLoading>
    )

    return (
        <CodeContainer ml={5} overflowX="auto">
            <CodeRows autoRows="20px">
                {rows?.map((line, index) => (
                    <CodeRow key={index}>
                        <Text fontSize="sm" color="main.500" whiteSpace="pre" key={index}>
                            {line}
                        </Text>
                    </CodeRow>
                ))}
            </CodeRows>
        </CodeContainer>
    )
}