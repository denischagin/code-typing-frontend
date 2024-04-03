export const transformCodeToRows = (text: string | null): string[] | undefined => {
    return text?.split("\n").map(row => row.replace(/\t/g, "    "))
}
