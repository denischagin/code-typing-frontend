import { ILoginCredentials } from "@entities/viewer"

export type FormType<Credentials> = Record<string, Record<keyof Credentials, string[]>>

const javaLogin = [
    "Scanner scanner = new Scanner(System.in);",
    "String login = scanner.nextLine();"
]

const pythonLogin = ['login = input("Please enter your login: ")']

const jsLogin = ["let login = prompt()"]

const scalaLogin = ["val login = scala.io.StdIn.readLine()"]

const goLogin = ["var login string", "fmt.Scanln(&login)"]

const rustLogin = ["let mut login = String::new()", "std::io::stdin().read_line(&mut login)"]

const cLogin = ["char login[100];", "fgets(login, 100, stdin);"]

export const javaPassword = ["String password = scanner.nextLine();"]

export const pythonPassword = ['password = input("Please enter your password: ")']

export const jsPassword = ["let password = prompt()"]

export const scalaPassword = ["val password = scala.io.StdIn.readLine()"]

export const goPassword = ["var password string", "fmt.Scanln(&password)"]

export const rustPassword = [
    "let mut password = String::new()",
    "std::io::stdin().read_line(&mut password)"
]

export const cPassword = ["char password[100];", "fgets(password, 100, stdin);"]
export const languagesAuthForm: FormType<ILoginCredentials> = {
    java: {
        login: javaLogin,
        password: javaPassword
    },
    python: {
        login: pythonLogin,
        password: pythonPassword
    },
    go: {
        login: goLogin,
        password: goPassword
    },
    js: {
        login: jsLogin,
        password: jsPassword
    },
    c: {
        login: cLogin,
        password: cPassword
    },
    scala: {
        login: scalaLogin,
        password: scalaPassword
    },
    rust: {
        login: rustLogin,
        password: rustPassword
    }
}
