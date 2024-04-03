import {Flex, Link} from "@chakra-ui/react";

import {motion} from "framer-motion";

export const Repos = () => {
    const reposLinks = [
        {link: 'https://github.com/denischagin/code-typing', title: 'Frontend'},
        {link: 'https://github.com/ttodoshi/code-typing-backend', title: 'Backend'},
    ]
    return (
        <Flex gap={2} direction="column">
            {reposLinks.map(({link, title}, index) => (
                <motion.div
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: index * 0.2, ease: 'easeOut'}}
                >
                    <Link
                        textDecoration="underline"
                        color="primary.200"
                        _hover={{color: "primary.300"}}
                        href={link}
                        target="_blank"
                    >
                        {title}
                    </Link>
                </motion.div>
            ))}
        </Flex>
    )
}