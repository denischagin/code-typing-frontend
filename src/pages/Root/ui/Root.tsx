import {Flex} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";
import {Header} from "@widgets/Header";
import {Footer} from "@widgets/Footer";

const Root = () => {
    return (
        <Flex direction="column" h="100vh">
            <Header/>

            <Flex as="main" flex="1" overflow="hidden">
                <Outlet/>
            </Flex>

            <Footer/>
        </Flex>
    )
}

export default Root