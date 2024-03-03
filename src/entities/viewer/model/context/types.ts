export interface IViewerContext extends IViewerTokens, IViewerHandlers {
    isAuthenticated: boolean;
}

export interface IViewerTokens {
    refreshToken?: string;
    accessToken?: string;
}

export interface IViewerHandlers {
    loginViewer?: (viewer: IViewerContext) => void;
    logoutViewer?: () => void;
}