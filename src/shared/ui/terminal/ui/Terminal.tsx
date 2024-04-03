import {
    ChangeEventHandler,
    Fragment,
    KeyboardEventHandler,
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
    TerminalItem
} from "@shared/ui/terminal"
import { AnswersKeys, CommandsEnum, TerminalProps } from "@shared/ui/terminal/types"
import { answersWithFunction } from "@shared/ui/terminal/ui/answers"

export const Terminal = (props: TerminalProps) => {
    const { onClose } = props

    const [value, setValue] = useState("")
    const [terminalCommands, setTerminalCommands] = useState<string[]>([CommandsEnum.help])
    const [terminalHistory, setTerminalHistory] = useState<string[]>([CommandsEnum.help])
    const [historyIndex, setHistoryIndex] = useState<number>(terminalCommands.length)

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
        setTerminalCommands(prev => [...prev, value])
        setTerminalHistory(prev => [...prev, value])

        setValue("")

        const answerFunction = answersWithFunction[value as AnswersKeys]

        answerFunction &&
            answerFunction({
                setTerminalValues: setTerminalCommands,
                setValue,
                closeTerminal: onClose
            })
    }

    useEffect(() => {
        setHistoryIndex(terminalHistory.length)
    }, [terminalHistory])

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.key === "Enter") {
            handleAddCommand()
        }

        if (e.key === "ArrowUp") {
            e.preventDefault()

            if (historyIndex <= 0) return

            setValue(terminalHistory[historyIndex - 1])
            setHistoryIndex(prev => prev - 1)
        }
        if (e.key === "ArrowDown") {
            e.preventDefault()

            if (historyIndex >= terminalHistory.length - 1) {
                setValue("")
                return setHistoryIndex(terminalHistory.length)
            }

            setValue(terminalHistory[historyIndex + 1])
            setHistoryIndex(prev => prev + 1)
        }
    }

    return (
        <TerminalBackdrop>
            <TerminalContent onClick={() => inputRef.current?.focus()}>
                <Stack h="100%" w="100%" overflow="auto" ref={containerRef}>
                    {terminalCommands.map((terminalValue, index) => (
                        <Fragment key={terminalValue + index}>
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
