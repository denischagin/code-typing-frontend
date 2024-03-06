import {memo, ReactNode} from "react";

import {Grid} from "@chakra-ui/react";

const CodeContainer = (props: { children: ReactNode }) => {
    return (
        <Grid templateColumns="80px 1fr" gap="10px" overflow="hidden" {...props} />
    );
};

export default memo(CodeContainer);