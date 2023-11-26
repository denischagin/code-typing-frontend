import {useContext, useRef} from "react";
import {Text} from "@chakra-ui/react";
import css from './Typing.module.scss'
import {TypingField} from "@features/typing";
import {
    Symbol,
    useTyping,
    Word
} from "@entities/text";
import {CursorPositionContext} from "@app/ui/App.tsx";

export const Typing = () => {
    const {left, top} = useContext(CursorPositionContext)
    const typingFieldRef = useRef<HTMLInputElement>(null)

    const {
        currentText,
        currentWordIndex,
        typingValue,
        handleChangeTypingField
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
            >
                <Text
                    as="span"
                    display="flex"
                    alignItems="center"
                    pos="fixed"
                    transition="all 0.1s"
                    top={`${top - 2}px`}
                    left={`${left}px`}
                    color="green.600"
                >
                    |
                </Text>
                {currentText.map(({wordId, symbols, wordIndex}) => (
                    <>
                        <Word
                            key={wordId}
                            wordId={wordId}
                            symbols={symbols}
                            currentWordIndex={currentWordIndex}
                            wordIndex={wordIndex}
                        />

                        <Symbol
                            key={`space-${wordId}`}
                            symbolId={`space-${wordId}`}
                            symbol={" "}
                            isPrinting={currentWordIndex === wordIndex
                                && (symbols[symbols.length - 1]?.isPrinted
                                    || !!symbols[symbols.length - 1]?.extraSymbol)}
                            status={"default"}
                        />
                    </>
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
