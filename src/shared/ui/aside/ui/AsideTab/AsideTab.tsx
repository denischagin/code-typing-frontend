import {AsideTabProps, useAside} from "@shared/ui/aside";
import {Tile} from "@shared/ui/tile";

export const AsideTab = (props: AsideTabProps) => {
    const {name, ...restProps} = props

    const {currentTabName, onChangeTabName} = useAside()

    const handleTabClick = () => {
        onChangeTabName && onChangeTabName(currentTabName === name ? null : name)
    }

    const isActive = currentTabName === name

    return (
        <Tile
            isActive={isActive}
            justifyContent="center"
            backgroundColor={isActive ? 'whiteAlpha.200' : 'transparent'}
            borderRadius="md"
            borderWidth="1px"
            borderColor={isActive? 'whiteAlpha.500' : 'whiteAlpha.200'}
            p="5px"
            onClick={handleTabClick}
            _hover={{
                backgroundColor: isActive ? 'whiteAlpha.300' : 'whiteAlpha.100',
            }}
            {...restProps}
        />
    )
}
