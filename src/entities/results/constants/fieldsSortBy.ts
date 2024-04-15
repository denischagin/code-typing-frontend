import { ResultsSortBy } from "@entities/results"

export const fieldsSortBy: { title: string; value: ResultsSortBy }[] = [
    { title: "spm", value: "symbolsPerMinute" },
    { title: "accuracy", value: "accuracy" },
    { title: "end time", value: "endTime" }
]
