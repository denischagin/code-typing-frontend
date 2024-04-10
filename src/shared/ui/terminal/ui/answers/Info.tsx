import { Flex, Heading, Text } from "@chakra-ui/react"

import { sections } from "./Info.constants"
import { motion } from "framer-motion"

export const Info = () => {
    return (
        <Flex direction="column" gap={5}>
            {sections.map((section, index) => (
                <motion.div
                    key={section.title}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.4 }}
                >
                    <Heading as="h2" fontSize="x-large">
                        {section.title}
                    </Heading>

                    {!!section.paragraphs && (
                        <Flex direction="column" gap={2}>
                            {section.paragraphs.map((paragraph, pIndex) => (
                                <Text key={pIndex}>{paragraph}</Text>
                            ))}
                        </Flex>
                    )}

                    {!!section.contentElement && section.contentElement}
                </motion.div>
            ))}
        </Flex>
    )
}
