import {useRouteError, isRouteErrorResponse} from 'react-router-dom';
import {Flex, Text} from "@chakra-ui/react";

const ErrorPage = () => {
    const error = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.data.message || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        errorMessage = 'Unknown error';
    }

    return (
        <Flex direction="column" align="center" justify="center" h="100vh" w="100vw">
            <Text as="h1" fontSize="xx-large">Oops!</Text>
            <Text fontSize="xx-large">Sorry, error vim</Text>
            <Text fontSize="xx-large">
                <Text as="i" fontSize="xx-large">{errorMessage}</Text>
            </Text>
        </Flex>
    );
};

export default ErrorPage;