import {createContext, useContext} from "react";

export interface IAsideContext {
    currentTabIndex: number | null
    onChangeTabIndex: ((index: number | null) => void) | null
}

export const AsideContext = createContext<IAsideContext>({
    currentTabIndex: null,
    onChangeTabIndex: null
})

export const useAside = () => useContext(AsideContext)

