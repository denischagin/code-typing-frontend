import {BoxProps} from "@chakra-ui/react";

import {AsideTabName} from "@shared/ui/aside";

export interface AsideTabPanelProps extends BoxProps {
    name: AsideTabName
}