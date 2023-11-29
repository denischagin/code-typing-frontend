import { Text } from "@chakra-ui/react"
import { useCursorPosition } from "@entities/cursor"

export const Cursor = () => {
    const { top, left} = useCursorPosition()

    return (
        <Text
            as="span"
            display="flex"
            alignItems="center"
            pos="fixed"
            transition="all 0.1s"
            top={`${top - 2}px`}
            left={`${left}px`}
            color="green.600"
        >
            |
        </Text>
    )
}