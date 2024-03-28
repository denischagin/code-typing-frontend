import {ChangeEventHandler, Fragment, KeyboardEventHandler, useState} from "react";

import {Box, Flex, Input, Text} from "@chakra-ui/react";

import {CodeContainer, CodeIndexesRange, CodeRow, CodeRows} from "@entities/code";
import {CodeFormProps} from "@widgets/CodeForm";

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
        <Box w="100%" onKeyDown={handleSubmitIncrement} onSubmit={e => e.preventDefault()}>
            <CodeContainer>
                <CodeIndexesRange startIndex={1} length={20}/>

                <CodeRows>
                    <CodeRow>
                        <Text
                            fontSize="25px"
                            color="main.900"
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
                                            color="main.500"
                                        >
                                            {rowString}
                                        </Text>
                                    </CodeRow>
                                ))}

                                <CodeRow>
                                    <Flex gap={2} alignItems="center" width="100%">
                                        <Text
                                            fontSize="25px"
                                            color="main.800"
                                            variant="unstyled"
                                        >
                                            {`>>`}
                                        </Text>

                                        <Input
                                            fontSize="25px"
                                            color="main.800"
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
                    <CodeRow></CodeRow>
                </CodeRows>
            </CodeContainer>
        </Box>
    );

}
