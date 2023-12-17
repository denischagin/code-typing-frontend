import {createBrowserRouter} from "react-router-dom";
import {lazy} from "react";

const ResultsPage = lazy(() => import('@pages/ResultsPage'))
const Root = lazy(() => import('@pages/Root'))
const ErrorPage = lazy(() => import('@pages/ErrorPage'))
const TypingPage = lazy(() => import('@pages/TypingPage'))

export const paths = {
    typingPage: '/',
    resultsPage: '/results'
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
                path: paths.resultsPage,
                element: <ResultsPage/>
            },
        ]
    },
]);
