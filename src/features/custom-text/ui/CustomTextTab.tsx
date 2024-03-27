import {Box, Image, Tooltip} from "@chakra-ui/react";

import {CUSTOM_TEXT_TAB} from "@features/custom-text/constants";
import customText from "@shared/assets/text.svg";
import {AsideTab} from "@shared/ui/aside";

export const CustomTextTab = () => {
    return (
        <Tooltip label="Custom Texts">
            <Box>
                <AsideTab name={CUSTOM_TEXT_TAB} cursor="pointer">
                    <Image src={customText}/>
                </AsideTab>
            </Box>
        </Tooltip>
    )
}
