import ReactDOM from 'react-dom/client'

import {ColorModeScript} from "@chakra-ui/react";

import {theme} from "@app/config";
import App from '@app/ui/App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <App/>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} type="cookie"/>
    </>
)
