import {Box, Container, Link, Text} from "@chakra-ui/react";

export const Footer = () => {
    return (
        <Box
            as="footer"
            bgColor="blue.800"
            mt="20px"
        >
            <Container maxW="1000px">
                <Text align="center">
                    Created with <Link href="https://github.com/denischagin" target="_blank">denischagin</Link>
                </Text>
            </Container>
        </Box>
    )
}