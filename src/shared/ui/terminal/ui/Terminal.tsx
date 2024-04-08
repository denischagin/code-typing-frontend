import { Fragment } from "react"

import { Stack, Text } from "@chakra-ui/react"

import {
    TerminalAnswer,
    TerminalBackdrop,
    TerminalContent,
    TerminalInput,
    TerminalItem,
    useTerminal
} from "@shared/ui/terminal"
import { CommandsEnum, TerminalProps } from "@shared/ui/terminal/types"

export const Terminal = (props: TerminalProps) => {
    const { onClose, isOpen } = props

    const {
        terminalCommands,
        handleChange,
        handleInputFocus,
        inputRef,
        containerRef,
        handleKeyDown,
        setTerminalCommands,
        terminalValue
    } = useTerminal(props)

    return (
        isOpen && (
            <TerminalBackdrop onClick={onClose}>
                <TerminalContent onClick={handleInputFocus}>
                    <Stack h="100%" w="100%" overflow="auto" ref={containerRef}>
                        {terminalCommands.map((terminalValue, index) => (
                            <Fragment key={index}>
                                <TerminalItem>
                                    <Text
                                        color={
                                            terminalValue in CommandsEnum ? "green.500" : "red.500"
                                        }
                                    >
                                        {terminalValue}
                                    </Text>
                                </TerminalItem>

                                <TerminalAnswer
                                    terminalValue={terminalValue}
                                    setTerminalValues={setTerminalCommands}
                                />
                            </Fragment>
                        ))}

                        <TerminalItem>
                            <TerminalInput
                                isSuccess={terminalValue in CommandsEnum}
                                isError={!(terminalValue in CommandsEnum)}
                                value={terminalValue}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                ref={inputRef}
                            />
                        </TerminalItem>
                    </Stack>
                </TerminalContent>
            </TerminalBackdrop>
        )
    )
}
