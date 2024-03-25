import {AsideTabProps, useAside} from "@shared/ui/aside";
import {Tile} from "@shared/ui/tile";

export const AsideTab = (props: AsideTabProps) => {
    const {index, ...restProps} = props

    const {currentTabIndex, onChangeTabIndex} = useAside()

    const handleTabClick = () => {
        onChangeTabIndex && onChangeTabIndex(currentTabIndex === index ? null : index)
    }

    return (
        <Tile
            isActive={currentTabIndex === index}
            borderRadius="md"
            p="5px"
            onClick={handleTabClick}
            {...restProps}
        />
    )
}
