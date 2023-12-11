export const transformRussianText = (text: string | undefined) => {
    return text
        ?.replace(/—/g, "-")
        .replace(/«/g, '"')
        .replace(/»/g, '"')
}