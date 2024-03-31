import {ChangeEventHandler, Fragment, KeyboardEventHandler, useState} from "react";

import {Box, Text} from "@chakra-ui/react";

import {CodeContainer, CodeIndexesRange, CodeRow, CodeRows} from "@entities/code";
import {useOpenCount} from "@shared/libs/hooks/open-count";
import {CodeFormField, CodeFormProps, CodeFormRows} from "@widgets/CodeForm";

export const CodeForm = <Fields extends Record<string, unknown>>(props: CodeFormProps<Fields>) => {
    const {fields, onSuccess, title} = props;

    const [values, setValues] = useState<Record<keyof Fields, string>>({} as Record<keyof Fields, string>);

    const [slicedFields, {handleOpenCount, isLastItem}] = useOpenCount(Object.entries(fields))

    const handleSubmitIncrement: KeyboardEventHandler = (e) => {
        if (e.key === 'Enter') {
            if (isLastItem) return onSuccess(values);
            handleOpenCount();
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
                    {slicedFields.map(([, field]) => (
                        <Fragment key={field.placeholder}>
                            <CodeFormRows rows={field.rows}/>

                            <CodeFormField
                                placeholder={field.placeholder}
                                type={field.inputType}
                                name={field.name}
                                onChange={handleInputChange(field.name)}
                                value={values[field.name] ?? ''}
                            />
                            <CodeRow/>
                        </Fragment>
                    ))}
                    <CodeRow/>
                </CodeRows>
            </CodeContainer>
        </Box>
    );

}
