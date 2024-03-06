import {createContext, ReactNode, useContext, useState} from "react";

import {IViewerContext} from "@entities/viewer";


const ViewerContext = createContext<IViewerContext>({
    isAuthenticated: false,
    loginViewer: () => {
    },
    logoutViewer: () => {
    },
});

export const useViewer = () => {
    return useContext(ViewerContext);
}
export const ViewerProvider = ({children}: { children: ReactNode }) => {
    const [viewer, setViewer] = useState<{ isAuthenticated: boolean }>({
        isAuthenticated: false,
    });

    const handleLoginViewer = () => {
        setViewer({
            isAuthenticated: true,
        });
    }

    const handleLogoutViewer = () => {
        setViewer({
            isAuthenticated: false,
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
