import {useEffect} from "react";

import {ColorModeScript} from "@chakra-ui/react";

import './styles/global.scss'

import {Providers} from "./providers";

function App() {

    useEffect(() => {
        localStorage.setItem('theme', 'dark');
    }, []);

    return (
        <>
            <ColorModeScript initialColorMode="dark" type="localStorage" storageKey="theme"/>
            <Providers/>
        </>
    )
}

export default App
