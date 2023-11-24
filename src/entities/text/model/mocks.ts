import {TText} from "./interfaces.ts";
import {mappingStringToTextObject} from "./mappings.ts";

const text
    =
    "повседневная практика показывает что сложившаяся структура организации требует " +
    "нас анализа дальнейших направлений развитая системы массового участия таким образом курс на социально-ориентированный на"

// export const textMock = text.split(" ").map(word => word.split(""))

export const textMock: TText = mappingStringToTextObject(text)
