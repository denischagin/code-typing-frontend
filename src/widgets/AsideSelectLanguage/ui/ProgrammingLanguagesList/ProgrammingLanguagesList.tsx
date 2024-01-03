import {Flex, Image, Stack, StackItem, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {ProgrammingLanguagesListProps} from "@widgets/AsideSelectLanguage";

export const ProgrammingLanguagesList = (props: ProgrammingLanguagesListProps) => {
    const {
        programmingLanguages,
        onClick,
        currentLanguageName,
    } = props

    if (!programmingLanguages) return null

    return (
        <Stack>
            {programmingLanguages?.map(({name, UUID, logo}) => (
                <StackItem key={UUID} onClick={onClick}>
                    <Link
                        to={`${name === currentLanguageName ? "" : name}`}
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