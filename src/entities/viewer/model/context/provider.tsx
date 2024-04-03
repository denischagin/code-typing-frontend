import { createContext, ReactNode, useContext, useState } from "react"

import tokenService from "@entities/token/libs/token-service.ts"
import { ViewerHandlers, ViewerState } from "@entities/viewer"

const ViewerContext = createContext<ViewerState & ViewerHandlers>({
    isAuthenticated: false,
    loginViewer: () => {},
    logoutViewer: () => {}
})

export const useViewer = () => {
    return useContext(ViewerContext)
}
export const ViewerProvider = ({ children }: { children: ReactNode }) => {
    const [viewer, setViewer] = useState<{ isAuthenticated: boolean; accessToken?: string }>({
        isAuthenticated: false
    })

    const handleLoginViewer = (accessToken: string) => {
        setViewer({
            isAuthenticated: true,
            accessToken
        })
        tokenService.setAccessToken(accessToken)
    }

    const handleLogoutViewer = () => {
        setViewer({
            isAuthenticated: false,
            accessToken: undefined
        })
        tokenService.deleteAccessToken()
    }

    return (
        <ViewerContext.Provider
            value={{
                ...viewer,
                loginViewer: handleLoginViewer,
                logoutViewer: handleLogoutViewer
            }}
        >
            {children}
        </ViewerContext.Provider>
    )
}
