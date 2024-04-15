import { Flex, Select, Text } from "@chakra-ui/react"

import { ResultsSortPanelProps } from "./ResultsSortPanel.interface.ts"
import { fieldsSortBy } from "@entities/results/constants"

export const ResultsSortPanel = (props: ResultsSortPanelProps) => {
    const { resultParams, onChangeResults } = props

    return (
        <Flex as="section" gap={2} align="center" mb={4} justify="center">
            <Text>
                SELECT * FROM Results{" "}
                <Text as="span" color="primary.200">
                    ORDER BY
                </Text>
            </Text>

            <Select w="200px" onChange={onChangeResults("sortBy")} value={resultParams.sortBy}>
                {fieldsSortBy.map(({ title, value }) => (
                    <option value={value} key={value}>
                        {title}
                    </option>
                ))}
            </Select>

            <Select
                w="100px"
                onChange={onChangeResults("direction")}
                value={resultParams.direction}
            >
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
            </Select>
        </Flex>
    )
}
