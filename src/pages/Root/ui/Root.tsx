import {Suspense} from "react";

import {Flex, Progress} from "@chakra-ui/react";

import {Outlet} from "react-router-dom";

import {Footer} from "@widgets/Footer";
import {Header} from "@widgets/Header";

const Root = () => {
    return (
        <Flex direction="column" h="100vh">
            <Header/>

            <Flex as="main" flex="1" overflow="hidden">
                <Suspense fallback={<Progress isIndeterminate w="100%" colorScheme="gray" h={2}/>}>
                    <Outlet/>
                </Suspense>
            </Flex>

            <Footer/>
        </Flex>
    )
}

export default Root