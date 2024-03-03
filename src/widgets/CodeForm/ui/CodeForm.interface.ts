export type CodeFormRow = { placeholder: string; rows: string[], name: string, inputType: string };

export interface CodeFormProps {
    fields: CodeFormRow[]
    onSuccess: (result: Record<string, unknown>) => void
}

// TODO типизировать CodeFormProps