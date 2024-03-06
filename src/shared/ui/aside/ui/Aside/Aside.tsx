import { Flex } from "@chakra-ui/react";

import { AsideContent } from "../AsideContent";
import { AsideContext, AsideProps } from "@shared/ui/aside";

export const Aside = (props: AsideProps) => {
    const {
        onChangeTabIndex,
        currentTabIndex,
        children,
        ...restProps
    } = props


    return (
        <Flex
            as="aside"
            direction="column"
            bg="blackAlpha.500"
            w={currentTabIndex !== null ? "200px" : "70px"}
            borderRightRadius="10px"
            {...restProps}
        >
            <AsideContext.Provider value={{
                onChangeTabIndex: onChangeTabIndex ?? null,
                currentTabIndex
            }}>
                {children}
            </AsideContext.Provider>
        </Flex>
    )
}

Aside.Content = AsideContent
