import {ReactNode} from "react";
import {CodeErrorsProvider, CurrentRowProvider, RandomCodeProvider, TypingCodeHandlersProvider} from "@entities/code";

export const TypingCodeProviders = ({children}: { children: ReactNode }) => {
    return (
        <RandomCodeProvider>
            <CurrentRowProvider>
                <CodeErrorsProvider>
                    <TypingCodeHandlersProvider>
                        {children}
                    </TypingCodeHandlersProvider>
                </CodeErrorsProvider>
            </CurrentRowProvider>
        </RandomCodeProvider>
    )
}