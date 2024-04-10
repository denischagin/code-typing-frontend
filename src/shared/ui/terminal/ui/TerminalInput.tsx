import {
    ChangeEventHandler,
    forwardRef,
    KeyboardEventHandler,
    useImperativeHandle,
    useRef,
    useState
} from "react"

import { Box, Input, Text } from "@chakra-ui/react"

import { TerminalInputProps } from "@shared/ui/terminal/types"

export const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>((props, ref) => {
    const { onChange, onKeyDown, value, isError = false, isSuccess = false, ...restProps } = props

    const [cursorPosition, setCursorPosition] = useState<number | null | undefined>(0)

    const inputRef = useRef<HTMLInputElement>(null)

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
        setCursorPosition(e.target.selectionStart)
        onChange && onChange(e)
    }

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = e => {
        requestAnimationFrame(() => {
            setCursorPosition(inputRef.current?.selectionStart)
        })
        onKeyDown && onKeyDown(e)
    }

    useImperativeHandle(ref, () => inputRef.current!)

    const valueBeforeCursor = cursorPosition ? value.slice(0, cursorPosition) : ""
    const cursorValue =
        cursorPosition !== null && cursorPosition !== undefined ? value[cursorPosition] : ""

    const valueAfterCursor =
        cursorPosition !== null && cursorPosition !== undefined
            ? value.slice(cursorPosition + 1)
            : value

    const maxLength = 200

    const color = isSuccess ? "green.500" : isError ? "red.500" : "white"

    return (
        <Box pos="relative">
            <Text whiteSpace="pre-wrap" maxW={`${maxLength}ch`} color={color} wordBreak="break-all">
                {valueBeforeCursor}
                <Text as="span" background={color} color="black">
                    {cursorValue}
                </Text>
                {valueAfterCursor}
                {cursorPosition === value.length && (
                    <Text as="span" background="whiteAlpha.600" color="black" whiteSpace="pre">
                        {` `}
                    </Text>
                )}
            </Text>

            <Input
                autoFocus
                pos="absolute"
                bottom={-2}
                left={0}
                w={0}
                h={0}
                maxLength={maxLength - 1}
                type="text"
                opacity={0}
                value={value}
                variant="unstyled"
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                {...restProps}
            />
        </Box>
    )
})
