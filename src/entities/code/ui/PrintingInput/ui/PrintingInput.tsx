import {forwardRef, memo} from "react";

import {Input} from '@chakra-ui/react'

import {PrintingInputProps} from "@entities/code";

const PrintingInput = forwardRef<HTMLInputElement, PrintingInputProps>((props, ref) => {
    const {
        typingValue,
        isRightRow,
        handleKeyDown,
        onChange,
        maxLength,
    } = props

    return (
        <Input
            fontSize={"25px"}
            pos="absolute"
            maxLength={maxLength}
            top="0"
            left="0"
            bottom="0"
            right="0"
            color={isRightRow ? "main.900" : 'red.400'}
            opacity={isRightRow ? "1" : "0.8"}
            autoFocus
            variant="unstyled"
            onKeyDown={handleKeyDown}
            value={typingValue}
            onChange={onChange}
            ref={ref}
        />
    )
})

export default memo(PrintingInput)