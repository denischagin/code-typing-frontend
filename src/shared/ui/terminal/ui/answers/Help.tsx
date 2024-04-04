import { Box, Text } from "@chakra-ui/react"

import { CommandsEnum } from "@shared/ui/terminal/types"
import { motion } from "framer-motion"

export const Help = () => {
    const commandsDescription: Record<CommandsEnum, string> = {
        [CommandsEnum.clear]: "Clears the terminal",
        [CommandsEnum.exit]: "Exits the terminal",
        [CommandsEnum.stack]: "Our development stack for frontend and backend",
        [CommandsEnum.devs]: "Code typing developers",
        [CommandsEnum.repos]: "Our open source repositories",
        [CommandsEnum.help]: "Displays this message"
    }

    return (
        <Box>
            {[...Object.keys(CommandsEnum)].map((value, index) => (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                    <Text key={index} fontSize="medium">
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
