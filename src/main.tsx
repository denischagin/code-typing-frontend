import ReactDOM from 'react-dom/client'

import {ColorModeScript} from "@chakra-ui/react";

import App from '@app/App.tsx'
import {theme} from "@app/config";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <App/>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} type="cookie"/>
    </>
)
