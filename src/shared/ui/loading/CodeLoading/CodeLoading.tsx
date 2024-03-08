import {FC, useEffect, useRef, useState} from "react";

import {Flex, Text} from "@chakra-ui/react";

import {getRandomNumber} from "@shared/libs";
import {CodeLoadingProps} from "@shared/ui/loading";


export const CodeLoading: FC<CodeLoadingProps> = (props) => {
    const {
        maxLoadingCount = 50,
        loadingSymbol = "#",
        loadingEmptySymbol = '.',
        loadingDelay = 200,
        loadingTitle = 'Loading page:',
        px = 4
    } = props;

    const [loadingCount, setLoadingCount] = useState(0);
    const [loadingHash, setLoadingHash] = useState(Date.now());

    const interval = useRef<NodeJS.Timeout>();

    useEffect(() => {
        interval.current = setInterval(() => {
            const random = getRandomNumber(1, Math.floor(maxLoadingCount / 6));
            setLoadingCount(prev => prev + random > maxLoadingCount ? maxLoadingCount : prev + random);
        }, loadingDelay);

        return () => clearInterval(interval.current);
    }, [loadingDelay, loadingHash, maxLoadingCount]);

    useEffect(() => {
        if (loadingCount >= maxLoadingCount) {
            setTimeout(() => {
                setLoadingHash(Date.now());
                setLoadingCount(0);
            }, 200)
        }
    }, [loadingCount, maxLoadingCount]);

    const filledLoadingSymbol = loadingSymbol.repeat(loadingCount);
    const emptyLoadingSymbol = loadingEmptySymbol.repeat(maxLoadingCount - loadingCount);

    return (
        <Flex w="100%" justify="space-between">
            <Text fontSize="2xl">
                {`>>`} {loadingTitle}
            </Text>

            <Text color="whiteAlpha.900" fontSize="xl" whiteSpace="pre" textAlign="end" px={px}>
                [{filledLoadingSymbol + emptyLoadingSymbol}]
            </Text>
        </Flex>
    )
}