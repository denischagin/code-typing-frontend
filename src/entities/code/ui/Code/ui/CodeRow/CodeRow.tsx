import {Flex} from "@chakra-ui/react";

import {CodeRowProps} from "@entities/code";


const CodeRow = (props: CodeRowProps) => {
    return (
        <Flex align="center" w="100%" {...props}/>
    );
};

export default CodeRow;
