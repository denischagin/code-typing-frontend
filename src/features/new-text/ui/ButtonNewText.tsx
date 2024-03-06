import {Button} from "@chakra-ui/react";

import {useText} from "@entities/text";

export const ButtonNewText = () => {
    const {handleNewText} = useText()

    return (
        <Button onClick={handleNewText}>
            New
        </Button>
    )
}