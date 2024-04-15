import { MouseEventHandler, useState } from "react"

import { Button, Flex, Text, Tooltip } from "@chakra-ui/react"

import { ResultJSON, ResultsItemProps } from "@entities/results"
import { formatterDate } from "@shared/constants"

export const ResultsItem = (props: ResultsItemProps) => {
    const { endTime, symbolsPerMinute } = props

    const [isOpenJson, setIsOpenJson] = useState(false)

    const handleToggleJson: MouseEventHandler = e => {
        e.stopPropagation()

        setIsOpenJson(prev => !prev)
    }

    // TODO add prop to json result
    // const result = (Date.parse(endTime) - Date.parse(startTime)).toLocaleString()

    return (
        <>
            <Flex
                as="li"
                gap="10px"
                align="center"
                bg={"main.100"}
                px="10px"
                py="5px"
                borderRadius="10px"
                onClick={handleToggleJson}
                cursor="pointer"
            >
                <Text fontSize="medium">spm: {symbolsPerMinute}</Text>

                <Text fontSize="medium" ml="auto">
                    {formatterDate.format(Date.parse(endTime))}
                </Text>

                <Tooltip label={isOpenJson ? "Hide details" : "Show details"}>
                    <Button size="sm" onClick={handleToggleJson}>
                        {isOpenJson ? "-" : ">"}
                    </Button>
                </Tooltip>
            </Flex>

            {isOpenJson && <ResultJSON {...props} />}
        </>
    )
}
