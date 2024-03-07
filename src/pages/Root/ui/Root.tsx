import {Suspense} from "react";

import {Flex} from "@chakra-ui/react";

import {Outlet} from "react-router-dom";

import {CodeLoading} from "@shared/ui/loading";
import {Footer} from "@widgets/Footer";
import {Header} from "@widgets/Header";

const Root = () => {
    return (
        <Flex direction="column" h="100vh">
            <Header/>

            <Flex as="main" flex="1" overflow="hidden">
                <Suspense fallback={<CodeLoading/>}>
                    <Outlet/>
                </Suspense>
            </Flex>

            <Footer/>
        </Flex>
    )
}

export default Root