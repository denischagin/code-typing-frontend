import {ReactNode} from "react";

import {RandomCodeProvider, TypingCodeHandlersProvider} from "@entities/code";

export const TypingCodeProviders = ({children}: { children: ReactNode }) => {
    return (
        <RandomCodeProvider>
            <TypingCodeHandlersProvider>
                {children}
            </TypingCodeHandlersProvider>
        </RandomCodeProvider>
    )
}