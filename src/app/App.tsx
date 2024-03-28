import {useEffect} from "react";

import {ColorModeScript} from "@chakra-ui/react";

import './styles/global.scss'

import {Providers} from "./providers";

function App() {
    useEffect(() => {
        localStorage.setItem('chakra-theme', 'dark');
    }, []);

    return (
        <>
            <ColorModeScript initialColorMode="dark" type="localStorage" storageKey="chakra-theme"/>
            <Providers/>
        </>
    )
}

export default App
