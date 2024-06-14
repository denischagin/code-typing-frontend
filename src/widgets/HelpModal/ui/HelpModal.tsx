import { ChangeEventHandler, FC, KeyboardEventHandler, useEffect, useState } from "react"

import { Box, Button, Input, InputGroup, InputRightElement, Tooltip } from "@chakra-ui/react"

import { localStorageItems } from "@shared/constants"
import {
    keyboardShortcuts,
    parseBoolean,
    useItemsRecursiveList,
    useListArrows,
    useLocalStorage
} from "@shared/libs"
import { BreadCrumbs } from "@shared/ui/breadCrumbs"
import { CustomModalBackdrop, CustomModalContent } from "@shared/ui/modal"
import { RecursiveList } from "@shared/ui/recursiveList"
import { useGenerateHelpList, useHelpModalSearch } from "@widgets/HelpModal"

export type HelpModalProps = {
    onClose: () => void
    isOpen: boolean
}

export const HelpModal: FC<HelpModalProps> = props => {
    const { onClose, isOpen } = props

    const [isAllSearch, setIsAllSearch] = useLocalStorage<boolean>(
        localStorageItems.isSmartSearch,
        true,
        parseBoolean,
        item => String(item)
    )

    const itemList = useGenerateHelpList(onClose)

    const [openItemNames, setOpenItemNames] = useState<string[]>([])
    const [searchValue, setSearchValue] = useState("")

    const openItems = useItemsRecursiveList(openItemNames, itemList)
    const openItemsWithSearch = useHelpModalSearch(openItems, searchValue, !!isAllSearch)

    const handleToggleAllSearch = () => {
        setIsAllSearch(prev => !prev)
    }

    const {
        containerRef,
        handleArrowDown,
        handleArrowUp,
        handleEnter,
        handleResetFocused,
        itemFocused,
        itemFocusedRef
    } = useListArrows<HTMLDivElement, HTMLDivElement>(openItemsWithSearch.length)

    useEffect(() => {
        handleResetFocused()
    }, [openItemsWithSearch.length])

    const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = e => {
        setSearchValue(e.target.value)
        handleResetFocused()
    }

    const handleClose = () => {
        onClose()
        setSearchValue("")
        handleResetFocused()
        setOpenItemNames([])
    }

    const handleKeyDownSearch: KeyboardEventHandler = e => {
        e.stopPropagation()
        keyboardShortcuts({
            ArrowDown: handleArrowDown,
            ArrowUp: handleArrowUp,
            Enter: e => {
                handleEnter(e)
                if (searchValue === ":q") {
                    handleClose()
                }
            },
            Tab: handleArrowDown,
            Escape: () => {
                handleResetFocused()
                setSearchValue("")
                if (openItemNames.length === 0) onClose()
                setOpenItemNames(prev => prev.slice(0, -1))
            },
            "Ctrl+s": () => {
                e.preventDefault()
                handleToggleAllSearch()
            }
        })(e)
    }

    const handleNavigateOpenItem = (index: number) => {
        setOpenItemNames(prev => [...prev.slice(0, index + 1)])
    }

    const handleOpenNew = () => {
        handleResetFocused()
        setSearchValue("")
    }

    return (
        isOpen && (
            <CustomModalBackdrop onClick={handleClose}>
                <CustomModalContent onClick={e => e.stopPropagation()}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        onKeyDown={handleKeyDownSearch}
                        overflow="hidden"
                    >
                        <BreadCrumbs crumbs={openItemNames} onCrumbClick={handleNavigateOpenItem} />
                        <Box>
                            <InputGroup>
                                <Input
                                    variant="flushed"
                                    placeholder="Search.."
                                    value={searchValue}
                                    onChange={handleChangeSearch}
                                    autoFocus
                                    onKeyDown={handleKeyDownSearch}
                                    onFocus={handleResetFocused}
                                    onBlur={e => {
                                        handleResetFocused()
                                        e.target.focus()
                                    }}
                                />
                                <InputRightElement w="fit-content">
                                    <Tooltip
                                        label={`Smart search - search with nested items (${isAllSearch ? "Enabled" : "Disabled"}) Ctrl+S`}
                                    >
                                        <Button
                                            size="sm"
                                            variant={isAllSearch ? "solid" : "ghost"}
                                            onClick={handleToggleAllSearch}
                                            fontWeight="normal"
                                        >
                                            Smart
                                        </Button>
                                    </Tooltip>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                        <RecursiveList
                            containerRef={containerRef}
                            itemFocusedIndex={itemFocused}
                            itemFocusedRef={itemFocusedRef}
                            openItems={openItemsWithSearch}
                            setOpenItemNames={setOpenItemNames}
                            onOpenNew={handleOpenNew}
                        />
                    </Box>
                </CustomModalContent>
            </CustomModalBackdrop>
        )
    )
}
