import {eventChangeCurrentWordIndex, eventChangeTypingValue, useGetTextQuery} from "@entities/text";
import {useUnit} from "effector-react/compat";
import {useSearchParams} from "react-router-dom";
import {eventResetTimer} from "@entities/timer";

export interface UseTextReturn {
    handleNewText: () => void
    handleResetText: () => void
}

export const useText = (): UseTextReturn => {
    const {refetch} = useGetTextQuery()
    const [, setSearchParams] = useSearchParams()

    const store = useUnit({
        setTypingValue: eventChangeTypingValue,
        setCurrentWordIndex: eventChangeCurrentWordIndex,
        resetTimer: eventResetTimer,
        changeCurrentWordIndex: eventChangeCurrentWordIndex,
        changeTypingValue: eventChangeTypingValue
    })

    const handleNewText = () => {
        store.changeCurrentWordIndex(0)
        store.changeTypingValue("")
        store.resetTimer()
        refetch()
        setSearchParams({})
    }
    const handleResetText = () => {
        store.setTypingValue("")
        store.setCurrentWordIndex(0)
        store.resetTimer()
        setSearchParams({})
    }

    return {
        handleNewText,
        handleResetText
    }
}