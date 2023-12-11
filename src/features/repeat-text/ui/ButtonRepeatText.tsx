import {Button} from "@chakra-ui/react";
import {useText} from "@entities/text";

export const ButtonRepeatText = () => {
    const {handleResetText} = useText()

    return (
        <Button onClick={handleResetText}>Repeat</Button>
    )
}