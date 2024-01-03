import {createContext, useContext} from "react";

export interface IAsideContext {
    isOpen: boolean
    onClose: () => void
}

export const AsideContext = createContext<IAsideContext>({
    isOpen: false,
    onClose: () => {}
})

export const useAside = () => useContext(AsideContext)

