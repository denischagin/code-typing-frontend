import {forwardRef} from "react";
import {TypingFieldProps} from "@features/typing/ui/TypingField.interface.ts";
import css from './TypingField.module.scss'

export const TypingField =
    forwardRef<HTMLInputElement, TypingFieldProps>((props, ref) => {
        return (
            <input
                {...props}
                autoFocus
                className={css['typing-field']}
                ref={ref}
            />
        )
    })