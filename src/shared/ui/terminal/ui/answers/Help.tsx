import { Box, Text } from '@chakra-ui/react'

import { CommandsEnum } from '@shared/ui/terminal/types'

export const Help = () => {
  const commandsDescription: Record<CommandsEnum, string> = {
    [CommandsEnum.clear]: 'Clears the terminal',
    [CommandsEnum.exit]: 'Exits the terminal',
    [CommandsEnum.stack]: 'Our development stack for frontend and backend',
    [CommandsEnum.devs]: 'Code typing developers',
    [CommandsEnum.repos]: 'Our open source repositories',
    [CommandsEnum.help]: 'Displays this message',
  }

  return (
    <Box>
      {[...Object.keys(CommandsEnum)].map((value, index) => (
        <Text
          key={index}
          fontSize="medium"
        >
          <Text
            as="strong"
            textDecoration="underline"
          >
            {value}
          </Text>
          : {commandsDescription[value as CommandsEnum]}
        </Text>
      ))}
    </Box>
  )
}
