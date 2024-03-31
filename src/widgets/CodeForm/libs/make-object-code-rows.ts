import {CodeFormRow} from "@widgets/CodeForm";

export const makeObjectCodeRows = <Fields extends string>(fields: Record<Fields, string[]>): Record<Fields, CodeFormRow> => {
    return Object.keys(fields).reduce((acc, key) => {
        return {
            ...acc, [key]: {
                rows: fields[key as keyof typeof fields],
                name: key,
                placeholder: `Please enter ${key}`,
                inputType: key === 'password' ? 'password' : 'text',
            }
        };
    }, {}) as Record<Fields, CodeFormRow>;
}