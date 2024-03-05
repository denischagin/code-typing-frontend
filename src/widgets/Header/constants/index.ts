import {paths} from "@pages/routes";

type CommonPath = {
    name: string;
    path?: string;
    onClick?: () => void;
}

const getViewerNavigationItems = (logoutMutate: () => void) => {
    return [
        {
            name: "Logout",
            onClick: logoutMutate,
        }
    ]
}

export const unauthenticatedNavigationItems = [
    {
        name: "Login",
        path: paths.loginPage,
    },
    {
        name: "Register",
        path: paths.registerPage,
    },
]


export const getNavigationItems = (isAuthenticated: boolean, logoutMutate: () => void): CommonPath[] => [
    {
        name: "Results",
        path: paths.resultsPage,
    },
    {
        name: 'Code Typing',
        path: paths.typingCodePage,
    },
    ...(isAuthenticated ? getViewerNavigationItems(logoutMutate) : unauthenticatedNavigationItems),
];
