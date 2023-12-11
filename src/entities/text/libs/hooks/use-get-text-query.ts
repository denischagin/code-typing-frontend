import {useQuery} from "@tanstack/react-query";
import {TextService} from "@entities/text";
import {queryKeysEnum} from "@shared/constants";
import {useUnit} from "effector-react";
import {$textParamsStore} from "@entities/text/model/store/text-params.ts";

export const useGetTextQuery = () => {
    const textParams = useUnit($textParamsStore)

    return useQuery({
        queryFn: () => TextService.fetchText(textParams),
        queryKey: [queryKeysEnum.text, textParams]
    });
}