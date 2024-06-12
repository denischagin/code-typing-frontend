import { Dispatch, Fragment, RefObject, SetStateAction } from "react"

import { Box, Text } from "@chakra-ui/react"

import { RecursiveListItemType } from "@shared/types"
import { Tile } from "@shared/ui/tile"

export type RecursiveListProps = {
    openItems: RecursiveListItemType[]
    setOpenItemNames: Dispatch<SetStateAction<string[]>>
    itemFocusedIndex: number
    itemFocusedRef: RefObject<HTMLDivElement>
    containerRef: RefObject<HTMLDivElement>
    onOpenNew?: () => void
}

export const RecursiveList = (props: RecursiveListProps) => {
    const {
        openItems,
        setOpenItemNames,
        itemFocusedIndex,
        itemFocusedRef,
        containerRef,
        onOpenNew
    } = props

    const handleOpenNew = (newOpen: RecursiveListItemType) => {
        if (!newOpen.children) return
        setOpenItemNames(prev => [...prev, newOpen.name])
        onOpenNew && onOpenNew()
    }

    return (
        <Box display="flex" flexDir="column" gap="5px" ref={containerRef}>
            {openItems && openItems.length ? (
                openItems?.map((item, index) => (
                    <Fragment key={item.name}>
                        {item.renderItem ? (
                            item.renderItem({
                                onClick: () =>
                                    item.action ? item.action : () => handleOpenNew(item),
                                item: item,
                                ref: index === itemFocusedIndex ? itemFocusedRef : undefined,
                                isFocus: index === itemFocusedIndex
                            })
                        ) : (
                            <Tile
                                as="button"
                                onClick={() => (item.action ? item.action() : handleOpenNew(item))}
                                border="1px solid transparent"
                                borderColor={index === itemFocusedIndex ? "primary.800" : undefined}
                                ref={index === itemFocusedIndex ? itemFocusedRef : undefined}
                            >
                                {item.name}
                            </Tile>
                        )}
                    </Fragment>
                ))
            ) : (
                <Text>Not found item</Text>
            )}
        </Box>
    )
}
