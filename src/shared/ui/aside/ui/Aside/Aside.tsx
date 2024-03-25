import {Flex} from "@chakra-ui/react";

import {AsideContent} from "../AsideContent";
import {AsideContext, AsideProps} from "@shared/ui/aside";

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
            bg="blackAlpha.300"
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
