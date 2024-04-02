import {ChangeEventHandler, Fragment, KeyboardEventHandler, useEffect, useRef, useState,} from 'react'

import {Stack, Text} from '@chakra-ui/react'

import {commands} from "./Terminal.constants.ts";
import {TerminalAnswer, TerminalBackdrop, TerminalContent, TerminalInput, TerminalItem} from "@shared/ui/terminal";

export const Terminal = () => {
    const [value, setValue] = useState('')
    const [terminalValues, setTerminalValues] = useState<string[]>([])
    const containerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        containerRef.current?.scroll({top: containerRef.current?.scrollHeight})
    }, [terminalValues]);

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            setTerminalValues([...terminalValues, value])
            setValue('')
            if (value === commands.clear) {
                setTerminalValues([])
            }
        }
    }

    return (
        <TerminalBackdrop>
            <TerminalContent onClick={() => inputRef.current?.focus()}>
                <Stack h="100%" w="100%" overflow="auto" ref={containerRef}>
                    {terminalValues.map((terminalValue, index) => (
                        <Fragment key={terminalValue + index}>
                            <TerminalItem>
                                <Text color={terminalValue in commands ? 'green.500' : 'red.500'}>{terminalValue}</Text>
                            </TerminalItem>

                            <TerminalAnswer terminalValue={terminalValue} terminalValues={terminalValues}/>
                        </Fragment>
                    ))}

                    <TerminalItem>
                        <TerminalInput
                            isSuccess={value in commands}
                            isError={!(value in commands) && value !== ''}
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

