import {IResult} from "@entities/results";

export interface UseResultStatsReturn {
    charactersPerMinuteString: string
    wordsPerMinuteString: string
}

export const useResultStats = (currentResult: IResult | null): UseResultStatsReturn | null=> {
    if (currentResult === null)
        return null
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