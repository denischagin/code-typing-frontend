import {IResultFromApi} from "@entities/results";

export interface ResultsItemProps extends IResultFromApi {
    resultIndex: number
}