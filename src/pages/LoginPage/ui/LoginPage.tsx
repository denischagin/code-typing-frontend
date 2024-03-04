import {Box} from "@chakra-ui/react";
import {useRandom} from "@shared/libs/hooks";
import {languagesLoginPassword} from "@pages/LoginPage/constants";
import {CodeForm, makeObjectCodeRows} from "@widgets/CodeForm";


const LoginPage = () => {
    const [randomLanguageName] = useRandom(Object.keys(languagesLoginPassword) as Array<keyof typeof languagesLoginPassword>);

    const randomLanguage = languagesLoginPassword[randomLanguageName!] ?? {login: '', password: ''};

    const fields = makeObjectCodeRows(randomLanguage);

    return (
        <Box ml={4}>
            <CodeForm
                title="Login"
                onSuccess={(res) => {
                    alert("Ваш логин: " + res.login + "\nВаш пароль: " + res.password);
                }}
                fields={{
                    login: fields.login,
                    password: fields.password,
                }}
            />
        </Box>
    )
}

export default LoginPage;