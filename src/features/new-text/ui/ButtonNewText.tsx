import {Button} from "@chakra-ui/react";
import {useGetTextQuery} from "@entities/text";
import {useUnit} from "effector-react/compat";
import {eventChangeCurrentWordIndex, eventChangeTypingValue} from "@entities/text";
import {eventResetTimer} from "@entities/timer";
import {useSearchParams} from "react-router-dom";

export const ButtonNewText = () => {
    const {refetch} = useGetTextQuery()
    const [changeCurrentWordIndex, changeTypingValue] =
        useUnit([eventChangeCurrentWordIndex, eventChangeTypingValue])
    const [, setSearchParams] = useSearchParams()

    const [resetTimer] = useUnit([eventResetTimer])

    const handleNewTextClick = () => {
        changeCurrentWordIndex(0)
        changeTypingValue("")
        resetTimer()
        refetch()
        setSearchParams({})
    };

    return (
        <Button onClick={handleNewTextClick}>
            New text
        </Button>
    )
}