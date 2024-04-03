import {ComponentType, Dispatch, SetStateAction} from "react";

import {InputProps} from "@chakra-ui/react";

import {CommandsEnum} from "@shared/ui/terminal/ui/Terminal.constants.ts";

export interface TerminalInputProps extends InputProps {
    value: string
    isError?: boolean
    isSuccess?: boolean
}

export interface TerminalAnswerProps {
    terminalValue: string;
    setTerminalValues: Dispatch<SetStateAction<string[]>>;
}

export type AnswersKeys = keyof typeof CommandsEnum;

export type AnswersWithComponent = Partial<
    Record<AnswersKeys, ComponentType<TerminalAnswerProps>>
>
export type AnswersWithFunction = Partial<
    Record<AnswersKeys, (args: AnswersWithFunctionArgs) => void>
>

export interface AnswersWithFunctionArgs {
    value: string
    setValue: (value: string) => void
    terminalValues: string[]
    setTerminalValues: (value: string[]) => void
    closeTerminal: () => void
}

export interface TerminalProps {
    onClose: () => void
}
