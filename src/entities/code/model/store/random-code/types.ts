export interface RandomCodeState {
    randomText?: string
    rows?: string[]
    newRandomText: () => void
    randomTextUUID?: string
    isPending: boolean
}
