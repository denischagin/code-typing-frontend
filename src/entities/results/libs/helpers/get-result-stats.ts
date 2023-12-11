import {IResult} from "@entities/results";

export interface GetResultStatsReturn {
    charactersPerMinuteString: string
    wordsPerMinuteString: string
}

export const getResultStats = (currentResult: Omit<IResult, "wordsPerMinuteString" | "charactersPerMinuteString"> | null): GetResultStatsReturn => {
    if (currentResult === null)
        return {
            charactersPerMinuteString: "Ошибка в подсчете",
            wordsPerMinuteString: "Ошибка в подсчете",
        }
    const {timeResultMilliseconds, text} = currentResult;

    const characterCount = text.length;
    const wordCount = text.split(' ').length;

    const charactersPerMinute = (characterCount / timeResultMilliseconds) * 60000;
    const wordsPerMinute = (wordCount / timeResultMilliseconds) * 60000;

    const charactersPerMinuteString = charactersPerMinute.toFixed(2);
    const wordsPerMinuteString = wordsPerMinute.toFixed(2);

    return {
        charactersPerMinuteString,
        wordsPerMinuteString,
    };
}