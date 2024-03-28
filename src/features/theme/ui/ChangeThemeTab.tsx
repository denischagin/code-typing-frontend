import {Box, Image, Tooltip} from "@chakra-ui/react";

import themeIcon from "@shared/assets/theme.svg";
import {settingTabs} from "@shared/constants";
import {AsideTab} from "@shared/ui/aside";

export const ChangeThemeTab = () => {
    return (
        <Tooltip label="Change theme">
            <Box>
                <AsideTab name={settingTabs.theme} cursor="pointer">
                    <Image src={themeIcon}/>
                </AsideTab>
            </Box>
        </Tooltip>
    )
}
