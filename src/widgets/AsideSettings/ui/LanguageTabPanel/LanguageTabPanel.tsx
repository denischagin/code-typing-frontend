import { Box, Input, Stack, Text, Tooltip } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { LanguageTabPanelProps, ProgrammingLanguagesList } from "@widgets/AsideSettings";
import { AsideCloseButton } from "@shared/ui/aside";
import { useSearch } from "@shared/libs/hooks/search";
import { useState } from "react";
import { searchParamsEnum } from "@shared/constants";
import { useGetProgrammingLanguages } from "@entities/code";

export const LanguageTabPanel = (props: LanguageTabPanelProps) => {
    const { handleClosePanel } = props

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
        <Stack p="10px" overflow="hidden">
            <Box display="flex" w="100%" justifyContent="end">
                <Tooltip label="Скрыть">
                    <div>
                        <AsideCloseButton
                            size="xs"
                            variant="outline"
                        >
                            —
                        </AsideCloseButton>
                    </div>
                </Tooltip>
            </Box>

            <Input
                variant='flushed'
                type="search"
                placeholder="Search languages"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />

            {searchList?.length !== 0 ? (
                <ProgrammingLanguagesList
                    programmingLanguages={searchList}
                    onClick={handleClosePanel}
                    currentLanguageName={languageName ?? null}
                />
            ) : (
                <Text>Language not found</Text>
            )}
        </Stack>
    )
}
