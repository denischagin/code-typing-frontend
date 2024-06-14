import { MouseEventHandler } from "react"

import { Image, Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react"

import { ChangeFontTabPanel } from "@features/settings/change-font"
import { ChangeThemeTabPanel } from "@features/settings/theme"
import fontIcon from "@shared/assets/font.svg"
import themeIcon from "@shared/assets/theme.svg"
import { CustomModalBackdrop, CustomModalContent } from "@shared/ui/modal"

export interface SettingsProps {
    isOpen: boolean
    onClose: () => void
}

export const Settings = (props: SettingsProps) => {
    const { isOpen, onClose } = props

    const handleClose: MouseEventHandler = e => {
        e.stopPropagation()
        onClose()
    }

    const handleContentClick: MouseEventHandler = e => {
        e.stopPropagation()
    }

    return (
        isOpen && (
            <CustomModalBackdrop {...props} onClick={handleClose}>
                <CustomModalContent bg="blackAlpha.900" onClick={handleContentClick}>
                    <Tabs
                        variant="colorful"
                        colorScheme="primary"
                        h="100%"
                        display="flex"
                        flexDirection="column"
                    >
                        <TabList>
                            <Tab>
                                Theme
                                <Image src={themeIcon} alt="theme icon" w="20px" h="20px" />
                            </Tab>
                            <Tab>
                                Font
                                <Image src={fontIcon} alt="font icon" w="20px" h="20px" />
                            </Tab>
                        </TabList>
                        <TabPanels flexGrow={1} h="100%">
                            <ChangeThemeTabPanel />
                            <ChangeFontTabPanel />
                        </TabPanels>
                    </Tabs>
                </CustomModalContent>
            </CustomModalBackdrop>
        )
    )
}
