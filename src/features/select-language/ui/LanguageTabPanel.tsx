import { ChangeEventHandler, useState } from "react"

import { Input, Stack } from "@chakra-ui/react"

import { Link, useSearchParams } from "react-router-dom"

import { useGetProgrammingLanguages } from "@entities/code"
import { ProgrammingLanguagesList } from "@entities/programming-language"
import { searchParamsEnum, settingTabs } from "@shared/constants"
import { useSearch } from "@shared/libs/hooks/search"
import { AsideButtons, AsideCloseButton, AsideTabPanel } from "@shared/ui/aside"
import { Tile, TileImage, TileText } from "@shared/ui/tile"

export const LanguageTabPanel = () => {
    const [searchValue, setSearchValue] = useState("")
    const [searchParams] = useSearchParams()
    const languageName = searchParams.get(searchParamsEnum.languageName)

    const { data: programmingLanguages } = useGetProgrammingLanguages()

    const searchList = useSearch(programmingLanguages, searchValue, item => item.name)

    const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = e => {
        setSearchValue(e.target.value)
    }

    return (
        <AsideTabPanel overflow="hidden" display="flex" name={settingTabs.language}>
            <Stack overflow="hidden">
                <AsideButtons>
                    <AsideCloseButton>—</AsideCloseButton>
                </AsideButtons>

                <Input
                    variant="flushed"
                    placeholder="Search.."
                    value={searchValue}
                    onChange={handleChangeSearch}
                />

                <ProgrammingLanguagesList
                    programmingLanguages={searchList}
                    renderItem={item => (
                        <Link to={item.to} key={item.key}>
                            <Tile
                                isActive={
                                    item.name === languageName ||
                                    (item.name === "Random" && !languageName)
                                }
                            >
                                <TileText>{item.name}</TileText>
                                <TileImage src={item.logo} />
                            </Tile>
                        </Link>
                    )}
                />
            </Stack>
        </AsideTabPanel>
    )
}
