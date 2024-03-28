import {useUnit} from "effector-react";

import {eventChangeTheme} from "@features/theme";

export const useChangeTheme = () => {
    return useUnit({changeTheme: eventChangeTheme})
}