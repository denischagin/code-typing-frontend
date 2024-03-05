export interface IViewerContext extends IViewerHandlers {
    isAuthenticated: boolean;
}

export interface IViewerTokens {
    refresh?: string;
    access?: string;
}

export interface IViewerHandlers {
    loginViewer: () => void;
    logoutViewer: () => void;
}