import {getRandomNumber} from "@shared/libs";
import {useCallback, useEffect, useMemo, useState} from "react";

export const useRandom = <Item>(
    items: Item[] | undefined
): [Item | undefined, refreshRandom: () => void] => {
    const getNewRandom = useCallback(() => {
        return items === undefined ? null : getRandomNumber(0, (items.length - 1))
    }, [items])

    const [randomIndex, setRandomIndex] = useState<null | number>(() => {
        return getNewRandom()
    })

    useEffect(() => {
        if (!items) return
        const randomIndex = getNewRandom()
        setRandomIndex(randomIndex)
    }, [items])


    const randomItem = useMemo(() =>
            items === undefined || randomIndex === null
                ? undefined
                : items[randomIndex],
        [items, randomIndex]);
    const handleNewRandom = useCallback(() => {
        const newRandom = getNewRandom()
        console.log(newRandom)
        return setRandomIndex(newRandom)
    }, [getNewRandom])

    return [randomItem, handleNewRandom]
}