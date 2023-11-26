import {TSymbol} from "@entities/text";

export const getSymbolStatus = ({extraSymbol, overrideSymbol, isPrinted}: TSymbol) => {
    if (overrideSymbol)
        return "error";

    if (extraSymbol)
        return "extra";

    if (isPrinted)
        return "printed";

    return "default";
}
