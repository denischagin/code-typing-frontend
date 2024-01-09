import {FlexProps} from "@chakra-ui/react";

export interface AsideProps extends FlexProps {
    currentTabIndex: number | null
    onChangeTabIndex?: (index: number | null) => void
}