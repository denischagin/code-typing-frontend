import { CustomCodeExampleBody } from "@entities/code"

export const validateCustomCodeExample = ({
    content,
    programmingLanguageUUID
}: CustomCodeExampleBody): string[] => {
    const errors = []

    if (programmingLanguageUUID === "default") {
        errors.push("Select language")
    }

    if (content.trim().length === 0) {
        errors.push("Content cannot be empty")
    }

    if (content.length > 2000) {
        errors.push("Text length more 1000 symbols")
    }

    if (content.startsWith("<script>") && content.endsWith("</script>")) {
        errors.push("Xss not allowed")
    }

    return errors
}
