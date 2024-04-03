export type CodeFormRow = { placeholder: string; rows: string[]; name: string; inputType: string }

export interface CodeFormProps<Fields> {
    title: string
    fields: Record<keyof Fields, CodeFormRow>
    onSuccess: (result: Record<keyof Fields, string>) => void
}

export interface CodeFormRowsProps {
    rows: string[]
}
