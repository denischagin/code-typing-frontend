import {Text, TextProps} from "@chakra-ui/react";
import {SymbolProps} from "./Symbol.interface.ts";
import {memo} from "react";
import {TSymbolStatus} from "@entities/text";


export const Symbol = memo(({
                                symbol, status, isPrinting,
                            }: SymbolProps) => {
    const commonProps: Partial<TextProps> = {
        children: symbol,
        as: "span",
        borderLeft: "2px solid",
        borderLeftColor: isPrinting ? "yellow.500" : "transparent",
    }

    const symbolPropsByStatus: Record<TSymbolStatus, Partial<TextProps>> = {
        default: {...commonProps},
        error: {...commonProps, color: 'red.500'},
        override: {...commonProps, borderBottom: "1px solid red"},
        extra: {...commonProps, color: 'red.200'},
        printed: {...commonProps, color: "gray.400"},
    }

    return (
        <Text
            {...commonProps}
            {...symbolPropsByStatus[status]}
        />
    )
})