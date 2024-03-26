import {createContext, useContext} from "react";

import {Flex} from "@chakra-ui/react";

import {AsideContent} from "../AsideContent";
import {AsideProps, AsideState} from "@shared/ui/aside";


const AsideContext = createContext<AsideState>({
    currentTabName: null,
    onChangeTabName: null
})

export const useAside = () => useContext(AsideContext)


export const Aside = (props: AsideProps) => {
    const {
        onChangeTabName,
        currentTabName,
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
                onChangeTabName: onChangeTabName ?? null,
                currentTabName: currentTabName
            }}>
                {children}
            </AsideContext.Provider>
        </Flex>
    )
}

Aside.Content = AsideContent
