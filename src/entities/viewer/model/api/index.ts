export interface LoginCredentials {
    login: string
    password: string
}

export interface RegisterCredentials {
    nickname: string
    password: string
    email: string
}

export type AuthResponse = string
