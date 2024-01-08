import {ReactNode} from "react";
import {CurrentRowProvider, RandomCodeProvider, TypingCodeHandlersProvider} from "@entities/code";

export const TypingCodeProviders = ({children}: { children: ReactNode }) => {
    return (
        <RandomCodeProvider>
            <CurrentRowProvider>
                <TypingCodeHandlersProvider>
                    {children}
                </TypingCodeHandlersProvider>
            </CurrentRowProvider>
        </RandomCodeProvider>
    )
}