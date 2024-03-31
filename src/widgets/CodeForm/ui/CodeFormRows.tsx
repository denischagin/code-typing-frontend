import {Text} from "@chakra-ui/react";

import {CodeRow} from "@entities/code";
import {CodeFormRowsProps} from "@widgets/CodeForm";

export const CodeFormRows = (props: CodeFormRowsProps) => {
    const {rows} = props;

    return (
        rows.map((rowString) => (
            <CodeRow key={rowString}>
                <Text
                    fontSize="25px"
                    color="main.500"
                >
                    {rowString}
                </Text>
            </CodeRow>
        ))
    )
}