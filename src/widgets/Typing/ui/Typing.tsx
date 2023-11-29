import {useRef} from "react";
import {Text} from "@chakra-ui/react";
import css from './Typing.module.scss'
import {Cursor, TypingField} from "@features/typing";
import {
    getWordStatus,
    useTyping,
    Word
} from "@entities/text";
import {useCursorPosition} from "@entities/cursor";

export const Typing = () => {
    const typingFieldRef = useRef<HTMLInputElement>(null)
    const parentRef = useRef<HTMLParagraphElement>(null)
    const parentRect = parentRef.current?.getBoundingClientRect()

    const {top, left, handleChangePosition} = useCursorPosition()

    const cursorRelativePositionTop = top - (parentRect?.top ?? 0)
    const cursorRelativePositionLeft = left - (parentRect?.left ?? 0)

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
        <div className={css.typing} onClick={handleFocus} ref={parentRef}>
            <Text
                fontSize="xxx-large"
                display="inline-flex"
                flexWrap="wrap"
                justifyContent="left"
                wordBreak="break-all"
            >
                <Cursor
                    top={cursorRelativePositionTop}
                    left={cursorRelativePositionLeft}
                />

                {currentText.map((word, wordIndex) => (
                    <Word
                        key={wordIndex}
                        wordIndex={wordIndex}
                        expectedWord={word + " "}
                        printedWord={wordIndex === currentWordIndex ? typingValue : undefined}
                        onChangeCursorPosition={handleChangePosition}
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
                top={`${cursorRelativePositionTop}px`}
            />
        </div>
    )

}
