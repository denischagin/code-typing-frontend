import {ComponentType} from "react";

import {Box, Flex, Image, Text} from "@chakra-ui/react";

import {commands} from "./Terminal.constants.ts";
import {GithubUserItem} from "@shared/ui/github";

export interface TerminalAnswerProps {
    terminalValue: string;
    terminalValues: string[];
}

const answer: Record<string, ComponentType> = {
    [commands.devs]: () =>
        <Flex gap={10} wrap="wrap">
            <GithubUserItem username="denischagin"/>
            <GithubUserItem username="ttodoshi"/>
        </Flex>,
    [commands.stack]: () =>
        <Flex direction="column" gap={4}>
            <Flex gap={2} wrap="wrap" align="center">
                <Text mr={2}>Frontend</Text>
                {[
                    'https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg',
                    'https://profilinator.rishav.dev/skills-assets/typescript-original.svg',
                    'https://profilinator.rishav.dev/skills-assets/chakraui.png',
                ]
                    .map((value) => (
                        <Image key={value} w={10} h={10} src={value}/>
                    ))}
            </Flex>

            <Flex gap={2} wrap="wrap" align="center">
                <Text mr={2}>Backend</Text>
                {[
                    'https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg',
                    'https://profilinator.rishav.dev/skills-assets/springio-icon.svg',
                    'https://profilinator.rishav.dev/skills-assets/go-original.svg',
                    'https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg',
                    'https://profilinator.rishav.dev/skills-assets/redis-original-wordmark.svg',
                    'https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg',
                    'https://profilinator.rishav.dev/skills-assets/rabbitmq-icon.svg',
                ]
                    .map((value) => (
                        <Image key={value} w={10} h={10} src={value}/>
                    ))}
            </Flex>
        </Flex>,
    [commands.help]: () =>
        <Box>
            {[...Object.keys(answer)].map((value, index) => (
                <Text key={index}>{value}</Text>
            ))}
        </Box>,
}

export const TerminalAnswer = (props: TerminalAnswerProps) => {
    const {terminalValue} = props
    const Component = answer[terminalValue]

    if (!Component && terminalValue in commands)
        return null

    return (
        <Box mb={8}>
            {Component ? <Component/> :
                <Text color="red.500">Command not found ("help" - list of commands)</Text>}
        </Box>
    )
}