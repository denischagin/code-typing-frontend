import { Container } from "@chakra-ui/react"

import { useOpenHelpModal } from "@pages/Root/ui/Root.hooks"
import { HelpModal } from "@widgets/HelpModal"
import { ResultsWithPagination } from "@widgets/ResultsWithPagination"

const ResultsPage = () => {
    const { handleCloseHelpModal, isOpenHelpModal } = useOpenHelpModal()
    return (
        <Container maxW="1000px" py={3} display="flex" flexDir="column">
            <ResultsWithPagination />
            <HelpModal isOpen={isOpenHelpModal} onClose={handleCloseHelpModal} />
        </Container>
    )
}

export default ResultsPage
