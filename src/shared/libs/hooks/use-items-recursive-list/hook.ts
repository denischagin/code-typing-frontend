import { useMemo } from "react"

import { RecursiveListItemType } from "@shared/types"

export const useItemsRecursiveList = (openItemNames: string[], list: RecursiveListItemType[]) => {
    const openItems = useMemo(() => {
        let currentItem = list

        openItemNames.forEach(openItem => {
            const findedCurrentItem = currentItem.find(el => el.name === openItem)

            if (!findedCurrentItem || !findedCurrentItem.children) return

            currentItem = findedCurrentItem.children
        })

        return currentItem
    }, [openItemNames, list])

    return openItems
}
