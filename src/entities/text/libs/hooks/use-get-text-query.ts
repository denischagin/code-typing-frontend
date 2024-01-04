import {useQuery} from "@tanstack/react-query";
import {$textParamsStore, TextService} from "@entities/text";
import {queryKeysEnum} from "@shared/constants";
import {useUnit} from "effector-react";

export const useGetTextQuery = () => {
    const textParams = useUnit($textParamsStore)

    return useQuery({
        queryFn: () => TextService.fetchText(textParams),
        queryKey: [queryKeysEnum.text, textParams],
    });
}