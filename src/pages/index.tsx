import {createBrowserRouter} from "react-router-dom";
import {lazy} from "react";
import Root from "@pages/Root";
import ErrorPage from "@pages/ErrorPage";

const ResultsPage = lazy(() => import('@pages/ResultsPage'))
const TypingPage = lazy(() => import('@pages/TypingPage'))
const TypingCodePage = lazy(() => import('@pages/TypingCodePage'))
const LoginPage = lazy(() => import('@pages/LoginPage'))
const RegisterPage = lazy(() => import('@pages/RegisterPage'))

export const paths = {
    typingPage: 'typing',
    typingCodePage: 'typing-code',
    resultsPage: 'results',
    loginPage: 'login',
    registerPage: 'register',
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: paths.typingPage,
                element: <TypingPage/>
            },
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
            }
        ]
    },
]);
