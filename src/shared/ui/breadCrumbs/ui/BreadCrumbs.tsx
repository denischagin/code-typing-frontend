import { FC } from "react"

import { Box, Text } from "@chakra-ui/react"

export type BreadCrumbsProps = {
    crumbs: string[]
    onCrumbClick: (index: number, name: string) => void
}

export const BreadCrumbs: FC<BreadCrumbsProps> = props => {
    const { crumbs, onCrumbClick } = props

    return (
        <Box display="flex" gap={2}>
            <Text as="button" onClick={() => onCrumbClick(-1, "Menu")}>
                Menu
            </Text>
            {crumbs.map((openItem, index) => (
                <>
                    {" > "}
                    <Text as="button" onClick={() => onCrumbClick(index, openItem)}>
                        {openItem}
                    </Text>
                </>
            ))}
        </Box>
    )
}
