import {getRandomNumber} from "@shared/libs";
import {useMemo} from "react";

export const useRandom = <Item>(items: Item[] | undefined): Item | undefined => {
    const randomIndex = getRandomNumber(0, (items?.length ?? 0) - 1)
    return useMemo(() =>
            items === undefined
                ? undefined
                : items[randomIndex],
        [items])
}