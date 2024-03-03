const javaLogin = [
    'Scanner scanner = new Scanner(System.in);',
    'String login = scanner.nextLine();',
]

const pythonLogin = [
    'login = input("Please enter your login: ")',
]

const jsLogin = [
    'let login = prompt()',
]

const scalaLogin = [
    'val login = scala.io.StdIn.readLine()',
]

const goLogin = [
    'var login string',
    'fmt.Scanln(&login)',
]

const rustLogin = [
    'let mut login = String::new()',
    'std::io::stdin().read_line(&mut login)',
]


const cLogin = [
    'char login[100];',
    'fgets(login, 100, stdin);',
]

const javaPassword = [
    'String password = scanner.nextLine();',
]

const pythonPassword = [
    'password = input("Please enter your password: ")',
]

const jsPassword = [
    'let password = prompt()',
]

const scalaPassword = [
    'val password = scala.io.StdIn.readLine()',
]

const goPassword = [
    'var password string',
    'fmt.Scanln(&password)',
]

const rustPassword = [
    'let mut password = String::new()',
    'std::io::stdin().read_line(&mut password)',
]

const cPassword = [
    'char password[100];',
    'fgets(password, 100, stdin);',
]
export const languagesLoginPassword = {
    java: {
        login: javaLogin,
        password: javaPassword,
    },
    python: {
        login: pythonLogin,
        password: pythonPassword,
    },
    go: {
        login: goLogin,
        password: goPassword,
    },
    js: {
        login: jsLogin,
        password: jsPassword,
    },
    c: {
        login: cLogin,
        password: cPassword,
    },
    scala: {
        login: scalaLogin,
        password: scalaPassword,
    },
    rust: {
        login: rustLogin,
        password: rustPassword,
    }
}
