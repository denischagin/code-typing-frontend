import { useMemo } from "react"

import { Box } from "@chakra-ui/react"

import { RegisterCredentials, useRegister } from "@entities/viewer"
import { languagesRegisterForm } from "@pages/RegisterPage/constants"
import { useOpenHelpModal } from "@pages/Root/ui/Root.hooks"
import { useRandom } from "@shared/libs"
import { CodeForm, makeObjectCodeRows } from "@widgets/CodeForm"
import { HelpModal } from "@widgets/HelpModal"

const RegisterPage = () => {
    const languages = useMemo(() => Object.keys(languagesRegisterForm), [])
    const [randomLanguageName] = useRandom(languages)

    const { mutate: registerMutate } = useRegister()
    const { handleCloseHelpModal, isOpenHelpModal } = useOpenHelpModal()

    const fields = randomLanguageName
        ? makeObjectCodeRows(languagesRegisterForm[randomLanguageName])
        : undefined

    const handleSubmit = (values: Record<keyof RegisterCredentials, string>) => {
        registerMutate(values)
    }

    return (
        <Box ml={4} mr={4} w="100%">
            {fields && (
                <CodeForm
                    title="Register new user"
                    onSuccess={handleSubmit}
                    fields={{
                        nickname: fields.nickname,
                        email: fields.email,
                        password: fields.password
                    }}
                />
            )}
            <HelpModal isOpen={isOpenHelpModal} onClose={handleCloseHelpModal} />
        </Box>
    )
}

export default RegisterPage
