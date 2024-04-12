import { useMemo } from "react"

import { Box } from "@chakra-ui/react"

import { RegisterCredentials, useRegister } from "@entities/viewer"
import { languagesRegisterForm } from "@pages/RegisterPage/constants"
import { useRandom } from "@shared/libs"
import { CodeForm, makeObjectCodeRows } from "@widgets/CodeForm"

const RegisterPage = () => {
    const languages = useMemo(() => Object.keys(languagesRegisterForm), [])
    const [randomLanguageName] = useRandom(languages)

    const { mutate: registerMutate } = useRegister()

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
        </Box>
    )
}

export default RegisterPage
