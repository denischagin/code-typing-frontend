import {memo} from "react";

import {Flex, Text} from "@chakra-ui/react";

import {CodeIndexProps} from "@entities/code";

const CodeIndex = ({index}: CodeIndexProps) => {
    return (
        <Flex align="center">
            <Text color={"main.300"} fontWeight="bold" fontSize="20px">
                {index}
            </Text>
        </Flex>
    );
};

export default memo(CodeIndex);

