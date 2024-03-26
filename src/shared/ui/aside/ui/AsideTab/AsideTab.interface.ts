import {BoxProps} from "@chakra-ui/react";

import {AsideTabName} from "@shared/ui/aside";

export interface AsideTabProps extends BoxProps {
    name: AsideTabName;
}