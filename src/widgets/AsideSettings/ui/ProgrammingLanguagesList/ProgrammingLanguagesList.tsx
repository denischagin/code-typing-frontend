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

    return (
        <Stack>
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
                    <Link
                        to={`?${searchParamsEnum.languageName}=${name === currentLanguageName ? "" : name}`}
                    >
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