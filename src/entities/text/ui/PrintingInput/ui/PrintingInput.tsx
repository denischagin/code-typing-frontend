import {Input} from '@chakra-ui/react'
import {PrintingInputProps} from "@entities/text";

export const PrintingInput = (props: PrintingInputProps) => {
    const {
        typingValue,
        isRightRow,
        handleKeyDown,
        onChange,
    } = props

    return (
        <Input
            fontSize={"25px"}
            pos="absolute"
            color={isRightRow ? "white" : 'red.400'}
            opacity={isRightRow ? "1" : "0.8"}
            autoFocus
            variant="unstyled"
            onKeyDown={handleKeyDown}
            value={typingValue}
            onChange={onChange}
        />
    )
}
