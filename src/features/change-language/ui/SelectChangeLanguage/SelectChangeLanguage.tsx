import {Select} from "@chakra-ui/react";
import {selectOption} from "@features/change-language";
import {ChangeEventHandler} from "react";
import {useUnit} from "effector-react";
import {$textParamsStore, eventChangeLanguage} from "@entities/text/model/store/text-params.ts";
import {ETextLocale} from "@entities/text";


export const SelectChangeLanguage = () => {
    const {changeLanguage, textParamsStore} = useUnit({
        changeLanguage: eventChangeLanguage,
        textParamsStore: $textParamsStore
    })
    const handleChangeLanguage: ChangeEventHandler<HTMLSelectElement> = (e) => {
        const changedValue = e.target.value as ETextLocale
        changeLanguage(changedValue)
    }


    return (
        <Select onChange={handleChangeLanguage} value={textParamsStore._locale}>
            {selectOption.map((option) => (
                <option key={option.value} {...option} />
            ))}
        </Select>
    )
}