import {useEffect} from "react";

import {ColorModeScript} from "@chakra-ui/react";

import './styles/global.scss'

import {Providers} from "./providers";
import {theme} from "@app/config";

function App() {
    useEffect(() => {
        localStorage.setItem('theme', theme.config.initialColorMode);
    }, []);

    return (
        <>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} type="localStorage" storageKey="theme"/>
            <Providers/>
        </>
    )
}

export default App
