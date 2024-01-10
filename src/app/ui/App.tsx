import { Providers } from "./providers";
import { Suspense } from "react";
import { Progress } from "@chakra-ui/react";
import '../styles/global.scss'

function App() {
    return (
        <Suspense fallback={<Progress isIndeterminate />}>
            <Providers />
        </Suspense>
    )
}

export default App
