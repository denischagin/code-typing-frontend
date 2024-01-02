import {extendTheme} from '@chakra-ui/react'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

export const theme = extendTheme({
    config,
    fonts: {
        heading: `"JetBrains Mono", monospace`,
        body: `"JetBrains Mono", monospace`,
    },
})