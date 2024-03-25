import {AsideTabProps, useAside} from "@shared/ui/aside";
import {Tile} from "@shared/ui/tile";

export const AsideTab = (props: AsideTabProps) => {
    const {index, ...restProps} = props

    const {currentTabIndex, onChangeTabIndex} = useAside()

    const handleTabClick = () => {
        onChangeTabIndex && onChangeTabIndex(currentTabIndex === index ? null : index)
    }

    const isActive = currentTabIndex === index

    return (
        <Tile
            isActive={isActive}
            justifyContent="center"
            backgroundColor={isActive ? 'whiteAlpha.200' : 'transparent'}
            borderRadius="md"
            borderWidth="1px"
            p="5px"
            onClick={handleTabClick}
            _hover={{
                backgroundColor: isActive ? 'whiteAlpha.300' : 'whiteAlpha.100',
            }}
            {...restProps}
        />
    )
}
