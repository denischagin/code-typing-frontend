import { Box, Image, Tooltip } from "@chakra-ui/react"

import customText from "@shared/assets/text.svg"
import { settingTabs } from "@shared/constants"
import { AsideTab } from "@shared/ui/aside"

export const CustomTextTab = () => {
    return (
        <Tooltip label="Custom Texts">
            <Box>
                <AsideTab name={settingTabs.customText} cursor="pointer">
                    <Image src={customText} />
                </AsideTab>
            </Box>
        </Tooltip>
    )
}
