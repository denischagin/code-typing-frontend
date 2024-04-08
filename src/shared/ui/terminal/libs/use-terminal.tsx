import {
    ChangeEventHandler,
    KeyboardEventHandler,
    MouseEventHandler,
    useEffect,
    useRef,
    useState
} from "react"

import { useTerminalHistory } from "@shared/ui/terminal"
import {
    AnswersKeys,
    AnswersWithFunction,
    CommandsEnum,
    TerminalProps,
    UseTerminalReturn
} from "@shared/ui/terminal/types"

export const useTerminal = (props: TerminalProps): UseTerminalReturn => {
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

    const answersWithFunction: AnswersWithFunction = {
        clear: () => {
            setTerminalCommands([])
        },
        exit: () => {
            onClose()
        }
    }

    const handleAddCommand = () => {
        handleAddHistory(value)
        setValue("")

        setTerminalCommands(prev => [...prev, value])

        const answerFunction = answersWithFunction[value as AnswersKeys]
        answerFunction && answerFunction()
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

    return {
        terminalValue: value,
        handleChange,
        containerRef,
        inputRef,
        handleInputFocus,
        handleKeyDown,
        handleAddCommand,
        terminalCommands,
        setTerminalCommands
    }
}
