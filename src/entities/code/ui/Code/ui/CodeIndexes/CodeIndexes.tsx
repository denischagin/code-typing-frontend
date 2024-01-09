import {Grid} from "@chakra-ui/react";
import {memo, ReactNode} from "react";

const CodeIndexes = ({children}: { children: ReactNode }) => {
    return (
        <Grid
            borderRight="2px solid"
            borderColor="whiteAlpha.200"
            pr="30px"
            autoRows="40px"
        >
            {children}
        </Grid>
    )
};

export default memo(CodeIndexes);
