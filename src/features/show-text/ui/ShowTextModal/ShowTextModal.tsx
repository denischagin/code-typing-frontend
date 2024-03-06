import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text} from "@chakra-ui/react";

import {ShowTextModalProps} from "@features/show-text/ui/ShowTextModal/ShowTextModal.interface.ts";

export const ShowTextModal = ({text, ...restProps}: ShowTextModalProps) => {
    return (
        <Modal {...restProps}>
            <ModalOverlay/>
            <ModalContent>
                <ModalCloseButton/>

                <ModalHeader>Текст</ModalHeader>

                <ModalBody>
                    <Text fontSize="large">{text}</Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}