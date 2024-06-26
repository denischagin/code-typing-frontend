import { Box, Image, Tooltip } from "@chakra-ui/react"

import fontIcon from "@shared/assets/font.svg"
import { settingTabs } from "@shared/constants"
import { AsideTab } from "@shared/ui/aside"

export const ChangeFontTab = () => (
    <Tooltip label="Font Settings (Alt+5)">
        <Box>
            <AsideTab name={settingTabs.font}>
                <Image w="50px" src={fontIcon} />
            </AsideTab>
        </Box>
    </Tooltip>
)
