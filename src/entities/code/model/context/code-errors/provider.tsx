import {ReactNode, useState} from "react";

import {CodeErrorsContext} from "@entities/code";

export const CodeErrorsProvider = ({children}: { children: ReactNode }) => {
    const [errorsCount, setErrorsCount] = useState(0)
    const [isError, setIsError] = useState(false)

    const incrementErrors = () => {
        setErrorsCount(prev => prev + 1)
    }

    return (
        <CodeErrorsContext.Provider value={{setIsError, isError, errorsCount, incrementErrors, setErrorsCount}}>
            {children}
        </CodeErrorsContext.Provider>
    )
}