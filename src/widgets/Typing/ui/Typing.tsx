import {useRef} from "react";
import {Text} from "@chakra-ui/react";
import css from './Typing.module.scss'
import {Cursor, TypingField} from "@features/typing";
import {
    Symbol,
    useTyping,
    Word
} from "@entities/text";

export const Typing = () => {
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
                <Cursor />

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
                            key={`space-${typingValue}`}
                            symbolId={`space-${typingValue}`}
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
