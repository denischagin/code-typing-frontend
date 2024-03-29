import {memo} from "react";

import {Grid} from "@chakra-ui/react";

import {CodeIndexesProps} from "@entities/code";

const CodeIndexes = (props: CodeIndexesProps) => {
    return (
        <Grid
            borderRight="2px solid"
            borderColor="main.200"
            pr="30px"
            autoRows="40px"
            {...props}
        />
    )
};

export default memo(CodeIndexes);
