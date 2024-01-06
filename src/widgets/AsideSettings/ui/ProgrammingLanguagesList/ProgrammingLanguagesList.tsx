import {Flex, Image, Stack, StackItem, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {ProgrammingLanguagesListProps} from "src/widgets/AsideSettings";
import {searchParamsEnum} from "@shared/constants";
import ProgrammingLanguageIcon from '@shared/assets/programming-language.svg'

export const ProgrammingLanguagesList = (props: ProgrammingLanguagesListProps) => {
    const {
        programmingLanguages,
        onClick,
        currentLanguageName,
    } = props

    if (!programmingLanguages) return null

    const getLinkByName = (name: string) => `?${searchParamsEnum.languageName}=${encodeURIComponent(name)}`

    return (
        <Stack overflowY="scroll" h="100%" pr="5px">
            <StackItem key={'default'} onClick={onClick}>
                <Link to={``}>
                    <Flex
                        justifyContent="space-between"
                        alignContent="center"
                        bg={!currentLanguageName ? "whiteAlpha.300" : "whiteAlpha.100"}
                        p="10px"
                        borderRadius="10px"
                    >
                        <Text>Random </Text>
                        <Image w="30px" src={ProgrammingLanguageIcon}/>
                    </Flex>
                </Link>
            </StackItem>
            {programmingLanguages?.map(({name, UUID, logo}) => (
                <StackItem key={UUID} onClick={onClick}>
                    <Link to={getLinkByName(name)}>
                        <Flex
                            justifyContent="space-between"
                            alignContent="center"
                            bg={name === currentLanguageName ? "whiteAlpha.300" : "whiteAlpha.100"}
                            p="10px"
                            borderRadius="10px"
                        >
                            <Text>{name}</Text>
                            <Image w="30px" src={logo}/>
                        </Flex>
                    </Link>
                </StackItem>
            ))}

        </Stack>
    )
}