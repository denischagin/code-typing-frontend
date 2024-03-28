import {Box, Image, Tooltip} from "@chakra-ui/react";

import timerIcon from "@shared/assets/timer.svg";
import {settingTabs} from "@shared/constants";
import {AsideTab} from "@shared/ui/aside";

export const TypingModeTab = () => {
    return (
        <Tooltip label="Select typing mode">
            <Box>
                <AsideTab name={settingTabs.typingMode}>
                    <Image
                        w="50px"
                        src={timerIcon}
                    />
                </AsideTab>
            </Box>
        </Tooltip>
    )
}