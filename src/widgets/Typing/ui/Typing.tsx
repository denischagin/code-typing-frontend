import {useRef} from "react";
import {Text} from "@chakra-ui/react";
import css from './Typing.module.scss'
import {Cursor, TypingField} from "@features/typing";
import {
    useTyping,
    Word
} from "@entities/text";
import {getWordStatus} from "@entities/text/libs/helpers";
import {useCursorPosition} from "@entities/cursor";

export const Typing = () => {
    const typingFieldRef = useRef<HTMLInputElement>(null)
    const parentRef = useRef<HTMLParagraphElement>(null)
    const parentRect = parentRef.current?.getBoundingClientRect()

    const {top, left} = useCursorPosition()

    const {
        currentText,
        currentWordIndex,
        typingValue,
        handleChangeTypingField,
    } = useTyping()

    const handleFocus = () => {
        typingFieldRef.current?.focus()
    }

    return (
        <div className={css.typing} onClick={handleFocus}>
            <Text
                pos="relative"
                fontSize="xxx-large"
                display="inline-flex"
                flexWrap="wrap"
                justifyContent="left"
                wordBreak="break-all"
                ref={parentRef}
            >
                <Cursor
                    top={top - (parentRect?.top ?? 0)}
                    left={left - (parentRect?.left ?? 0)}
                />

                {currentText.map((word, wordIndex) => (
                    <Word
                        key={wordIndex}
                        wordIndex={wordIndex}
                        expectedWord={word + " "}
                        printedWord={wordIndex === currentWordIndex ? typingValue : undefined}
                        wordStatus={
                            getWordStatus({
                                currentWordIndex,
                                wordIndex
                            })
                        }
                    />
                ))}
            </Text>

            <TypingField
                value={typingValue}
                onChange={handleChangeTypingField}
                ref={typingFieldRef}
            />
        </div>
    )

}
