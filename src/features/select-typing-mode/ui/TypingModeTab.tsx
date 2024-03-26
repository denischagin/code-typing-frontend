import {Box, Tooltip} from "@chakra-ui/react";

import {TYPING_MODE_TAB} from "@features/select-typing-mode/constants";
import {AsideTab} from "@shared/ui/aside";

export const TypingModeTab = () => {
    return (
        <Tooltip label="Select typing mode">
            <Box>
                <AsideTab name={TYPING_MODE_TAB}>
                    М
                </AsideTab>
            </Box>
        </Tooltip>
    )
}