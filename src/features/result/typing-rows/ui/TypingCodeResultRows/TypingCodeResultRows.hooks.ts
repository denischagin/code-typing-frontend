import { useEffect } from "react"

import { useRandomCode } from "@entities/code"
import { mapResultToApiBody, useResult, useSaveResult } from "@entities/results"

export const useSaveResultOnEnd = () => {
    const { mutate: saveResult } = useSaveResult()
    const { randomTextUUID } = useRandomCode()
    const { result } = useResult()

    useEffect(() => {
        if (!result.resultTime || !randomTextUUID) return

        saveResult(mapResultToApiBody({ ...result, codeExampleUUID: randomTextUUID }))
    }, [result.resultTime])
}
