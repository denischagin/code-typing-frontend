import {Flex, Image, Text} from "@chakra-ui/react";

import chakraUiIcon from "@shared/assets/chakraui.png";
import effectorIcon from "@shared/assets/effector-icon.svg"
import goIcon from "@shared/assets/go-original.svg";
import javaIcon from "@shared/assets/java-original-wordmark.svg";
import mongodbIcon from "@shared/assets/mongodb-original-wordmark.svg";
import postgresqlIcon from "@shared/assets/postgresql-original-wordmark.svg";
import rabbitmqIcon from "@shared/assets/rabbitmq-icon.svg";
import reactIcon from "@shared/assets/react-original-wordmark.svg";
import reactQueryIcon from "@shared/assets/react-query-icon.svg"
import reactRouter from "@shared/assets/react-router-icon.svg"
import redisIcon from "@shared/assets/redis-original-wordmark.svg";
import springIcon from "@shared/assets/springio-icon.svg";
import typescriptIcon from "@shared/assets/typescript-original.svg";
import {motion} from "framer-motion";

export const Stack = () => {
    const frontendStack = [
        reactIcon,
        typescriptIcon,
        chakraUiIcon,
        reactQueryIcon,
        effectorIcon,
        reactRouter
    ];

    const backendStack = [
        javaIcon,
        springIcon,
        goIcon,
        mongodbIcon,
        redisIcon,
        postgresqlIcon,
        rabbitmqIcon
    ];

    return (
        <Flex direction="column" gap={5}>
            <Flex gap={2} wrap="wrap" align="center">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, ease: 'easeOut'}}
                >
                    <Text mr={2}>Frontend</Text>
                </motion.div>
                {
                    frontendStack.map((value, index) => (
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.2, ease: 'easeOut'}}
                        >
                            <Image key={value} w={10} h={10} src={value}/>
                        </motion.div>
                    ))}
            </Flex>

            <Flex gap={2} wrap="wrap" align="center">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, ease: 'easeOut'}}
                >
                    <Text mr={2}>Backend</Text>
                </motion.div>
                {
                    backendStack.map((value, index) => (
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2,
                                ease: 'easeOut'
                            }}
                        >
                            <Image key={value} w={10} h={10} src={value}/>
                        </motion.div>
                    ))}
            </Flex>
        </Flex>
    )
}