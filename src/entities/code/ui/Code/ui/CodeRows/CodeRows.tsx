import {Grid} from "@chakra-ui/react";
import {memo, ReactNode} from "react";

const CodeRows = ({children}: { children: ReactNode }) => {
    return <Grid autoRows="40px">{children}</Grid>;
};

export default memo(CodeRows);
