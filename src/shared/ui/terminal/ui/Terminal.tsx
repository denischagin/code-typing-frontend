import {ChangeEventHandler, Fragment, KeyboardEventHandler, useEffect, useRef, useState,} from 'react'

import {Stack, Text} from '@chakra-ui/react'

import {CommandsEnum} from "./Terminal.constants.ts";
import {
    AnswersKeys,
    TerminalAnswer,
    TerminalBackdrop,
    TerminalContent,
    TerminalInput,
    TerminalItem,
    TerminalProps
} from "@shared/ui/terminal";
import {answersWithFunction} from "@shared/ui/terminal/ui/answers";

export const Terminal = (props: TerminalProps) => {
    const {onClose} = props

    const [value, setValue] = useState('')
    const [terminalValues, setTerminalValues] = useState<string[]>([CommandsEnum.help])
    const containerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleScrollBottom = () => {
        containerRef.current?.scroll({top: containerRef.current?.scrollHeight})
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        handleScrollBottom()
    }, [terminalValues]);

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            setTerminalValues([...terminalValues, value])
            setValue('')

            const answerFunction = answersWithFunction[value as AnswersKeys]

            answerFunction && answerFunction({
                setTerminalValues,
                terminalValues,
                setValue,
                value,
                closeTerminal: onClose,
            })
        }
    }

    return (
        <TerminalBackdrop>
            <TerminalContent onClick={() => inputRef.current?.focus()}>
                <Stack h="100%" w="100%" overflow="auto" ref={containerRef}>
                    {terminalValues.map((terminalValue, index) => (
                        <Fragment key={terminalValue + index}>
                            <TerminalItem>
                                <Text
                                    color={terminalValue in CommandsEnum ? 'green.500' : 'red.500'}>{terminalValue}</Text>
                            </TerminalItem>

                            <TerminalAnswer terminalValue={terminalValue} setTerminalValues={setTerminalValues}/>
                        </Fragment>
                    ))}

                    <TerminalItem>
                        <TerminalInput
                            isSuccess={value in CommandsEnum}
                            isError={!(value in CommandsEnum) && value !== ''}
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

