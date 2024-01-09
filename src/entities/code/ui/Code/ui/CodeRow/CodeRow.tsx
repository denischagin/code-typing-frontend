import {Flex} from "@chakra-ui/react";
import {ReactNode} from "react";

const CodeRow = ({children}: { children?: ReactNode }) => {
    return (
        <Flex align="center" w="100%">
            {children}
        </Flex>
    );
};

export default CodeRow;
