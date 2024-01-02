export interface PrintingRowProps {
    isActive: boolean
    isPrinted: boolean
    index: number
    onNextRow: () => void
    text: string
    indent: number
}