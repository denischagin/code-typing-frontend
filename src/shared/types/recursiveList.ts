import { ReactNode, RefObject } from "react"

export type RenderItemProps = {
    onClick: () => void
    item: RecursiveListItemType
    ref: RefObject<HTMLDivElement> | undefined
    isFocus: boolean
}

export type RecursiveListItemType = {
    name: string
    action?: () => void
    children?: RecursiveListItemType[]
    renderItem?: (props: RenderItemProps) => ReactNode
}
