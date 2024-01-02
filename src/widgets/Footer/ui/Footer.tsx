import {Box, Container, Link, Text} from "@chakra-ui/react";

export const Footer = () => {
    const date = new Date()

    return (
        <Box
            as="footer"
            bgColor="blackAlpha.400"
            mt="20px"
        >
            <Container maxW="1000px">
                <Text align="center">
                    {date.getFullYear()} © copyright
                </Text>
            </Container>
        </Box>
    )
}