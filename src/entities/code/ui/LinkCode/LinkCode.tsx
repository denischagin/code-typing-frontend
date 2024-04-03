import { Link, Text } from "@chakra-ui/react"

import { NavLink } from "react-router-dom"

import { LinkCodeProps } from "./LinkCode.interface.ts"

export const LinkCode = (props: LinkCodeProps) => {
    const { title, path, ...textProps } = props

    return (
        <Text fontSize="xl" color="main.800" {...textProps}>
            <Text as="span" color="primary.400" mr={1}>
                {`>`}
            </Text>

            <Text as="span" mr={4}>
                {title}:
            </Text>

            <Link
                as={NavLink}
                to={path}
                textDecoration="underline"
                color="primary.100"
                _hover={{ color: "primary.400" }}
            >
                {path}
            </Link>
        </Text>
    )
}
