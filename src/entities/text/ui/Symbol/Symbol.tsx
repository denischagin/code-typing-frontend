import {Text, TextProps} from "@chakra-ui/react";
import {SymbolProps, TSymbolStatus} from "./Symbol.interface.ts";
import {memo, ReactElement, ReactNode} from "react";


export const Symbol = memo(({
                                symbolId, symbol, status, isPrinting,
                            }: SymbolProps) => {
    const commonProps: Partial<TextProps> = {
        key: symbolId,
        fontSize: "xxx-large",
        children: symbol,
        as: "span",
        borderLeft: "1px solid",
        borderLeftColor: isPrinting ? "red" : "transparent",
    }

    const symbolByStatus: Record<TSymbolStatus, ReactElement> = {
        default:
            <Text
                {...commonProps}
            />,
        error:
            <Text
                {...commonProps}
                color='red'
            />,
        override:
            <Text
                {...commonProps}
                borderBottom="1px solid red"
            />,
        extra:
            <Text
                {...commonProps}
                color='red.200'
            />,
        printed:
            <Text
                {...commonProps}
                color='gray.400'
            />,
    }
    return symbolByStatus[status]
})