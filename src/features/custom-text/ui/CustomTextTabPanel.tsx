import {
    ChangeEventHandler,
    FormEventHandler,
    KeyboardEventHandler,
    useEffect,
    useState
} from "react"

import { Button, Flex, Select, Text, Textarea, useToast } from "@chakra-ui/react"

import { validateCustomCodeExample } from "../libs"
import {
    CustomCodeExampleBody,
    useAddCustomCodeExample,
    useGetProgrammingLanguages
} from "@entities/code"
import { settingTabs } from "@shared/constants"
import { keyboardShortcuts } from "@shared/libs"
import { AsideButtons, AsideCloseButton, AsideTabPanel } from "@shared/ui/aside"
import { CodeLoadingProgress } from "@shared/ui/loading"

export const CustomTextTabPanel = () => {
    const { data: languages } = useGetProgrammingLanguages()
    const { mutate: addCustomCodeExample, isPending } = useAddCustomCodeExample()

    const toast = useToast()

    const [newCodeExample, setNewCodeExample] = useState<CustomCodeExampleBody>({
        programmingLanguageUUID: "default",
        content: ""
    })

    useEffect(() => {
        if (languages && languages.length !== 0) {
            setNewCodeExample(prev => ({
                ...prev,
                programmingLanguageUUID: languages[0].UUID
            }))
        }
    }, [languages])

    const handleSubmit: FormEventHandler = e => {
        e.preventDefault()

        const errors = validateCustomCodeExample(newCodeExample)
        if (errors.length !== 0) {
            return toast({
                title: errors[0],
                status: "error"
            })
        }

        addCustomCodeExample(newCodeExample, {
            onSuccess: () => {
                toast({
                    title: "Code example added",
                    status: "success"
                })
            },
            onError: () => {
                toast({
                    title: "Error adding code example",
                    status: "error"
                })
            }
        })
    }

    const handleChangeLanguage: ChangeEventHandler<HTMLSelectElement> = e =>
        setNewCodeExample(prev => ({
            ...prev,
            programmingLanguageUUID: e.target.value
        }))

    const handleChangeCode: ChangeEventHandler<HTMLTextAreaElement> = e =>
        setNewCodeExample(prev => ({ ...prev, content: e.target.value }))

    const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = e => {
        keyboardShortcuts({
            "Ctrl+Enter": () => {
                handleSubmit(e)
            }
        })(e)
    }

    return (
        <AsideTabPanel name={settingTabs.customText} maxW="400px" w="100%">
            <AsideButtons>
                <AsideCloseButton>—</AsideCloseButton>
            </AsideButtons>

            <Flex as={"form"} direction="column" gap={2} mt={5} onSubmit={handleSubmit}>
                <Select
                    onChange={handleChangeLanguage}
                    value={newCodeExample.programmingLanguageUUID}
                >
                    <option value="default">--Language--</option>

                    {languages?.map(language => (
                        <option key={language.UUID} value={language.UUID}>
                            {language.name}
                        </option>
                    ))}
                </Select>

                {newCodeExample.programmingLanguageUUID === "default" ? (
                    <Text textAlign="center">Select a language</Text>
                ) : (
                    <Textarea
                        value={newCodeExample.content}
                        onChange={handleChangeCode}
                        resize="none"
                        h="10em"
                        onKeyDown={handleKeyDown}
                    />
                )}

                <Button onSubmit={handleSubmit} type="submit">
                    Add Text
                </Button>
            </Flex>

            {isPending && <CodeLoadingProgress maxLoadingCount={10} />}
        </AsideTabPanel>
    )
}
