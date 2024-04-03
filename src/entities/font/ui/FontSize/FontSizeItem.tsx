import { Text, Tooltip } from "@chakra-ui/react"

import { FontSizeItemProps } from "@entities/font"

export const FontSizeItem = (props: FontSizeItemProps) => {
    const { fontSize, name, fullName, onChangeFontSize, isActive } = props

    const handleChangeFontSize = (fontSize: number) => () => {
        onChangeFontSize(fontSize)
    }

    return (
        <Tooltip label={`${fullName}: ${fontSize}px`} key={name}>
            <Text
                as={"button"}
                fontSize={fontSize}
                transition="all 0.2s"
                borderBottom={"2px solid"}
                color="main.800"
                borderColor={isActive ? "primary.500" : "transparent"}
                _hover={{
                    borderColor: "primary.500"
                }}
                onClick={handleChangeFontSize(fontSize)}
                lineHeight="1.3em"
            >
                {name}
            </Text>
        </Tooltip>
    )
}
