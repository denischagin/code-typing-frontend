import { ChangeEventHandler, KeyboardEventHandler, useMemo, useState } from "react"

import { Input, Link, Stack } from "@chakra-ui/react"

import { NavLink, useSearchParams } from "react-router-dom"

import { ProgrammingLanguage, useGetProgrammingLanguages } from "@entities/code"
import { ProgrammingLanguagesList } from "@entities/programming-language"
import programmingLanguageIcon from "@shared/assets/programming-language.svg"
import { searchParamsEnum, settingTabs } from "@shared/constants"
import { keyboardShortcuts, useListArrows } from "@shared/libs"
import { useSearch } from "@shared/libs/hooks/search"
import { AsideButtons, AsideCloseButton, AsideTabPanel } from "@shared/ui/aside"
import { Tile, TileImage, TileText } from "@shared/ui/tile"

export const LanguageTabPanel = () => {
    const [searchValue, setSearchValue] = useState("")
    const [searchParams] = useSearchParams()

    const languageName = searchParams.get(searchParamsEnum.languageName)

    const { data: programmingLanguages } = useGetProgrammingLanguages()

    const searchList = useSearch(programmingLanguages, searchValue, item => item.name)
    const searchListWithRandom: ProgrammingLanguage[] = useMemo(
        () => [
            {
                name: "Random",
                logo: programmingLanguageIcon,
                UUID: "Random"
            },
            ...(searchList ?? [])
        ],
        [searchList]
    )

    const {
        containerRef,
        handleResetFocused,
        itemFocused,
        itemFocusedRef,
        handleArrowUp,
        handleArrowDown,
        handleEnter
    } = useListArrows(searchListWithRandom.length)

    const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = e => {
        setSearchValue(e.target.value)
        handleResetFocused()
    }

    const handleKeyDownSearch: KeyboardEventHandler = e => {
        keyboardShortcuts({
            ArrowDown: handleArrowDown,
            ArrowUp: handleArrowUp,
            Enter: handleEnter
        })(e)
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
                    autoFocus
                    onKeyDown={handleKeyDownSearch}
                    onFocus={handleResetFocused}
                    onBlur={handleResetFocused}
                />

                <ProgrammingLanguagesList
                    ref={containerRef}
                    programmingLanguages={searchListWithRandom}
                    renderItem={(item, index) => (
                        <Link
                            as={NavLink}
                            to={item.to}
                            key={item.key}
                            ref={index === itemFocused ? itemFocusedRef : null}
                        >
                            <Tile
                                border="1px solid"
                                borderColor={index === itemFocused ? "primary.500" : "transparent"}
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
