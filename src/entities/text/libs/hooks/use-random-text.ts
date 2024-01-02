import {texts} from "@entities/text";
import {getRandomNumber} from "@shared/libs";
import {useMemo} from "react";

export const useRandomText = (): string => {

    return useMemo(() => texts[getRandomNumber(0, texts.length - 1)], [])
}