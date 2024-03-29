import {CodeIndexesProps} from "@entities/code";

export interface CodeIndexesRangeProps extends CodeIndexesProps{
    startIndex: number
    length: number
}