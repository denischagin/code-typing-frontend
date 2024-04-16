import { ResultParams } from "@entities/results"

export interface ResultsSortPanelProps {
    onChangeResults: (field: keyof ResultParams, value: string) => void
    resultParams: ResultParams
}
