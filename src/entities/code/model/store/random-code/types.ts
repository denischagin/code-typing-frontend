export interface IRandomCodeContext {
    randomText?: string
    rows?: string[]
    newRandomText: () => void
    randomTextUUID?: string
}