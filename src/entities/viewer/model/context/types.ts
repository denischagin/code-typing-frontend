export interface ViewerState  {
    isAuthenticated: boolean;
    accessToken?: string;
}

export interface ViewerHandlers {
    loginViewer: (accessToken: string) => void;
    logoutViewer: () => void;
}