import { Button } from "@chakra-ui/react"

import { DetailsKeyProps, ResultKey } from "@entities/results"

export const DetailsKey = (props: DetailsKeyProps) => {
    const { name, onShowDetails, openDetails, ...restProps } = props

    return (
        <ResultKey
            value={
                <Button variant="outline" size="sm" onClick={onShowDetails}>
                    {openDetails === name ? `Hide ${name} details` : `Show ${name} details`}
                </Button>
            }
            {...restProps}
        />
    )
}
