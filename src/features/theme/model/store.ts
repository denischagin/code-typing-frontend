import main from "./themes/main.ts";
import {AppTheme} from "@features/theme";
import blue from "@features/theme/model/themes/blue.ts";
import deepDark from "@features/theme/model/themes/deep-dark.ts";
import violet from "@features/theme/model/themes/violet.ts";
import {createEvent, createStore} from "effector";


export const themes = [main, violet, blue, deepDark]

export const eventChangeTheme = createEvent<AppTheme>();

export const $currentTheme = createStore<AppTheme>(themes[0])
    .on(eventChangeTheme, (_, newTheme) => newTheme);
