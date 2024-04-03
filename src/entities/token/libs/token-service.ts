import { localStorageItems } from "@shared/constants"

class TokenService {
    public setAccessToken(accessToken: string) {
        localStorage.setItem(localStorageItems.accessToken, accessToken)
    }

    public deleteAccessToken() {
        localStorage.removeItem(localStorageItems.accessToken)
    }

    public getAccessToken() {
        return localStorage.getItem(localStorageItems.accessToken)
    }
}

export default new TokenService()
