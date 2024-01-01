import {ModalProps} from "@chakra-ui/react";

export interface ShowTextModalProps extends Omit<ModalProps, 'children'> {
    text?: string
}