import {CodeForm, makeObjectCodeRows} from "@widgets/CodeForm";
import {Box, Text} from "@chakra-ui/react";

const RegisterPage = () => {
    const fields = makeObjectCodeRows({
        email: [
            'email = input("Введите email")'
        ],
        password: [
            'password = input("Введите пароль")'
        ],
        nickname: [
            'nickname = input("Введите никнейм")'
        ],
        repeatPassword: [
            'repeatPassword = input("Повторите пароль")'
        ]
    });

    return (
        <Box ml={4}>
            <Text color="whiteAlpha.900" fontSize="xl">
                {/*{capitalizeFirstLetter(randomLanguageName!)}*/}
            </Text>

            <CodeForm
                title="Register new user"
                onSuccess={(res) => {
                    console.log(res);
                }}
                fields={{
                    nickname: fields.nickname,
                    email: fields.email,
                    password: fields.password,
                    repeatPassword: fields.repeatPassword
                }}
            />
        </Box>
    )
}

export default RegisterPage;
