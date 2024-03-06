import {ChangeEventHandler} from "react";

import {Select} from "@chakra-ui/react";

import {$textParamsStore, ETextLocale, eventChangeLanguage, useText} from "@entities/text";
import {selectOption} from "@features/change-language";
import {useUnit} from "effector-react";


export const SelectChangeLanguage = () => {
    const {changeLanguage, textParamsStore} = useUnit({
        changeLanguage: eventChangeLanguage,
        textParamsStore: $textParamsStore
    })

    const {handleResetText} = useText()
    const handleChangeLanguage: ChangeEventHandler<HTMLSelectElement> = (e) => {
        const changedValue = e.target.value as ETextLocale
        changeLanguage(changedValue)
        handleResetText()
    }


    return (
        <Select onChange={handleChangeLanguage} value={textParamsStore._locale}>
            {selectOption.map((option) => (
                <option key={option.value} {...option} />
            ))}
        </Select>
    )
}