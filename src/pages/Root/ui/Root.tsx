import {Flex} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";
import {Header} from "@widgets/Header";
import {Footer} from "@widgets/Footer";

const Root = () => {
    return (
        <Flex direction="column" minH="100vh" h="100%">
            <Header/>

            <Flex as="main" flexGrow="2" flexDirection="column">
                <Outlet/>
            </Flex>

            <Footer/>
        </Flex>
    )
}

export default Root