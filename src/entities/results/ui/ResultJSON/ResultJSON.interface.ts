import {ReactNode} from "react";

import {BoxProps} from "@chakra-ui/react";

export interface ResultJSONProps extends BoxProps {
    jsonKey: string;
    value: ReactNode
    details?: string
}