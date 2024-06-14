import { Box } from "@chakra-ui/react"

import { useOpenHelpModal } from "@pages/Root/ui/Root.hooks"
import { HelpModal } from "@widgets/HelpModal"
import { MainPageCode } from "@widgets/MainPageCode"

const MainPage = () => {
    const { handleCloseHelpModal, isOpenHelpModal } = useOpenHelpModal()
    return (
        <Box px={5} w="100%">
            <MainPageCode />
            <HelpModal isOpen={isOpenHelpModal} onClose={handleCloseHelpModal} />
        </Box>
    )
}

export default MainPage
