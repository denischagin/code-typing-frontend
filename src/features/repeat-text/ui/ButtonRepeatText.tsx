import {Button} from "@chakra-ui/react";
import {useUnit} from "effector-react";
import {eventChangeCurrentWordIndex, eventChangeTypingValue} from "@entities/text";
import {eventResetTimer} from "@entities/timer";

export const ButtonRepeatText = () => {
    const {setTypingValue, setCurrentWordIndex, resetTimer} = useUnit({
        setTypingValue: eventChangeTypingValue,
        setCurrentWordIndex: eventChangeCurrentWordIndex,
        resetTimer: eventResetTimer
    },)

    const handleRepeatText = () => {
        setTypingValue("")
        setCurrentWordIndex(0)
        resetTimer()
    }

    return (
        <Button onClick={handleRepeatText}>Еще раз этот текст</Button>
    )
}