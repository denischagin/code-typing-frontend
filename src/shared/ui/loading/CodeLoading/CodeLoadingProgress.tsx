import { useEffect, useRef, useState } from "react"

import { Text } from "@chakra-ui/react"

import { getRandomNumber } from "@shared/libs"
import { CodeLoadingProgressProps } from "@shared/ui/loading"

export const CodeLoadingProgress = (props: CodeLoadingProgressProps) => {
    const {
        maxLoadingCount = 50,
        symbol = "#",
        emptySymbol = ".",
        delay = 200,
        onSuccess,
        ...textProps
    } = props

    const [loadingCount, setLoadingCount] = useState(0)
    const [loadingHash, setLoadingHash] = useState(Date.now())

    const interval = useRef<NodeJS.Timeout>()

    useEffect(() => {
        interval.current = setInterval(() => {
            const random = getRandomNumber(1, Math.floor(maxLoadingCount / 6))
            setLoadingCount(prev =>
                prev + random > maxLoadingCount ? maxLoadingCount : prev + random
            )
        }, delay)

        return () => clearInterval(interval.current)
    }, [delay, loadingHash, maxLoadingCount])

    useEffect(() => {
        if (loadingCount >= maxLoadingCount) {
            onSuccess && onSuccess()

            setTimeout(() => {
                setLoadingHash(Date.now())
                setLoadingCount(0)
            }, 200)
        }
    }, [loadingCount, maxLoadingCount])

    const filledLoadingSymbol = symbol.repeat(loadingCount)
    const emptyLoadingSymbol = emptySymbol.repeat(maxLoadingCount - loadingCount)

    return (
        <Text color="main.900" fontSize="xl" whiteSpace="pre" textAlign="end" px={4} {...textProps}>
            [{filledLoadingSymbol + emptyLoadingSymbol}]
        </Text>
    )
}
