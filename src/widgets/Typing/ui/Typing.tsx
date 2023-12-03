import {useRef} from "react";
import {Text} from "@chakra-ui/react";
import css from './Typing.module.scss'
import {Cursor, TypingField} from "@features/typing";
import {
    getWordStatus,
    useTyping,
    Word
} from "@entities/text";
import {useUnit} from "effector-react";
import {$storeCursorPosition} from "@entities/cursor";
import {useGetTextQuery} from "@entities/text/libs/hooks/use-get-text-query.ts";

export const Typing = () => {
    const typingFieldRef = useRef<HTMLInputElement>(null)
    const parentRef = useRef<HTMLParagraphElement>(null)
    const parentRect = parentRef.current?.getBoundingClientRect()

    const {isFetching} = useGetTextQuery()

    const {left, top} = useUnit($storeCursorPosition)

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

    if (isFetching) return null

    return (
        <>
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

                    {currentText?.map((word, wordIndex) => (
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
                    top={`${cursorRelativePositionTop}px`}
                />
            </div>
        </>

    )

}
