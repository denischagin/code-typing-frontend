import {CodeIndex, CodeIndexes, CodeIndexesRangeProps} from "@entities/code";
import {memo} from "react";

const CodeIndexesRange = (props: CodeIndexesRangeProps) => {
    const {length, startIndex} = props

    return (
        <CodeIndexes>
            {length > 0 && Array.from({length: length})
                .map((_, index) => (
                    <CodeIndex key={index} index={index + startIndex}/>
                ))}
        </CodeIndexes>
    )
}

export default memo(CodeIndexesRange)