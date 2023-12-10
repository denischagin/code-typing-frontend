import {createBrowserRouter} from "react-router-dom";
import ResultsPage from "@pages/ResultsPage";
import Root from "@pages/Root/ui";
import ErrorPage from "@pages/ErrorPage";
import TypingPage from "@pages/TypingPage";

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
