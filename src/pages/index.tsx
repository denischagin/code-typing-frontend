import {createBrowserRouter} from "react-router-dom";
import {lazy} from "react";
import Root from "@pages/Root";
import ErrorPage from "@pages/ErrorPage";

const ResultsPage = lazy(() => import('@pages/ResultsPage'))
const TypingPage = lazy(() => import('@pages/TypingPage'))
const SelectCodeLanguagePage = lazy(() => import('@pages/SelectCodeLanguagePage'))

export const paths = {
    typingPage: 'typing',
    typingCodePage: 'typing-code',
    resultsPage: 'results',
    typingCodeByLanguage: ":typingCodeName"

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
                element: <SelectCodeLanguagePage/>,
                children: [
                    {
                        path: paths.typingCodeByLanguage,
                    }
                ]
            },
            {
                path: paths.resultsPage,
                element: <ResultsPage/>,
            },
        ]
    },
]);
