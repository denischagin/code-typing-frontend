import {ISelectChangeLanguageOption} from "@features/change-language";
import {ETextLocale} from "@entities/text";

export const selectOption: ISelectChangeLanguageOption[] = [
    {value: ETextLocale.ru, children: 'Русский'},
    {value: ETextLocale.en, children: 'English'},
]
