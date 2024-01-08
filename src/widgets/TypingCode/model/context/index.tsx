import {CurrentRowProvider, RandomCodeProvider, TypingCodeHandlersProvider} from "@widgets/TypingCode";
import {ReactNode} from "react";

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