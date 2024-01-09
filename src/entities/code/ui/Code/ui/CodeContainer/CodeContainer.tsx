import {Grid} from "@chakra-ui/react";
import {memo, ReactNode} from "react";

const CodeContainer = ({children}: { children: ReactNode }) => {
    return (
        <Grid templateColumns="80px 1fr" gap="10px" overflow="hidden">
            {children}
        </Grid>
    );
};

export default memo(CodeContainer);