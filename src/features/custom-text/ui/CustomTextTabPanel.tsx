import { ChangeEventHandler, FormEventHandler, useState } from "react"

import { Button, Flex, Select, Textarea } from "@chakra-ui/react"

import {
    CustomCodeExampleBody,
    useAddCustomCodeExample,
    useGetProgrammingLanguages
} from "@entities/code"
import { settingTabs } from "@shared/constants"
import { AsideButtons, AsideCloseButton, AsideTabPanel } from "@shared/ui/aside"
import { CodeLoadingProgress } from "@shared/ui/loading"

export const CustomTextTabPanel = () => {
    const { data: languages } = useGetProgrammingLanguages()
    const { mutate: addCustomCodeExample, isPending } = useAddCustomCodeExample()
    const [newCodeExample, setNewCodeExample] = useState<CustomCodeExampleBody>({
        programmingLanguageUUID: "",
        content: ""
    })

    const handleSubmit: FormEventHandler = e => {
        e.preventDefault()
        addCustomCodeExample(newCodeExample)
    }
    const handleChangeLanguage: ChangeEventHandler<HTMLSelectElement> = e =>
        setNewCodeExample(prev => ({ ...prev, programmingLanguageUUID: e.target.value }))

    const handleChangeCode: ChangeEventHandler<HTMLTextAreaElement> = e =>
        setNewCodeExample(prev => ({ ...prev, content: e.target.value }))

    return (
        <AsideTabPanel name={settingTabs.customText}>
            <AsideButtons>
                <AsideCloseButton>—</AsideCloseButton>
            </AsideButtons>

            <Flex as={"form"} direction="column" gap={2} mt={5} onSubmit={handleSubmit}>
                <Button onSubmit={handleSubmit} type="submit">
                    {" "}
                    Add Text
                </Button>

                <Select
                    onChange={handleChangeLanguage}
                    value={newCodeExample.programmingLanguageUUID}
                >
                    {languages?.map(language => (
                        <option key={language.UUID} value={language.UUID}>
                            {language.name}
                        </option>
                    ))}
                </Select>

                <Textarea value={newCodeExample.content} onChange={handleChangeCode} />
            </Flex>

            {isPending && <CodeLoadingProgress maxLoadingCount={10} />}
        </AsideTabPanel>
    )
}
