import {useMethods} from "@shared/libs";

export const useRow = (rows: string[]) => {
    const [state, rowMethods] = useMethods({
        initialState: {
            currentRowIndex: 0,
            startIndent: 0,
            typingValue: '',
        },
        methods: {
            nextRow: (state) => {
                const nextRow = rows[state.currentRowIndex + 1]

                let indent = 0

                if (nextRow) {
                    const startIndexText = nextRow.search(/\S/g)
                    indent = startIndexText === -1 ? 0 : startIndexText
                } else
                    indent = 0

                state.typingValue = " ".repeat(indent) + ''

                state.currentRowIndex = state.currentRowIndex + 1
            },
            setTypingValue: (state, value: string,) => {
                state.typingValue = value
            },
            setValueWithTab: (state, tabWidth = 2) => {
                state.typingValue = " ".repeat(tabWidth) + state.typingValue
            }
        },
    })

    return {...rowMethods, ...state}
}