import {ColorModeProviderProps} from "@chakra-ui/system";

export const colorModeManager: ColorModeProviderProps["colorModeManager"] = {
    get() {
        return 'dark'
    },
    set() {
        return "dark"
    },
    type: 'localStorage'
}