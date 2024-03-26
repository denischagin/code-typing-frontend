import {useState} from "react";

import {Input, Stack} from "@chakra-ui/react";

import {Link, useSearchParams} from "react-router-dom";

import {useGetProgrammingLanguages} from "@entities/code";
import {ProgrammingLanguagesList} from "@entities/programming-language";
import {LANGUAGE_TAB} from "@features/select-language/constants";
import {searchParamsEnum} from "@shared/constants";
import {useSearch} from "@shared/libs/hooks/search";
import {AsideButtons, AsideCloseButton, AsideTabPanel} from "@shared/ui/aside";
import {Tile, TileImage, TileText} from "@shared/ui/tile";

export const LanguageTabPanel = () => {
    const [searchValue, setSearchValue] = useState("")
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    const {
        data: programmingLanguages,
    } = useGetProgrammingLanguages()

    const searchList = useSearch(
        programmingLanguages, searchValue, (item) => item.name
    )
    return (
        <AsideTabPanel overflow="hidden" display="flex" name={LANGUAGE_TAB}>
            <Stack overflow="hidden">
                <AsideButtons>
                    <AsideCloseButton>
                        —
                    </AsideCloseButton>
                </AsideButtons>

                <Input
                    variant='flushed'
                    type="search"
                    placeholder="Search.."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />

                <ProgrammingLanguagesList
                    programmingLanguages={searchList}
                    renderItem={(item) => (
                        <Link to={item.to} key={item.key}>
                            <Tile isActive={item.name === languageName || item.name === "Random" && !languageName}>
                                <TileText>{item.name}</TileText>
                                <TileImage src={item.logo}/>
                            </Tile>
                        </Link>
                    )}
                />
            </Stack>
        </AsideTabPanel>
    )
}
