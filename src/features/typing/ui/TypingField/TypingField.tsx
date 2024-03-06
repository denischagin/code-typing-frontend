import {forwardRef} from "react";

import {Input} from "@chakra-ui/react";

import {TypingFieldProps} from "@features/typing";

export const TypingField =
    forwardRef<HTMLInputElement, TypingFieldProps>((props, ref) => {

        return (
            <Input
                {...props}
                pos="absolute"
                left={0}
                ref={ref}
                opacity={0}
                autoFocus
            />
        )
    })