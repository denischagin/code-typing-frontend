import {forwardRef, memo} from "react";

import {Input} from '@chakra-ui/react'

import {PrintingInputProps} from "@entities/code";
import {useCurrentFont} from "@entities/font";

const PrintingInput = forwardRef<HTMLInputElement, PrintingInputProps>((props, ref) => {
    const {
        value,
        isRightRow,
        onKeyDown,
        onChange,
        maxLength,
    } = props

    const { typingFontSize } = useCurrentFont()

    return (
        <Input
            fontSize={typingFontSize + "px"}
            pos="absolute"
            maxLength={maxLength}
            top="0"
            left="0"
            bottom="0"
            right="0"
            color={isRightRow ? "printingTextActive" : 'red.400'}
            opacity={isRightRow ? "1" : "0.8"}
            autoFocus
            variant="unstyled"
            onKeyDown={onKeyDown}
            value={value}
            onChange={onChange}
            ref={ref}
        />
    )
})

export default memo(PrintingInput)