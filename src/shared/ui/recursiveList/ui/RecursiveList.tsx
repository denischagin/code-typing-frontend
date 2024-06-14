import { Dispatch, Fragment, RefObject, SetStateAction } from "react"

import { Box, Text } from "@chakra-ui/react"

import { RecursiveListItemType } from "@shared/types"
import { TileItemHelplist, TileText } from "@shared/ui/tile"

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
        if (newOpen.parents) {
            setOpenItemNames([...newOpen.parents, newOpen.name])
        } else {
            setOpenItemNames(prev => [...prev, newOpen.name])
        }
        onOpenNew && onOpenNew()
    }

    return (
        <Box
            display="flex"
            flexDir="column"
            gap="5px"
            ref={containerRef}
            overflow="auto"
            pr={1}
            mt={3}
        >
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
                            <TileItemHelplist
                                as="button"
                                onClick={() => (item.action ? item.action() : handleOpenNew(item))}
                                isFocus={index === itemFocusedIndex}
                                ref={index === itemFocusedIndex ? itemFocusedRef : undefined}
                            >
                                <TileText>
                                    {` ${item.name} ${item.parents?.length ? "-" : ""} `}
                                    <em>{item.parents?.join(" > ")}</em>
                                </TileText>
                            </TileItemHelplist>
                        )}
                    </Fragment>
                ))
            ) : (
                <Text>Not found item</Text>
            )}
        </Box>
    )
}
