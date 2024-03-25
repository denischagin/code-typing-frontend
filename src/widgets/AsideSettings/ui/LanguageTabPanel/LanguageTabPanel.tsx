import {useState} from "react";

import {Box, Input, Stack} from "@chakra-ui/react";

import {Link, useSearchParams} from "react-router-dom";

import {useGetProgrammingLanguages} from "@entities/code";
import {searchParamsEnum} from "@shared/constants";
import {useSearch} from "@shared/libs/hooks/search";
import {AsideCloseButton, AsideTabPanel} from "@shared/ui/aside";
import {Tile, TileImage, TileText} from "@shared/ui/tile";
import {ProgrammingLanguagesList} from "@widgets/AsideSettings";

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
        <AsideTabPanel overflow="hidden" display="flex">
            <Stack p="10px" overflow="hidden" w="200px">
                <Box display="flex" w="100%" justifyContent="end">
                    <AsideCloseButton>
                        —
                    </AsideCloseButton>
                </Box>

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
