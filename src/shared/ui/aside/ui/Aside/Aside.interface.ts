import {ComponentProps} from "react";

export interface AsideProps extends ComponentProps<"aside"> {
    isOpen: boolean
    onClose: () => void
}