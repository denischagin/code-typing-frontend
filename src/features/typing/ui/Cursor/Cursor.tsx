import {Text} from "@chakra-ui/react"
import {CursorProps} from "@features/typing/ui/Cursor/Cursor.interface.ts";

export const Cursor = ({top, left}: CursorProps) => {

    return (
        <Text
            as="span"
            display="flex"
            alignItems="center"
            pos="absolute"
            transition="all 0.1s"
            top={`${top - 2}px`}
            left={`${left}px`}
            color="green.600"
        >
            |
        </Text>
    )
}