import { Fragment, ReactNode } from "react"

import { Flex, Kbd, Text } from "@chakra-ui/react"

interface InfoSection {
    title: string
    paragraphs?: string[]
    contentElement?: ReactNode
}

export const shortcutsData = [
    {
        keys: ["Alt+Enter"],
        action: "New code"
    },
    {
        keys: ["Ctrl+Alt+Enter"],
        action: "Repeat code"
    },
    {
        keys: ["Ctrl+`", "Alt+F12"],
        action: "Open terminal info"
    },
    {
        keys: ["Alt+1", "Ctrl+Shift+E"],
        action: "Select programming language"
    },
    {
        keys: ["Alt+2"],
        action: "Custom texts"
    },
    {
        keys: ["Alt+3"],
        action: "Typing mode"
    },
    {
        keys: ["Alt+4"],
        action: "Color theme"
    },
    {
        keys: ["Alt+5"],
        action: "Font settings"
    }
]

export const sections: InfoSection[] = [
    {
        title: "About",
        paragraphs: [
            "Code-typing is a web application built in React that assists users in typing code in various programming languages. It offers different modes such as typing the entire text or typing for a duration of 15s, 30s, or 60s.",
            "The application provides a wide range of dark themes, fonts, and font sizes for comfortable code typing experience. Code-typing features an IDE-inspired design layout, making it feel like you are coding in a familiar development environment.",
            "Test yourself in various modes, track your progress, and improve your speed."
        ]
    },
    {
        title: "Keyboard shortcuts",
        contentElement: (
            <Flex as="ul" direction="column" gap={1}>
                {shortcutsData.map(({ action, keys }) => {
                    return (
                        <Flex as="li" key={action}>
                            {keys.map((key, index) => (
                                <Fragment key={key}>
                                    {index !== 0 && (
                                        <Text as="span" mx={2}>
                                            or
                                        </Text>
                                    )}
                                    <span>
                                        <Text as="span" key={key}>
                                            <Kbd>{key}</Kbd>
                                        </Text>
                                    </span>
                                </Fragment>
                            ))}
                            :<Text ml={2}>{action}</Text>
                        </Flex>
                    )
                })}
            </Flex>
        )
    },
    {
        title: "Results",
        paragraphs: [
            "After each attempt, and scrolling to bottom, you can see the result of your attempt with the stats.",
            "Result info features a JSON-inspired design layout list in Results page, and shows info of attempt spm (symbols per minute), accuracy (%), and runtime."
        ]
    }
]
