import {Box} from "@chakra-ui/react";

import {ColorCircleProps} from "./ColorCircle.interface.ts";

export const ColorCircle = (props: ColorCircleProps) => {
    const {color} = props

    return (
        <Box
            bg={color}
            w={4}
            h={4}
            borderRadius="50%"
        />
    )
}