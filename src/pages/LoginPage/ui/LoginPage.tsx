import {Box, Text} from "@chakra-ui/react";
import {useRandom} from "@shared/libs/hooks";
import {languagesLoginPassword} from "@pages/LoginPage/constants";
import {CodeForm, CodeFormRow} from "@widgets/CodeForm";
import {capitalizeFirstLetter} from "@shared/libs";


const LoginPage = () => {
    const [randomLanguageName] = useRandom(Object.keys(languagesLoginPassword) as Array<keyof typeof languagesLoginPassword>);

    const randomLanguage = languagesLoginPassword[randomLanguageName!];

    const fields = Object.keys(randomLanguage).map((key) => {
        return {
            rows: randomLanguage[key as keyof typeof randomLanguage],
            name: key,
            placeholder: `Please enter ${key}`,
            inputType: key === 'password' ? 'password' : 'text',
        };
    }) as Array<CodeFormRow>;


    return (
        <Box ml={4}>
            <Text color="whiteAlpha.900" fontSize="xl">
                {capitalizeFirstLetter(randomLanguageName!)}
            </Text>
            <CodeForm
                onSuccess={(res) => {
                    console.log(res);
                }}
                fields={fields}
            />
        </Box>
    )
}

export default LoginPage;