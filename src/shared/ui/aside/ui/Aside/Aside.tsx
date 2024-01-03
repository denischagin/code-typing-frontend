import {AsideContent} from "../AsideContent";
import {Flex} from "@chakra-ui/react";
import {AsideProps, AsideContext} from "@shared/ui/aside";

export const Aside = (props: AsideProps) => {
    const {
        onClose,
        isOpen,
        children,
        ...restProps
    } = props

    return (
        <Flex
            as="aside"
            direction="column"
            bg="blackAlpha.500"
            h="100%"
            w={isOpen ? "200px" : "70px"}
            borderRightRadius="10px"
            {...restProps}
        >
            <AsideContext.Provider value={{onClose, isOpen}}>
                {children}
            </AsideContext.Provider>
        </Flex>
    )
}

Aside.Content = AsideContent