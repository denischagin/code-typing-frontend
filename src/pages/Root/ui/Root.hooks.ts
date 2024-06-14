import { useState } from "react"
import { useEffect } from "react"

import { keyboardShortcuts } from "@shared/libs"

export type UseOpenHelpModalReturn = {
    isOpenHelpModal: boolean
    handleOpenHelpModal: () => void
    handleCloseHelpModal: () => void
}

export const useOpenHelpModal = () => {
    const [isOpenHelpModal, setIsOpenHelpModal] = useState(false)

    const handleCloseHelpModal = () => {
        setIsOpenHelpModal(false)
    }
    const handleOpenHelpModal = () => {
        setIsOpenHelpModal(true)
    }
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            keyboardShortcuts({
                Escape: handleOpenHelpModal
            })(e)
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [])

    return { isOpenHelpModal, handleOpenHelpModal, handleCloseHelpModal }
}
