import {Suspense} from "react";

import {Flex} from "@chakra-ui/react";

import {Outlet, useLocation} from "react-router-dom";

import {paths} from "@pages/routes";
import {CodeLoading} from "@shared/ui/loading";
import {Footer} from "@widgets/Footer";
import {Header} from "@widgets/Header";

const Root = () => {
    const location = useLocation()

    return (
        <Flex direction="column" h={location.pathname === paths.typingCodePage ? "100vh" : "auto"} minH="100vh">
            <Header/>

            <Flex as="main" flex="1" overflow="hidden" py="1px">
                <Suspense fallback={<CodeLoading/>}>
                    <Outlet/>
                </Suspense>
            </Flex>

            <Footer/>
        </Flex>
    )
}

export default Root