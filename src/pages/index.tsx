import {createBrowserRouter} from "react-router-dom";
import TypingPage from "@pages/TypingPage";
import ResultCardPage from "@pages/ResultCardPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <TypingPage/>,
    },
    {
        path: "/results/:resultId",
        element: <ResultCardPage/>,
    },
]);

export const getUrlResultsCardPage = (resultId: string) => {
    return `/results/${resultId}`
}
