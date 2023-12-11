import {Button} from "@chakra-ui/react";
import {useUnit} from "effector-react";
import {eventChangeCurrentWordIndex, eventChangeTypingValue} from "@entities/text";
import {eventResetTimer} from "@entities/timer";
import {useSearchParams} from "react-router-dom";

export const ButtonRepeatText = () => {
    const {setTypingValue, setCurrentWordIndex, resetTimer} = useUnit({
        setTypingValue: eventChangeTypingValue,
        setCurrentWordIndex: eventChangeCurrentWordIndex,
        resetTimer: eventResetTimer
    })
    const [, setSearchParams] = useSearchParams()

    const handleRepeatText = () => {
        setTypingValue("")
        setCurrentWordIndex(0)
        resetTimer()
        setSearchParams({})
    }

    return (
        <Button onClick={handleRepeatText}>Repeat</Button>
    )
}