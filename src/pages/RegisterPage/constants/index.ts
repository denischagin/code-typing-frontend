import { RegisterCredentials } from "@entities/viewer"
import {
    cPassword,
    FormType,
    goPassword,
    javaPassword,
    jsPassword,
    pythonPassword,
    rustPassword,
    scalaPassword
} from "@pages/LoginPage/constants"

const javaNickname = [
    "Scanner scanner = new Scanner(System.in);",
    "String nickname = scanner.nextLine();"
]

const pythonNickname = ['nickname = input("Please enter your nickname: ")']
const jsNickname = ["let nickname = prompt()"]
const scalaNickname = ["val nickname = scala.io.StdIn.readLine()"]

const goNickname = ["var nickname string", "fmt.Scanln(&nickname)"]

const rustNickname = [
    "let mut nickname = String::new()",
    "std::io::stdin().read_line(&mut nickname)"
]

const cNickname = ["char nickname[100];", "fgets(nickname, 100, stdin);"]

const javaEmail = ["String email = scanner.nextLine();"]

const pythonEmail = ['email = input("Please enter your email: ")']

const jsEmail = ["let email = prompt()"]

const scalaEmail = ["val email = scala.io.StdIn.readLine()"]

const goEmail = ["var email string", "fmt.Scanln(&email)"]

const rustEmail = ["let mut email = String::new()", "std::io::stdin().read_line(&mut email)"]

const cEmail = ["char email[100];", "fgets(email, 100, stdin);"]

export const languagesRegisterForm: FormType<RegisterCredentials> = {
    java: {
        nickname: javaNickname,
        email: javaEmail,
        password: javaPassword
    },
    python: {
        nickname: pythonNickname,
        email: pythonEmail,
        password: pythonPassword
    },
    go: {
        nickname: goNickname,
        email: goEmail,
        password: goPassword
    },
    js: {
        nickname: jsNickname,
        email: jsEmail,
        password: jsPassword
    },
    c: {
        nickname: cNickname,
        email: cEmail,
        password: cPassword
    },
    scala: {
        nickname: scalaNickname,
        email: scalaEmail,
        password: scalaPassword
    },
    rust: {
        nickname: rustNickname,
        email: rustEmail,
        password: rustPassword
    }
}
