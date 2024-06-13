import { RefObject, useMemo } from "react"

import { Link } from "@chakra-ui/react"

import { NavLink } from "react-router-dom"

import { useGetProgrammingLanguages } from "@entities/code"
import { getProgrammingLanguageLink, useLanguageNameSearch } from "@entities/programming-language"
import { RecursiveListItemType } from "@shared/types"
import { TileItemHelplist, TileText } from "@shared/ui/tile"

export const useGenerateLanguageList = () => {
    const languageName = useLanguageNameSearch()
    const { data: programmingLanguages } = useGetProgrammingLanguages()

    const languageList = useMemo(() => {
        return [{ name: "Random" }, ...(programmingLanguages ? programmingLanguages : [])].map(
            language => {
                return {
                    name: language.name,
                    renderItem: ({ isFocus, item, ref }) => {
                        return (
                            <Link
                                as={NavLink}
                                to={getProgrammingLanguageLink(language.name)}
                                key={language.name}
                            >
                                <TileItemHelplist
                                    isFocus={isFocus}
                                    ref={ref as RefObject<HTMLDivElement>}
                                    isActive={
                                        language.name === languageName ||
                                        (language.name === "Random" && !languageName)
                                    }
                                >
                                    <TileText>{item.name}</TileText>
                                </TileItemHelplist>
                            </Link>
                        )
                    }
                }
            }
        ) as RecursiveListItemType[]
    }, [languageName, programmingLanguages])

    return languageList
}
