import { useMemo } from "react"

import { Box } from "@chakra-ui/react"

import { LoginCredentials, useLogin } from "@entities/viewer"
import { languagesAuthForm } from "@pages/LoginPage/constants"
import { languagesRegisterForm } from "@pages/RegisterPage"
import { useOpenHelpModal } from "@pages/Root/ui/Root.hooks"
import { useRandom } from "@shared/libs/hooks"
import { CodeForm, makeObjectCodeRows } from "@widgets/CodeForm"
import { HelpModal } from "@widgets/HelpModal"

const LoginPage = () => {
    const languages = useMemo(() => Object.keys(languagesRegisterForm), [])
    const [randomLanguageName] = useRandom(languages)

    const { mutate: loginMutate } = useLogin()
    const { handleCloseHelpModal, isOpenHelpModal } = useOpenHelpModal()

    const fields = randomLanguageName
        ? makeObjectCodeRows(languagesAuthForm[randomLanguageName])
        : undefined

    const handleSubmit = (values: Record<keyof LoginCredentials, string>) => {
        loginMutate(values)
    }

    return (
        <Box ml={4} mr={4} w="100%">
            {fields && (
                <CodeForm
                    title="Login"
                    onSuccess={handleSubmit}
                    fields={{
                        login: fields.login,
                        password: fields.password
                    }}
                />
            )}
            <HelpModal isOpen={isOpenHelpModal} onClose={handleCloseHelpModal} />
        </Box>
    )
}

export default LoginPage
