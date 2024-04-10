import { Fragment, KeyboardEventHandler } from "react"

import { Stack, Text } from "@chakra-ui/react"

import { keyboardShortcuts } from "@shared/libs"
import {
    TerminalAnswer,
    TerminalBackdrop,
    TerminalContent,
    TerminalInput,
    TerminalItem,
    useTerminal
} from "@shared/ui/terminal"
import { CommandsEnum, TerminalProps } from "@shared/ui/terminal/types"
import { answersWithComponent } from "@shared/ui/terminal/ui/answers"

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

    const handleTerminalKeyDown: KeyboardEventHandler = e => {
        keyboardShortcuts({
            Escape: () => {
                onClose()
            }
        })(e)
    }

    return (
        isOpen && (
            <TerminalBackdrop onClick={onClose}>
                <TerminalContent onClick={handleInputFocus} onKeyDown={handleTerminalKeyDown}>
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
                                    answersWithComponent={answersWithComponent}
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
