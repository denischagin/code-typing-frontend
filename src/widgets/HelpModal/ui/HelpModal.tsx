import { ChangeEventHandler, FC, KeyboardEventHandler, MouseEventHandler, useState } from "react"

import { Box, Input, Text } from "@chakra-ui/react"

import { keyboardShortcuts, useItemsRecursiveList, useListArrows, useSearch } from "@shared/libs"
import { CustomModalBackdrop, CustomModalContent } from "@shared/ui/modal"
import { RecursiveList } from "@shared/ui/recursiveList"
import { useGenerateHelpList } from "@widgets/HelpModal"

export type HelpModalProps = {
    onClose: () => void
    isOpen: boolean
}

export const HelpModal: FC<HelpModalProps> = props => {
    const { onClose, isOpen } = props

    const itemList = useGenerateHelpList()

    const [openItemNames, setOpenItemNames] = useState<string[]>([])
    const [searchValue, setSearchValue] = useState("")

    const openItems = useItemsRecursiveList(openItemNames, itemList)
    const openItemsWithSearch = useSearch(openItems, searchValue, item => item.name)

    const {
        containerRef,
        handleArrowDown,
        handleArrowUp,
        handleEnter,
        handleResetFocused,
        itemFocused,
        itemFocusedRef
    } = useListArrows<HTMLDivElement, HTMLDivElement>(openItems.length)

    const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = e => {
        setSearchValue(e.target.value)
        handleResetFocused()
    }

    const handleCloseClick: MouseEventHandler = () => {
        onClose()
    }

    const handleKeyDownSearch: KeyboardEventHandler = e => {
        e.stopPropagation()
        keyboardShortcuts({
            ArrowDown: handleArrowDown,
            ArrowUp: handleArrowUp,
            Enter: e => {
                handleEnter(e)
            },
            Tab: handleArrowDown,
            Escape: () => {
                handleResetFocused()
                if (openItemNames.length === 0) onClose()
                setOpenItemNames(prev => prev.slice(0, -1))
            }
        })(e)
    }

    const handleNavigateOpenItem = (index: number) => {
        setOpenItemNames(prev => [...prev.slice(0, index + 1)])
    }

    return (
        isOpen && (
            <CustomModalBackdrop onClick={handleCloseClick}>
                <CustomModalContent onClick={e => e.stopPropagation()}>
                    <Box display="flex" flexDirection="column" onKeyDown={handleKeyDownSearch}>
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
                        <Input
                            variant="flushed"
                            placeholder="Search.."
                            value={searchValue}
                            onChange={handleChangeSearch}
                            autoFocus
                            onKeyDown={handleKeyDownSearch}
                            onFocus={handleResetFocused}
                            onBlur={handleResetFocused}
                            mb={3}
                        />
                        <RecursiveList
                            containerRef={containerRef}
                            itemFocusedIndex={itemFocused}
                            itemFocusedRef={itemFocusedRef}
                            openItems={openItemsWithSearch}
                            setOpenItemNames={setOpenItemNames}
                            onOpenNew={handleResetFocused}
                        />
                    </Box>
                </CustomModalContent>
            </CustomModalBackdrop>
        )
    )
}
