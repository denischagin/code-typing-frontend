import { ComponentType, Dispatch, SetStateAction } from "react"

import { InputProps } from "@chakra-ui/react"

export interface TerminalInputProps extends InputProps {
    value: string
    isError?: boolean
    isSuccess?: boolean
}

export interface TerminalAnswerProps {
    terminalValue: string
    setTerminalValues: Dispatch<SetStateAction<string[]>>
}

export type AnswersKeys = keyof typeof CommandsEnum

export type AnswersWithComponent = Partial<Record<AnswersKeys, ComponentType<TerminalAnswerProps>>>
export type AnswersWithFunction = Partial<
    Record<AnswersKeys, (args: AnswersWithFunctionArgs) => void>
>

export interface AnswersWithFunctionArgs {
    setValue: (value: string) => void
    setTerminalValues: (value: string[]) => void
    closeTerminal: () => void
}

export interface TerminalProps {
    onClose: () => void
}

export enum CommandsEnum {
    devs = "devs",
    stack = "stack",
    repos = "repos",
    exit = "exit",
    clear = "clear",
    help = "help"
}
