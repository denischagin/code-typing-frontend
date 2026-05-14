export interface RandomCodeState {
    randomText?: string
    rows?: string[]
    newRandomText: () => void
    randomTextUUID?: string
    randomTextLanguage?: string
    isPending: boolean
}
