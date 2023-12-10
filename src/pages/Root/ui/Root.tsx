import {Box, Flex} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";
import {Header} from "@widgets/Header";

const Root = () => {
    return (
        <Flex direction="column" minH="100vh" h="100%">
            <Header/>

            <Box as="main" flexGrow="2">
                <Outlet/>
            </Box>

            <Box as="footer">

            </Box>
        </Flex>
    )
}

export default Root