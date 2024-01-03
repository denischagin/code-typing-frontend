import {Box, Flex, Image, Input, Stack, Text, Tooltip} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {useGetProgrammingLanguages} from "@entities/text";
import {useState} from "react";
import {Aside, AsideCloseButton, AsideContent} from "@shared/ui/aside";
import ProgrammingLanguageIcon from '@shared/assets/programming-language.svg'
import {ProgrammingLanguagesList} from "@widgets/AsideSelectLanguage";
import {useSearch} from "@shared/libs/hooks/search";

export const AsideSelectLanguage = () => {
    const {typingCodeName} = useParams()
    const [isOpenAside, setIsOpenAside] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const {
        data: programmingLanguages,
    } = useGetProgrammingLanguages()

    const searchList = useSearch(
        programmingLanguages, searchValue, (item) => item.name
    )

    const currentCodeIcon = programmingLanguages?.find((language) =>
        language.name === typingCodeName
    )?.logo

    const handleCloseAside = () => {
        setIsOpenAside(prev => !prev)
    }

    const handleHover = () => {
        setIsHovered(true)
    }

    const handleLeave = () => {
        setIsHovered(false)
    }

    return (

        <Aside isOpen={isOpenAside} onClose={handleCloseAside} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <AsideContent>
                {isOpenAside ? (
                    <Stack p="10px">
                        <Box display="flex" w="100%" justifyContent="end">
                            <Tooltip label="Скрыть">
                                <div>
                                    <AsideCloseButton
                                        size="xs"
                                        variant="outline"
                                        opacity={isHovered ? "1" : "0"}
                                        pointerEvents={isHovered ? "all" : "none"}
                                    >
                                        —
                                    </AsideCloseButton>
                                </div>
                            </Tooltip>
                        </Box>

                        <Input
                            variant='flushed'
                            type="search"
                            placeholder="Поиск языков"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />

                        {searchList?.length !== 0 ? (
                            <ProgrammingLanguagesList
                                programmingLanguages={searchList}
                                onClick={handleCloseAside}
                                currentLanguageName={typingCodeName ?? null}
                            />
                        ) : (
                            <Text>Language not found</Text>
                        )}
                    </Stack>
                ) : (
                    <Flex justify="center">
                        <Tooltip label={typingCodeName ? `Current language: ${typingCodeName}` : "Select language"}>
                            <Box
                                as="button"
                                bg={"whiteAlpha.100"}
                                p="5px"
                                borderRadius="5px"
                                onClick={handleCloseAside}
                            >
                                <Image
                                    w="50px"
                                    src={currentCodeIcon ? currentCodeIcon : ProgrammingLanguageIcon}
                                />
                            </Box>
                        </Tooltip>
                    </Flex>
                )}
            </AsideContent>
        </Aside>
    )
}
