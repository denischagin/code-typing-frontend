import {ResultsItemProps} from "@entities/results";
import {convertMillisecondsToTime} from "@shared/libs";
import {
    Flex,
    VStack,
    Text,
    Button,
} from "@chakra-ui/react";
import {useState} from "react";
import {ShowTextModal} from "@features/show-text";

export const ResultsItem = ({
                                timeResultMilliseconds,
                                resultIndex,
                                charactersPerMinuteString,
                                wordsPerMinuteString,
                                text,
                            }: ResultsItemProps) => {
    const [isOpenTextModal, setIsOpenTextModal] = useState(false)

    const handleCloseTextModal = () => {
        setIsOpenTextModal(false)
    }
    const handleOpenTextModal = () => {
        setIsOpenTextModal(true)
    }

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

                <Text fontSize="x-large" flexGrow={1}>
                    {convertMillisecondsToTime(timeResultMilliseconds)}
                </Text>

                <Button colorScheme="blue" onClick={handleOpenTextModal}>Text</Button>

                <VStack spacing={2}>
                    <Text fontSize="medium"><Text as="strong"
                                                  fontSize="large">{charactersPerMinuteString}</Text> sym./min. </Text>
                    <Text fontSize="medium"> <Text as="strong" fontSize="large">{wordsPerMinuteString}</Text> word/min.
                    </Text>
                </VStack>
            </Flex>

            <ShowTextModal isOpen={isOpenTextModal} onClose={handleCloseTextModal} text={text}/>
        </>
    )
}