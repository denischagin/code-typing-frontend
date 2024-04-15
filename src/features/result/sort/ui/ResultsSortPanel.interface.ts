import { ChangeEventHandler } from "react"

import { ResultParams } from "@entities/results"

export interface ResultsSortPanelProps {
    onChangeResults: (field: keyof ResultParams) => ChangeEventHandler<HTMLSelectElement>
    resultParams: ResultParams
}
