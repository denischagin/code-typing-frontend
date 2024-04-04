import { AsideTabProps, useAside } from "@shared/ui/aside"
import { Tile } from "@shared/ui/tile"

export const AsideTab = (props: AsideTabProps) => {
    const { name, isActive, ...restProps } = props

    const { currentTabName, onChangeTabName } = useAside()

    const handleTabClick = () => {
        if (!name) return

        onChangeTabName && onChangeTabName(currentTabName === name ? null : name)
    }

    const isActiveTile = currentTabName === name || isActive

    return (
        <Tile
            isActive={isActive}
            justifyContent="center"
            alignItems="center"
            backgroundColor={"transparent"}
            borderRadius="md"
            borderWidth="1px"
            borderColor={isActiveTile ? "main.500" : "main.200"}
            aspectRatio="1"
            p="5px"
            onClick={handleTabClick}
            _hover={{
                backgroundColor: "main.100"
            }}
            {...restProps}
        />
    )
}
