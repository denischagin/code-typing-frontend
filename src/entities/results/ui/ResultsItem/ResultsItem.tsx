import {useState} from "react";

import {Flex, Text, VStack,} from "@chakra-ui/react";

import {ResultsItemProps} from "@entities/results";
import {ShowTextModal} from "@features/show-text";

export const ResultsItem = (props: ResultsItemProps) => {
    const {
        resultIndex,
        text,
        startTime,
        endTime
    } = props;

    const [isOpenTextModal, setIsOpenTextModal] = useState(false)

    const handleCloseTextModal = () => {
        setIsOpenTextModal(false)
    }
    // const handleOpenTextModal = () => {
    //     setIsOpenTextModal(true)
    // }
    // TODO button to open text modal

    return (
        <>
            <Flex
                gap="10px"
                align="center"
                bg={"whiteAlpha.100"}
                px="10px" py="5px"
                borderRadius="10px"
            >
                <Text fontSize="large" as="strong">
                    {resultIndex + 1}.
                </Text>

                <VStack spacing={2}>
                    <Text fontSize="medium">{(Date.parse(endTime) - Date.parse(startTime)).toLocaleString()}</Text>
                </VStack>
            </Flex>

            <ShowTextModal isOpen={isOpenTextModal} onClose={handleCloseTextModal} text={text ?? ""}/>
        </>
    )
}