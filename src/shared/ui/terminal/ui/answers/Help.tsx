import { Box, Text } from "@chakra-ui/react"

import { CommandsEnum } from "@shared/ui/terminal/types"
import { motion } from "framer-motion"

export const Help = () => {
    const commandsDescription: Record<CommandsEnum, string> = {
        [CommandsEnum.info]: "Information about the terminal",
        [CommandsEnum.devs]: "Code typing developers",
        [CommandsEnum.stack]: "Our development stack for frontend and backend",
        [CommandsEnum.repos]: "Our open source repositories",
        [CommandsEnum.clear]: "Clears the terminal",
        [CommandsEnum.exit]: "Exits the terminal",
        [CommandsEnum.help]: "Displays this message"
    }

    return (
        <Box>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <Text mb={2}>
                    This terminal serves as a bot providing information about the Code-Typing
                    project.
                </Text>
            </motion.div>
            {[...Object.keys(commandsDescription)].map((value, index) => (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    key={index}
                >
                    <Text fontSize="medium">
                        <Text as="strong" textDecoration="underline">
                            {value}
                        </Text>
                        : {commandsDescription[value as CommandsEnum]}
                    </Text>
                </motion.div>
            ))}
        </Box>
    )
}
