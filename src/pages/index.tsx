import {lazy} from "react";

import {createBrowserRouter} from "react-router-dom";

import {privatePage, publicPage} from "@entities/viewer";
import ErrorPage from "@pages/ErrorPage";
import Root from "@pages/Root";
import {paths, routesWithHOC} from "@pages/routes";

const ResultsPage = lazy(() => import('@pages/ResultsPage'))
const TypingCodePage = lazy(() => import('@pages/TypingCodePage'))
const LoginPage = lazy(() => import('@pages/LoginPage'))
const RegisterPage = lazy(() => import('@pages/RegisterPage'))
const MainPage = lazy(() => import('@pages/MainPage'))

export const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            errorElement: <ErrorPage/>,
            children: [
                ...routesWithHOC(publicPage, [
                    {
                        path: paths.typingCodePage,
                        element: <TypingCodePage/>,
                    },
                    {
                        path: paths.resultsPage,
                        element: <ResultsPage/>,
                    },
                    {
                        path: paths.loginPage,
                        element: <LoginPage/>,
                    },
                    {
                        path: paths.registerPage,
                        element: <RegisterPage/>,
                    },
                    {
                        path: paths.mainPage,
                        element: <MainPage/>,
                    }
                ]),
                ...routesWithHOC(privatePage, []),
            ]
        },
    ],
);
