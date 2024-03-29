import {memo} from "react";

import {CodeIndex, CodeIndexes, CodeIndexesRangeProps} from "@entities/code";

const CodeIndexesRange = (props: CodeIndexesRangeProps) => {
    const {length, startIndex, ...codeIndexesProps} = props

    return (
        <CodeIndexes {...codeIndexesProps}>
            {length > 0 && Array.from({length: length})
                .map((_, index) => (
                    <CodeIndex key={index} index={index + startIndex}/>
                ))}
        </CodeIndexes>
    )
}

export default memo(CodeIndexesRange)