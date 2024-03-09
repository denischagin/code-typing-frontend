import {MouseEventHandler, useState} from "react";

import {Button, Flex, Text, VStack,} from "@chakra-ui/react";

import {ResultJSON, ResultsItemProps} from "@entities/results";

export const ResultsItem = (props: ResultsItemProps) => {
    const {
        resultIndex,
        startTime,
        endTime
    } = props;

    const [isOpenJson, setIsOpenJson] = useState(false);


    const handleToggleJson: MouseEventHandler = (e) => {
        e.stopPropagation();

        setIsOpenJson(prev => !prev);
    }


    return (
        <>
            <Flex
                as="li"
                gap="10px"
                align="center"
                bg={"whiteAlpha.100"}
                px="10px" py="5px"
                borderRadius="10px"
                onClick={handleToggleJson}
                cursor="pointer"
            >
                <Text fontSize="large" as="strong">
                    {resultIndex + 1}.
                </Text>

                <VStack spacing={2}>
                    <Text fontSize="medium">{(Date.parse(endTime) - Date.parse(startTime)).toLocaleString()}</Text>
                </VStack>


                <Button size="sm" onClick={handleToggleJson} ml="auto">
                    {isOpenJson ? "Hide" : "Show more"}
                </Button>


            </Flex>

            {isOpenJson && (
                <ResultJSON {...props} />
            )}

        </>
    )
}