import {useCallback, useEffect, useState} from "react";

import {getRandomNumber} from "@shared/libs";

export const useRandom = <Item>(
    items: Item[] | undefined
): [randomItem: Item | undefined, refreshRandom: () => void] => {
    const [randomIndex, setRandomIndex] = useState<number | undefined>(undefined);

    const refreshRandom = useCallback(() => {
        if (!items?.length)
            return

        const newRandomIndex = getRandomNumber(0, items.length - 1);
        setRandomIndex(newRandomIndex);
    }, [items]);


    useEffect(() => {
        refreshRandom();
    }, [items])


    return [randomIndex !== undefined ? items?.[randomIndex] : undefined, refreshRandom];
}