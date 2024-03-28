import {Box, Container, Text} from "@chakra-ui/react";

export const Footer = () => {
    const date = new Date()

    return (
        <Box
            as="footer"
            bgColor="contrast.400"
        >
            <Container maxW="1000px">
                <Text align="center">
                    {date.getFullYear()} © copyright
                </Text>
            </Container>
        </Box>
    )
}