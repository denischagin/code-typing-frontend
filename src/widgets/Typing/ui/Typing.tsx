import {useRef} from "react";
import {
    getSymbolStatus,
    Symbol,
    useTyping,
    Word
} from "@entities/text";
import {Text} from "@chakra-ui/react";
import css from './Typing.module.scss'

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
            <Text fontSize="x-large">
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
                                && (symbols[symbols.length - 1].isPrinted
                                    || !!symbols[symbols.length - 1].extraSymbol)}
                            status={"default"}
                        />
                    </>
                ))}
            </Text>

            <input
                autoFocus
                value={typingValue}
                className={css.typing__field}
                onChange={handleChangeTypingField}
                ref={typingFieldRef}
            />
        </div>
    )

}
