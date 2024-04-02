import {InputProps} from "@chakra-ui/react";

export interface TerminalInputProps extends InputProps {
    value: string
    isError?: boolean
    isSuccess?: boolean
}
