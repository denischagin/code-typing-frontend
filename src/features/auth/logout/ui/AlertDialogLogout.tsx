import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button
} from "@chakra-ui/react";
import {useRef} from "react";
import {useLogout} from "@entities/viewer";

export interface AlertDialogLogoutProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AlertDialogLogout = (props: AlertDialogLogoutProps) => {
    const {isOpen, onClose} = props;

    const {mutate: logoutMutate} = useLogout();

    const cancelRef = useRef<HTMLButtonElement>(null);

    const handleLogout = () => {
        logoutMutate();
        onClose();
    }

    return (
        <AlertDialog isOpen={isOpen} onClose={onClose} leastDestructiveRef={cancelRef}>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Logout
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        Are you sure you want to logout?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="red" onClick={handleLogout} ml={3}>
                            Logout
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}