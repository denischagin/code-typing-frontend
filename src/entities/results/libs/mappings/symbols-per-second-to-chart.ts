import {ISymbolsPerSecondChartItem} from "@entities/results";

export const symbolsPerSecondToChart = (symbolsPerSecond: number[]): ISymbolsPerSecondChartItem[] => {
    return symbolsPerSecond
        .map((value, index) =>
            ({name: `${index + 1}`, spm: value}))
}