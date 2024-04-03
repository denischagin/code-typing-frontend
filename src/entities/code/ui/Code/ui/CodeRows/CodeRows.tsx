import { memo } from "react"

import { Grid } from "@chakra-ui/react"

import { CodeRowsProps } from "@entities/code"

const CodeRows = (props: CodeRowsProps) => {
    return <Grid autoRows="40px" {...props} />
}

export default memo(CodeRows)
