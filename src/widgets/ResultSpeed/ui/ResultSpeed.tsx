import {Divider, Flex, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import {convertMillisecondsToTime} from "@shared/libs";
import {useSearchParams} from "react-router-dom";
import {searchParamsEnum} from "@shared/constants";
import {useFindResultById, getResultStats} from "@entities/results";
import {useEffect} from "react";

export const ResultSpeed = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const resultId = searchParams.get(searchParamsEnum.resultId)

    const resultById = useFindResultById(resultId)
    const resultStats = getResultStats(resultById?.result ?? null)

    useEffect(() => {
        if (resultById?.resultIndex === -1) setSearchParams({})
    }, [resultById?.resultIndex, setSearchParams]);

    if (!resultId || !resultById?.result || !resultStats)
        return null

    const {timeResultMilliseconds} = resultById.result
    const {wordsPerMinuteString, charactersPerMinuteString} = resultStats

    return (
        <>
            <Divider my={4}/>

            <Flex direction="column" align="center">
                <Text fontSize="xx-large">
                    Result: {(resultById.resultIndex) + 1}
                </Text>
                <Text fontSize="xxx-large">
                    {convertMillisecondsToTime(timeResultMilliseconds)}
                </Text>

                <Tabs position="relative" variant="unstyled">
                    <TabList>
                        <Tab>Symbols / minute</Tab>
                        <Tab>Words / minute</Tab>
                    </TabList>
                    <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="blue.500"
                        borderRadius="1px"
                    />
                    <TabPanels>
                        <TabPanel>
                            <Text fontSize="x-large" align="center">{charactersPerMinuteString} sym./m.</Text>
                        </TabPanel>
                        <TabPanel>
                            <Text fontSize="x-large" align="center">{wordsPerMinuteString} words /m.</Text>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                {/*<Text>*/}
                {/*    <Text as="strong">Text:</Text> {text}*/}
                {/*</Text>*/}
            </Flex>

        </>
    )
}