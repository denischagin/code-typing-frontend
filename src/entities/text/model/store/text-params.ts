import {ETextLocale, ITextRequestParams} from "@entities/text";
import {createEvent, createStore} from "effector";

export const eventChangeLanguage = createEvent<ETextLocale>()

export const $textParamsStore =
    createStore<ITextRequestParams>({_locale: ETextLocale.ru})

$textParamsStore
    .on(eventChangeLanguage,
        (_state, payload) => ({_locale: payload})
    )

// $textParamsStore.watch((state) => {
//     // console.log(state)
// })

