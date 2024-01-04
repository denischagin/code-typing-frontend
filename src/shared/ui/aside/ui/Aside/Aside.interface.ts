import {ComponentProps} from "react";

export interface AsideProps extends ComponentProps<"aside"> {
    currentTabIndex: number | null
    onChangeTabIndex?: (index: number | null) => void
}