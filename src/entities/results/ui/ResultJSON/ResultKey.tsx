import {useState} from "react";

import {Box, Text} from '@chakra-ui/react'

import {CodeRow} from "@entities/code";
import {ResultJSONProps} from "@entities/results";

export const ResultKey = (props: ResultJSONProps) => {
    const {jsonKey, value, details, ...boxProps} = props
    const [isShowDetail, setIsShowDetail] = useState(false)

    const handleShowDetail = () => {
        setIsShowDetail(true)
    }

    const handleHideDetail = () => {
        setIsShowDetail(false)
    }

    return (
        <CodeRow onMouseEnter={handleShowDetail} onMouseLeave={handleHideDetail} cursor="pointer">
            <Box
                whiteSpace="pre"
                {...boxProps}
            >
                {`    `}"{jsonKey}": {value},
                {!!details && (
                    <Text as="span" color="main.500" opacity={isShowDetail ? 1 : 0} transition="opacity 200ms">
                        {`  // ${details}`}
                    </Text>
                )}

            </Box>
        </CodeRow>
    )
}