import {Box, Text} from "@chakra-ui/react";

import {answersWithComponent} from "./answers";
import {CommandsEnum} from "./Terminal.constants.ts";
import {AnswersKeys, TerminalAnswerProps} from "@shared/ui/terminal";


export const TerminalAnswer = (props: TerminalAnswerProps) => {
    const {terminalValue} = props
    const Component = terminalValue in answersWithComponent
        ? answersWithComponent[terminalValue as AnswersKeys]
        : null

    if (!Component && terminalValue in CommandsEnum)
        return null

    return (
        <Box mb={8}>
            {Component ? (
                <Component {...props}/>
            ) : (
                <Text color="red.500">Command not found ("help" - list of commands)</Text>
            )}
        </Box>
    )
}