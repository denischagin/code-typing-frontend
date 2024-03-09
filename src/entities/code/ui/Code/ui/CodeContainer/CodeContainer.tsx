import {memo} from "react";

import {Grid} from "@chakra-ui/react";

import {CodeContainerProps} from "@entities/code";

const CodeContainer = (props: CodeContainerProps) => {
    return (
        <Grid templateColumns="80px 1fr" gap="10px" overflow="hidden" {...props} />
    );
};

export default memo(CodeContainer);