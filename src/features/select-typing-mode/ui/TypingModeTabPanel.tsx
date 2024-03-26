import {MouseEventHandler} from "react";

import {Flex, Stack, Text} from "@chakra-ui/react";

import {useTypingCodeTimer} from "@entities/code";
import {ModeItem} from "@features/select-typing-mode";
import {TYPING_MODE_TAB} from "@features/select-typing-mode/constants";
import {ModeSmallItem} from "@features/select-typing-mode/ui/ModeSmallItem.tsx";
import {AsideButtons, AsideCloseButton, AsideTabPanel} from "@shared/ui/aside";
import {TileText} from "@shared/ui/tile";
import {TimerDirection} from "@shared/ui/timer";


export const TypingModeTabPanel = () => {
    const counterDownVariants = [30, 45, 60]
    const {changeTimerSetting, timer} = useTypingCodeTimer()
    const {timerSettings: {direction, startSeconds,}} = timer

    const handleChangeTimerSetting = (direction: TimerDirection, startSeconds: number = 0): MouseEventHandler =>
        (e) => {
            e.stopPropagation()

            changeTimerSetting({
                direction: direction,
                startSeconds: startSeconds
            })
        }

    return (
        <AsideTabPanel name={TYPING_MODE_TAB}>
            <AsideButtons>
                <AsideCloseButton>
                    —
                </AsideCloseButton>
            </AsideButtons>

            <Stack spacing={4} mt={4}>
                <ModeItem
                    onClick={handleChangeTimerSetting("up")}
                    isActive={direction === 'up'}
                >
                    Counter up
                </ModeItem>

                <ModeItem
                    onClick={handleChangeTimerSetting('down', 30)}
                    isActive={direction === 'down'}
                >
                    <Text>Counter down</Text>
                    <Flex flexWrap="wrap" gap={1}>
                        {counterDownVariants.map(variant => (
                            <ModeSmallItem
                                key={variant}
                                onClick={handleChangeTimerSetting('down', variant)}
                                isActive={startSeconds === variant}
                            >
                                <TileText>{variant}s</TileText>
                            </ModeSmallItem>
                        ))}
                    </Flex>
                </ModeItem>
            </Stack>
        </AsideTabPanel>
    )
}