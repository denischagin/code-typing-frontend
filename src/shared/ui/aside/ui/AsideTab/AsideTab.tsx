import { AsideTabProps, useAside } from "@shared/ui/aside"
import { Tile } from "@shared/ui/tile"

export const AsideTab = (props: AsideTabProps) => {
    const { name, ...restProps } = props

    const { currentTabName, onChangeTabName } = useAside()

    const handleTabClick = () => {
        onChangeTabName && onChangeTabName(currentTabName === name ? null : name)
    }

    const isActive = currentTabName === name

    return (
        <Tile
            isActive={isActive}
            justifyContent="center"
            backgroundColor={"transparent"}
            borderRadius="md"
            borderWidth="1px"
            borderColor={isActive ? "main.500" : "main.200"}
            p="5px"
            onClick={handleTabClick}
            _hover={{
                backgroundColor: "main.100"
            }}
            {...restProps}
        />
    )
}
