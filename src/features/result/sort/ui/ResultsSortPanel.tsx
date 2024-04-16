import { ChangeEventHandler } from "react"

import { Flex, Input, Select, Text } from "@chakra-ui/react"

import { fieldsSortBy } from "@entities/results/constants"
import { ResultsSortPanelProps } from "@features/result"

export const ResultsSortPanel = (props: ResultsSortPanelProps) => {
    const { resultParams, onChangeResults } = props

    const handleChangePageSize: ChangeEventHandler<HTMLInputElement> = e => {
        if (Number(e.target.value) < 1) {
            return onChangeResults("size", "1")
        }
        if (Number(e.target.value) > 100) {
            return onChangeResults("size", "100")
        }

        onChangeResults("size", e.target.value)
    }

    return (
        <Flex flexDirection="column" mb={4}>
            <Flex as="section" gap={2} align="center" justify="center">
                <Text>
                    SELECT * FROM Results{" "}
                    <Text as="span" color="primary.200">
                        ORDER BY
                    </Text>
                </Text>

                <Select
                    w="200px"
                    onChange={e => onChangeResults("sortBy", e.target.value)}
                    value={resultParams.sortBy}
                >
                    {fieldsSortBy.map(({ title, value }) => (
                        <option value={value} key={value}>
                            {title}
                        </option>
                    ))}
                </Select>

                <Select
                    w="100px"
                    onChange={e => onChangeResults("direction", e.target.value)}
                    value={resultParams.direction}
                >
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
                </Select>

                <Flex align="center" gap={2} ml={2}>
                    <Text color="primary.200">LIMIT</Text>

                    <Input
                        type="number"
                        onChange={handleChangePageSize}
                        value={resultParams.size}
                        maxW="100px"
                        min={1}
                        max={100}
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}
