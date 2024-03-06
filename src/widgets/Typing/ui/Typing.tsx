import {useRef} from "react";

import {Text} from "@chakra-ui/react";

import {useSearchParams} from "react-router-dom";

import css from './Typing.module.scss'

import {$storeCursorPosition} from "@entities/cursor";
import {
    getWordStatus, useGetTextQuery,
    Word
} from "@entities/text";
import {Cursor, TypingField} from "@features/typing";
import {searchParamsEnum} from "@shared/constants";
import {useTyping} from "@widgets/Typing";
import {useUnit} from "effector-react";

export const Typing = () => {
    const [searchParams] = useSearchParams()
    const typingFieldRef = useRef<HTMLInputElement>(null)
    const parentRef = useRef<HTMLParagraphElement>(null)
    const parentRect = parentRef.current?.getBoundingClientRect()

    const {isFetching} = useGetTextQuery()

    const {left, top} = useUnit($storeCursorPosition)

    const cursorRelativePositionTop = top - (parentRect?.top ?? 0)
    const cursorRelativePositionLeft = left - (parentRect?.left ?? 0) - 5

    const {
        currentText,
        currentWordIndex,
        typingValue,
        handleChangeTypingField,
    } = useTyping()

    const handleFocus = () => {
        typingFieldRef.current?.focus()
    }

    const resultId = searchParams.get(searchParamsEnum.resultId)

    if (isFetching) return null
    if (resultId) return null

    return (
        <>
            <div className={css.typing} onClick={handleFocus} ref={parentRef}>
                <Text
                    fontSize="xx-large"
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
