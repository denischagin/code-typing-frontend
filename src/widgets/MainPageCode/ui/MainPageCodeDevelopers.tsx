import {Link, Text} from "@chakra-ui/react";

import {CodeRow} from "@entities/code";

export const MainPageCodeDevelopers = () => {
    return (
        <>
            <CodeRow/>

            <CodeRow>
                <Text fontSize="xl" color="primary.400" ml={6}>
                    You found easter egg! Code Typing developers:
                </Text>
            </CodeRow>

            <CodeRow>
                <Link fontSize="xl" color="primary.100" href="https://github.com/denischagin"
                      textDecoration="underline">
                    Frontn't developer
                </Link>
            </CodeRow>

            <CodeRow>
                <Link fontSize="xl" color="primary.100" href="https://github.com/ttodoshi"
                      textDecoration="underline">
                    Backn't developer
                </Link>
            </CodeRow>
        </>
    )
}