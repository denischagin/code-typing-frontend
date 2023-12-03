import ReactDOM from 'react-dom/client'
import App from '@app/ui/App.tsx'
import {ColorModeScript} from "@chakra-ui/react";
import {theme} from "@app/config";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <App/>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    </>
)
