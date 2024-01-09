import {Flex, Text} from "@chakra-ui/react";
import {CodeIndexProps} from "@entities/code";
import {memo} from "react";

const CodeIndex = ({index}: CodeIndexProps) => {
    return (
        <Flex align="center">
            <Text color={"whiteAlpha.300"} fontWeight="bold" fontSize="20px">
                {index}
            </Text>
        </Flex>
    );
};

export default memo(CodeIndex);

