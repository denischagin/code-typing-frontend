import {Text, TextProps} from "@chakra-ui/react";
import {SymbolProps} from "./Symbol.interface.ts";
import {memo, useEffect, useRef} from "react";
import {TSymbolStatus} from "@entities/text";
import {useCursorPosition} from "@entities/cursor/index.ts";


export const Symbol = memo(({
                                symbol, status, isPrinting,
                            }: SymbolProps) => {
    const {handleChangePosition} = useCursorPosition()

    const commonProps: Partial<TextProps> = {
        children: symbol === " " || symbol === "" ? <>&nbsp;</> : symbol,
        display: "inline-flex",
        textAlign: "center",
        justifyContent: "center",
        h: "100%",
        px: "2px",
        as: "span",
    }

    const textRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (isPrinting) {
            const rect = textRef.current?.getBoundingClientRect()
            if (!rect) return

            const centerX = (rect.left + rect.right) / 2 - rect.width / 2 - 5;
            const centerY = (rect.top + rect.bottom) / 2 - rect.height / 2

            handleChangePosition({left: centerX, top: centerY})
        }
    }, [handleChangePosition, isPrinting]);

    const symbolPropsByStatus: Record<TSymbolStatus, Partial<TextProps>> = {
        default: {...commonProps},
        error: {...commonProps, color: 'red.500'},
        override: {...commonProps, borderBottom: "1px solid red"},
        extra: {
            ...commonProps,
            color: 'red.200',
            borderBottom: symbol === " " ? "1px solid rgba(255, 120, 120, 0.4)" : undefined
        },
        printed: {...commonProps, color: "gray.400"},
    }

    return (
        <>
            <Text
                {...commonProps}
                {...symbolPropsByStatus[status]}

                ref={textRef}
            />
        </>
    )
})