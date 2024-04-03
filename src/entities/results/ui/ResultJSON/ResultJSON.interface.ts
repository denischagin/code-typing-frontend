import { ReactNode } from "react"

import { BoxProps } from "@chakra-ui/react"

export interface ResultJSONProps extends BoxProps {
    jsonKey: string
    value: ReactNode
    details?: string
}

export type ResultDetails = "code" | "chart"

export interface DetailsKeyProps extends Omit<ResultJSONProps, "value"> {
    name: ResultDetails
    onShowDetails: () => void
    openDetails?: ResultDetails
}

export interface DetailsKeyItem {
    name: ResultDetails
    jsonKey: string
}

export interface DetailsCodeProps {
    uuid: string
}
