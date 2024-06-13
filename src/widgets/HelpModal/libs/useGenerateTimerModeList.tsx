import { useMemo } from "react"

import { Text } from "@chakra-ui/react"

import { counterDownVariants, useTypingCodeTimer } from "@entities/code"
import { RecursiveListItemType } from "@shared/types"
import { TileItemHelplist } from "@shared/ui/tile"

export const useGenerateTimerModeList = () => {
    const { changeTimerSetting, timer } = useTypingCodeTimer()

    const timerModeList = useMemo(() => {
        return [
            {
                name: "Counter up",
                action: () => {
                    changeTimerSetting({
                        direction: "up",
                        startSeconds: 0
                    })
                },
                renderItem: ({ isFocus, item, ref }) => {
                    return (
                        <TileItemHelplist
                            ref={ref}
                            onClick={item.action}
                            isActive={timer.timerSettings.direction === "up"}
                            isFocus={isFocus}
                        >
                            <Text>{item.name}</Text>
                        </TileItemHelplist>
                    )
                }
            },
            ...(counterDownVariants.map(variant => {
                return {
                    name: `Counter Down: ${variant} s.`,
                    action: () => {
                        changeTimerSetting({
                            direction: "down",
                            startSeconds: variant
                        })
                    },
                    renderItem: ({ isFocus, item, ref }) => {
                        return (
                            <TileItemHelplist
                                ref={ref}
                                onClick={item.action}
                                isActive={
                                    timer.timerSettings.startSeconds === variant &&
                                    timer.timerSettings.direction === "down"
                                }
                                isFocus={isFocus}
                            >
                                <Text>{item.name}</Text>
                            </TileItemHelplist>
                        )
                    }
                }
            }) as RecursiveListItemType[])
        ] as RecursiveListItemType[]
    }, [timer.timerSettings])

    return timerModeList
}
