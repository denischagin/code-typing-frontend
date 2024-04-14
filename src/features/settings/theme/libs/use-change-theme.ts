import { useUnit } from "effector-react"

import { eventChangeTheme } from "@features/settings/theme"

export const useChangeTheme = () => {
    return useUnit({ changeTheme: eventChangeTheme })
}
