import {eventChangeTheme} from "@features/theme";
import {useUnit} from "effector-react";

export const useChangeTheme = () => {
    return useUnit({changeTheme: eventChangeTheme})
}