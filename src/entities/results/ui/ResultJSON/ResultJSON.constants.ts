import {DetailsKeyItem, ResultFromApi, ResultJSONProps} from "@entities/results";

export const fields: Partial<Record<keyof ResultFromApi, Partial<ResultJSONProps>>> = {
    accuracy: {color: 'green.100', details: "Accuracy"},
    errorsCount: {color: 'red.100', details: "Errors count"},
    symbolsPerMinute: {color: 'primary.100', details: "Symbols per minute (spm)"},
    startTime: {color: 'main.400', details: "Start time"},
    endTime: {color: 'main.400', details: "End time"},
}

export const detailsKeys: DetailsKeyItem[] = [
    { jsonKey: 'symbolsPerSecond', name: "chart"},
    { jsonKey: 'text', name: "code"},
]