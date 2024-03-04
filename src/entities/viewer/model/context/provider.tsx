import {createContext, ReactNode, useContext, useState} from "react";
import {IViewerContext, IViewerTokens} from "@entities/viewer";


const ViewerContext = createContext<IViewerContext>({
    isAuthenticated: false,
    refreshToken: undefined,
    accessToken: undefined,
    loginViewer: () => {
    },
    logoutViewer: () => {
    },
});

export const useViewer = () => {
    return useContext(ViewerContext);
}
export const ViewerProvider = ({children}: { children: ReactNode }) => {
    const [viewer, setViewer] = useState<IViewerTokens & { isAuthenticated: boolean }>({
        isAuthenticated: false,
        refreshToken: undefined,
        accessToken: undefined,
    });

    const handleLoginViewer = (tokens: IViewerTokens) => {
        setViewer({
            isAuthenticated: true,
            ...tokens,
        });
    }

    const handleLogoutViewer = () => {
        setViewer({
            isAuthenticated: false,
            refreshToken: undefined,
            accessToken: undefined,
        });
    }

    return (
        <ViewerContext.Provider value={{
            ...viewer,
            loginViewer: handleLoginViewer,
            logoutViewer: handleLogoutViewer,
        }}>
            {children}
        </ViewerContext.Provider>
    )
}
