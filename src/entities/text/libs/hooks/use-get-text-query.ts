import {useQuery} from "@tanstack/react-query";
import {$textParamsStore, ETextLocale, TextService, transformRussianText} from "@entities/text";
import {queryKeysEnum} from "@shared/constants";
import {useUnit} from "effector-react";

export const useGetTextQuery = () => {
    const textParams = useUnit($textParamsStore)

    return useQuery({
        queryFn: () => TextService.fetchText(textParams),
        queryKey: [queryKeysEnum.text, textParams],
        select: data => {
            let {content} = data.data[0];

            if (textParams._locale === ETextLocale.ru) {
                content = transformRussianText(content);
            }

            return {
                ...data.data[0],
                content
            };
        }
    });
}