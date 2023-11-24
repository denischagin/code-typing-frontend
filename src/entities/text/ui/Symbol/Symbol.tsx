import {Text, TextProps} from "@chakra-ui/react";
import {SymbolProps, TSymbolStatus} from "./Symbol.interface.ts";
import {memo, ReactElement, ReactNode} from "react";


export const Symbol = memo(({symbolId, symbol, status}: SymbolProps) => {
    const commonProps: Partial<TextProps> = {
        key: symbolId,
        fontSize: "xxx-large",
        children:
            symbol === " " && status === "override"
                ? <>{" "}</>
                : symbol,
        as: "span"
    }

    const symbolByStatus: Record<TSymbolStatus, ReactElement> = {
        default:
            <Text
                {...commonProps}
                key={symbolId}
            />,
        error:
            <Text
                {...commonProps}
                key={symbolId}
                color='red'
            />,
        printing:
            <Text
                {...commonProps}
                borderLeft="1px solid red"
                // bgColor="blackAlpha.400"
            />
        ,
        override:
            <Text
                {...commonProps}
                borderBottom="1px solid red"
            />
    }
    return symbolByStatus[status]
})