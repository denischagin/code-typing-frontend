import {Flex, Input, Text} from "@chakra-ui/react";
import {CodeContainer, CodeIndexesRange, CodeRow, CodeRows} from "@entities/code";
import {CodeFormProps} from "@widgets/CodeForm";
import {ChangeEventHandler, Fragment, KeyboardEventHandler, useState} from "react";

export const CodeForm = <Fields extends Record<string, unknown>>(props: CodeFormProps<Fields>) => {
    const {fields, onSuccess, title} = props;

    const [values, setValues] = useState<Record<keyof Fields, string>>({} as Record<keyof Fields, string>);

    const [openCount, setOpenCount] = useState(0);

    const handleIncrementOpenCount = () =>
        setOpenCount(prev => prev + 1);

    const isLastField = Object.keys(fields).length - 1 === openCount;


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
        <form onKeyDown={handleSubmitIncrement} onSubmit={e => e.preventDefault()}>
            <CodeContainer>
                <CodeIndexesRange startIndex={1} length={20}/>

                <CodeRows>
                    <CodeRow>
                        <Text
                            fontSize="25px"
                            color="whiteAlpha.900"
                        >
                            {`>> `} <Text as="strong">{title}</Text>
                        </Text>
                    </CodeRow>
                    <CodeRow/>
                    {Object.keys(fields).slice(0, openCount + 1).map((fieldName) => {
                        const {rows, placeholder, inputType, name} = fields[fieldName as keyof typeof fields];
                        return (
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
                                            autoFocus
                                        />
                                    </Flex>
                                </CodeRow>
                                <CodeRow></CodeRow>
                            </Fragment>

                        );
                    })}
                    {/*{fields.slice(0, openCount + 1).map(({rows, placeholder, inputType, name}) => (*/}
                    {/*    <Fragment key={placeholder}>*/}
                    {/*        {rows.map((rowString,) => (*/}
                    {/*            <CodeRow key={rowString}>*/}
                    {/*                <Text*/}
                    {/*                    fontSize="25px"*/}
                    {/*                    color="whiteAlpha.500"*/}
                    {/*                >*/}
                    {/*                    {rowString}*/}
                    {/*                </Text>*/}
                    {/*            </CodeRow>*/}
                    {/*        ))}*/}

                    {/*        <CodeRow>*/}
                    {/*            <Flex gap={2} alignItems="center">*/}
                    {/*                <Text*/}
                    {/*                    fontSize="25px"*/}
                    {/*                    color="whiteAlpha.800"*/}
                    {/*                    variant="unstyled"*/}
                    {/*                >*/}
                    {/*                    {`>>`}*/}
                    {/*                </Text>*/}

                    {/*                <Input*/}
                    {/*                    fontSize="25px"*/}
                    {/*                    color="whiteAlpha.800"*/}
                    {/*                    variant="unstyled"*/}
                    {/*                    placeholder={placeholder}*/}
                    {/*                    type={inputType}*/}
                    {/*                    name={name}*/}
                    {/*                    onChange={handleInputChange(name)}*/}
                    {/*                    value={values[name] ?? ''}*/}
                    {/*                    autoFocus*/}
                    {/*                />*/}
                    {/*            </Flex>*/}
                    {/*        </CodeRow>*/}
                    {/*        <CodeRow></CodeRow>*/}
                    {/*    </Fragment>*/}
                    {/*))}*/}

                    <CodeRow></CodeRow>
                </CodeRows>
            </CodeContainer>
        </form>
    );

}
