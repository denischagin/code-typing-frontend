import { Flex, Image, Text } from "@chakra-ui/react"
import { Tooltip } from "@chakra-ui/react"

import chakraUiIcon from "@shared/assets/chakraui.png"
import effectorIcon from "@shared/assets/effector-icon.svg"
import goIcon from "@shared/assets/go-original.svg"
import javaIcon from "@shared/assets/java-original-wordmark.svg"
import mongodbIcon from "@shared/assets/mongodb-original-wordmark.svg"
import postgresqlIcon from "@shared/assets/postgresql-original-wordmark.svg"
import rabbitmqIcon from "@shared/assets/rabbitmq-icon.svg"
import reactIcon from "@shared/assets/react-original-wordmark.svg"
import reactQueryIcon from "@shared/assets/react-query-icon.svg"
import reactRouter from "@shared/assets/react-router-icon.svg"
import redisIcon from "@shared/assets/redis-original-wordmark.svg"
import springIcon from "@shared/assets/springio-icon.svg"
import typescriptIcon from "@shared/assets/typescript-original.svg"
import { motion } from "framer-motion"

export interface StackObjectItem {
    name: string
    icon: string
    link: string
}

export const Stack = () => {
    const frontendStack: StackObjectItem[] = [
        {
            icon: reactIcon,
            name: "React",
            link: "https://reactjs.org/"
        },
        {
            icon: typescriptIcon,
            name: "TypeScript",
            link: "https://www.typescriptlang.org/"
        },
        {
            icon: chakraUiIcon,
            name: "Chakra UI",
            link: "https://chakra-ui.com/"
        },
        {
            icon: reactQueryIcon,
            name: "React Query",
            link: "https://react-query.tanstack.com/"
        },
        {
            icon: effectorIcon,
            name: "Effector",
            link: "https://effector.dev/"
        },
        {
            icon: reactRouter,
            name: "React Router",
            link: "https://reactrouter.com/"
        }
    ]

    const backendStack: StackObjectItem[] = [
        {
            icon: javaIcon,
            name: "Java",
            link: "https://www.java.com/"
        },
        {
            icon: springIcon,
            name: "Spring",
            link: "https://spring.io/"
        },
        { icon: goIcon, name: "Go", link: "https://golang.org/" },
        {
            icon: mongodbIcon,
            name: "MongoDB",
            link: "https://www.mongodb.com/"
        },
        { icon: redisIcon, name: "Redis", link: "https://developer.redis.com/" },
        {
            icon: postgresqlIcon,
            name: "PostgreSQL",
            link: "https://www.postgresql.org/"
        },
        {
            icon: rabbitmqIcon,
            name: "RabbitMQ",
            link: "https://www.rabbitmq.com/"
        }
    ]

    return (
        <Flex direction="column" gap={5}>
            <Flex gap={2} wrap="wrap" align="center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Text mr={2}>Frontend</Text>
                </motion.div>
                {frontendStack.map(({ icon, name, link }, index) => (
                    <motion.a
                        key={name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                        href={link}
                        target="_blank"
                    >
                        <Tooltip label={name}>
                            <Image w={10} h={10} src={icon} />
                        </Tooltip>
                    </motion.a>
                ))}
            </Flex>

            <Flex gap={2} wrap="wrap" align="center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Text mr={2}>Backend</Text>
                </motion.div>
                {backendStack.map(({ icon, name, link }, index) => (
                    <motion.a
                        key={name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                        href={link}
                        target="_blank"
                    >
                        <Tooltip label={name}>
                            <Image w={10} h={10} src={icon} />
                        </Tooltip>
                    </motion.a>
                ))}
            </Flex>
        </Flex>
    )
}
