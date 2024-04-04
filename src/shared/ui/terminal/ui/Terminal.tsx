import {
    ChangeEventHandler,
    Fragment,
    KeyboardEventHandler,
    MouseEventHandler,
    useEffect,
    useRef,
    useState
} from "react"

import { Stack, Text } from "@chakra-ui/react"

import {
    TerminalAnswer,
    TerminalBackdrop,
    TerminalContent,
    TerminalInput,
    TerminalItem,
    useTerminalHistory
} from "@shared/ui/terminal"
import { AnswersKeys, CommandsEnum, TerminalProps } from "@shared/ui/terminal/types"
import { answersWithFunction } from "@shared/ui/terminal/ui/answers"

export const Terminal = (props: TerminalProps) => {
    const { onClose } = props

    const [value, setValue] = useState("")
    const [terminalCommands, setTerminalCommands] = useState<string[]>([CommandsEnum.help])

    const { handleAddHistory, handleHistoryDown, handleHistoryUp } = useTerminalHistory(
        terminalCommands,
        setValue
    )

    const containerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleScrollBottom = () => {
        containerRef.current?.scroll({ top: containerRef.current?.scrollHeight })
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
        setValue(e.target.value)
    }

    useEffect(() => {
        handleScrollBottom()
    }, [terminalCommands])

    const handleAddCommand = () => {
        handleAddHistory(value)
        setValue("")

        setTerminalCommands(prev => [...prev, value])

        const answerFunction = answersWithFunction[value as AnswersKeys]
        answerFunction &&
            answerFunction({
                setTerminalValues: setTerminalCommands,
                setValue,
                closeTerminal: onClose
            })
    }

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === "Enter") {
            handleAddCommand()
        }

        if (e.key === "ArrowUp") {
            e.preventDefault()
            handleHistoryUp()
        }

        if (e.key === "ArrowDown") {
            e.preventDefault()
            handleHistoryDown()
        }
    }

    const handleInputFocus: MouseEventHandler<HTMLDivElement> = e => {
        e.stopPropagation()
        inputRef.current?.focus()
    }

    return (
        <TerminalBackdrop onClick={onClose}>
            <TerminalContent onClick={handleInputFocus}>
                <Stack h="100%" w="100%" overflow="auto" ref={containerRef}>
                    {terminalCommands.map((terminalValue, index) => (
                        <Fragment key={index}>
                            <TerminalItem>
                                <Text
                                    color={terminalValue in CommandsEnum ? "green.500" : "red.500"}
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
                            isSuccess={value in CommandsEnum}
                            isError={!(value in CommandsEnum) && value !== ""}
                            value={value}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            ref={inputRef}
                        />
                    </TerminalItem>
                </Stack>
            </TerminalContent>
        </TerminalBackdrop>
    )
}
