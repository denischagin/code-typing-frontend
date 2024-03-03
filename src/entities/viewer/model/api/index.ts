export interface ILoginCredentials {
    login: string,
    password: string
}

export interface IRegisterCredentials {
    nickname: string,
    password: string,
    email: string
}

export interface AuthResponse {
    access: string,
    refresh: string
}
