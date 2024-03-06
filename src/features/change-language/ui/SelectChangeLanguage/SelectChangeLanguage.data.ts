import {ETextLocale} from "@entities/text";
import {ISelectChangeLanguageOption} from "@features/change-language";

export const selectOption: ISelectChangeLanguageOption[] = [
    {value: ETextLocale.ru, children: 'Русский'},
    {value: ETextLocale.en, children: 'English'},
]
