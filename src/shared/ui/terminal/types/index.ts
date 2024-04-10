import {
    ChangeEventHandler,
    ComponentType,
    Dispatch,
    KeyboardEventHandler,
    MouseEventHandler,
    RefObject,
    SetStateAction
} from "react"

import { InputProps } from "@chakra-ui/react"

export interface TerminalInputProps extends InputProps {
    value: string
    isError?: boolean
    isSuccess?: boolean
}

export interface TerminalAnswerProps {
    terminalValue: string
    setTerminalValues: Dispatch<SetStateAction<string[]>>
    answersWithComponent: AnswersWithComponent
}

export type AnswersKeys = keyof typeof CommandsEnum

export type AnswersWithComponent = Partial<Record<AnswersKeys, ComponentType<TerminalAnswerProps>>>
export type AnswersWithFunction = Partial<Record<AnswersKeys, () => void>>

export interface TerminalProps {
    onClose: () => void
    isOpen: boolean
}

export enum CommandsEnum {
    info = "info",
    devs = "devs",
    stack = "stack",
    repos = "repos",
    exit = "exit",
    clear = "clear",
    help = "help"
}

export interface UseTerminalReturn {
    terminalValue: string
    handleChange: ChangeEventHandler<HTMLInputElement>
    containerRef: RefObject<HTMLDivElement>
    inputRef: RefObject<HTMLInputElement>
    handleInputFocus: MouseEventHandler<HTMLDivElement>
    handleKeyDown: KeyboardEventHandler<HTMLInputElement>
    handleAddCommand: () => void
    terminalCommands: string[]
    setTerminalCommands: Dispatch<SetStateAction<string[]>>
}
