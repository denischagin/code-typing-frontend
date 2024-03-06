import {memo, ReactNode} from "react";

import {Grid} from "@chakra-ui/react";

const CodeRows = ({children}: { children: ReactNode }) => {
    return <Grid autoRows="40px">{children}</Grid>;
};

export default memo(CodeRows);
