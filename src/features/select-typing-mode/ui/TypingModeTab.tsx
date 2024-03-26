import {Box, Image, Tooltip} from "@chakra-ui/react";

import {TYPING_MODE_TAB} from "@features/select-typing-mode/constants";
import timerIcon from "@shared/assets/timer.svg";
import {AsideTab} from "@shared/ui/aside";

export const TypingModeTab = () => {
    return (
        <Tooltip label="Select typing mode">
            <Box>
                <AsideTab name={TYPING_MODE_TAB}>
                    <Image
                        w="50px"
                        src={timerIcon}
                    />
                </AsideTab>
            </Box>
        </Tooltip>
    )
}