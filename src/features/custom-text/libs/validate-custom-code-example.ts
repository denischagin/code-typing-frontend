import { CustomCodeExampleBody } from "@entities/code"

export const validateCustomCodeExample = (codeExample: CustomCodeExampleBody): string[] => {
    const errors = []

    if (codeExample.programmingLanguageUUID === "default") {
        errors.push("Select language")
    }

    if (codeExample.content.trim().length === 0) {
        errors.push("Content cannot be empty")
    }

    if (codeExample.content.length > 1000) {
        errors.push("Text length more 1000 symbols")
    }

    return errors
}
