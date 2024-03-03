import {Flex, Input, Text} from "@chakra-ui/react";
import {CodeContainer, CodeIndexesRange, CodeRow, CodeRows} from "@entities/code";
import {CodeFormProps} from "@widgets/CodeForm";
import {ChangeEventHandler, Fragment, KeyboardEventHandler, useState} from "react";

export const CodeForm = (props: CodeFormProps) => {
    const {fields, onSuccess} = props;

    const [values, setValues] = useState<Record<string, string>>({})

    const [openCount, setOpenCount] = useState(0);

    const handleIncrementOpenCount = () =>
        setOpenCount(prev => prev + 1);

    const isLastField = fields.length - 1 === openCount;


    const handleSubmitIncrement: KeyboardEventHandler = (e) => {
        if (e.key === 'Enter') {
            if (isLastField) return onSuccess(values);
            handleIncrementOpenCount();
        }
    }

    const handleInputChange = (fieldName: string): ChangeEventHandler<HTMLInputElement> => (e) => {
        setValues({...values, [fieldName]: e.target.value})
    }

    return (
        <form onKeyDown={handleSubmitIncrement}>
            <CodeContainer>
                <CodeIndexesRange startIndex={1} length={20}/>

                <CodeRows>
                    {fields.slice(0, openCount + 1).map(({rows, placeholder, inputType, name}) => (
                        <Fragment key={placeholder}>
                            {rows.map((rowString,) => (
                                <CodeRow key={rowString}>
                                    <Text
                                        fontSize="25px"
                                        color="whiteAlpha.500"
                                    >
                                        {rowString}
                                    </Text>
                                </CodeRow>
                            ))}

                            <CodeRow>
                                <Flex gap={2} alignItems="center">
                                    <Text
                                        fontSize="25px"
                                        color="whiteAlpha.800"
                                        variant="unstyled"
                                    >
                                        {`>>`}
                                    </Text>

                                    <Input
                                        fontSize="25px"
                                        color="whiteAlpha.800"
                                        variant="unstyled"
                                        placeholder={placeholder}
                                        type={inputType}
                                        name={name}
                                        onChange={handleInputChange(name)}
                                        value={values[name] ?? ''}
                                    />
                                </Flex>
                            </CodeRow>
                            <CodeRow></CodeRow>
                        </Fragment>
                    ))}

                    <CodeRow></CodeRow>
                </CodeRows>
            </CodeContainer>
        </form>
    );

}
