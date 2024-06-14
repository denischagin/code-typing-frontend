import { ChangeEventHandler, FC, KeyboardEventHandler, useEffect, useState } from "react"

import { Box, Input, Text } from "@chakra-ui/react"

import {
    keyboardShortcuts,
    useItemsRecursiveList,
    useListArrows,
    useRecursiveListSearch
} from "@shared/libs"
import { CustomModalBackdrop, CustomModalContent } from "@shared/ui/modal"
import { RecursiveList } from "@shared/ui/recursiveList"
import { useGenerateHelpList } from "@widgets/HelpModal"

export type HelpModalProps = {
    onClose: () => void
    isOpen: boolean
}

export const HelpModal: FC<HelpModalProps> = props => {
    const { onClose, isOpen } = props

    const itemList = useGenerateHelpList(onClose)

    const [openItemNames, setOpenItemNames] = useState<string[]>([])
    const [searchValue, setSearchValue] = useState("")

    const openItems = useItemsRecursiveList(openItemNames, itemList)
    const openItemsWithSearch = useRecursiveListSearch(openItems, searchValue)

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
                        <Text>
                            <Text as="button" onClick={() => handleNavigateOpenItem(-1)}>
                                Menu
                            </Text>
                            {openItemNames.map((openItem, index) => (
                                <>
                                    {" > "}
                                    <Text as="button" onClick={() => handleNavigateOpenItem(index)}>
                                        {openItem}
                                    </Text>
                                </>
                            ))}
                        </Text>
                        <Box>
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
