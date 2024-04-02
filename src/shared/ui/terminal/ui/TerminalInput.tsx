import {
    ChangeEventHandler,
    forwardRef,
    KeyboardEventHandler,
    MouseEventHandler,
    useImperativeHandle,
    useRef,
    useState
} from "react";

import {Box, Input, Text} from "@chakra-ui/react";

import {TerminalInputProps} from "@shared/ui/terminal";

export const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>((props, ref) => {
    const {
        onChange,
        onKeyDown,
        onClick,
        value,
        isError = false,
        isSuccess = false,
        ...restProps
    } = props

    const [cursorPosition, setCursorPosition] = useState<
        number | null | undefined
    >(0)

    const inputRef = useRef<HTMLInputElement>(null)

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setCursorPosition(e.target.selectionStart)
        onChange && onChange(e)
    }

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        requestAnimationFrame(() => {
            setCursorPosition(inputRef.current?.selectionStart)
        })
        onKeyDown && onKeyDown(e)
    }

    const handleClick: MouseEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault()
        setCursorPosition(inputRef.current?.selectionStart)
        onClick && onClick(e)
    }

    useImperativeHandle(ref, () => inputRef.current!)

    const valueBeforeCursor = cursorPosition
        ? value.slice(0, cursorPosition)
        : ''
    const cursorValue =
        cursorPosition !== null && cursorPosition !== undefined
            ? value[cursorPosition]
            : ''

    const valueAfterCursor =
        cursorPosition !== null && cursorPosition !== undefined
            ? value.slice(cursorPosition + 1)
            : value

    const maxLength = 50

    const color = isSuccess ? 'green.500' : isError ? 'red.500' : 'white'

    return (
        <Box
            pos="relative"
            w="70%"
        >
            <Text
                pos="absolute"
                top={0}
                left={0}
                whiteSpace="pre-wrap"
                maxW={`${maxLength}ch`}
                w="100%"
                color={color}
            >
                {valueBeforeCursor}
                <Text
                    as="span"
                    background={color}
                    color="black"
                >
                    {cursorValue}
                </Text>
                {valueAfterCursor}
                {cursorPosition === value.length && (
                    <Text
                        as="span"
                        background="whiteAlpha.600"
                        color="black"
                        whiteSpace="pre"
                    >
                        {` `}
                    </Text>
                )}
            </Text>

            <Input
                autoFocus
                pos="absolute"
                top={0}
                left={0}
                w={`${maxLength}ch`}
                maxLength={maxLength - 1}
                type="text"
                opacity={0}
                value={value}
                variant="unstyled"
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
                ref={inputRef}
                {...restProps}
            />
        </Box>
    )
})