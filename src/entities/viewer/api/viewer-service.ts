import {baseQueryV1} from "@shared/api";
import {AuthResponse, ILoginCredentials, IRegisterCredentials} from "@entities/viewer";


class ViewerService {
    public async login({login, password}: ILoginCredentials) {
        const response = await baseQueryV1<AuthResponse>({
            url: `/auth/login`,
            method: 'POST',
            data: {
                login,
                password
            }
        })
        return response.data

    }

    public async register({nickname, email, password}: IRegisterCredentials) {
        const response = await baseQueryV1<AuthResponse>({
            url: `/auth/register`,
            method: 'POST',
            data: {
                nickname,
                email,
                password
            }
        })
        return response.data
    }

    public async logout() {
        const response = await baseQueryV1<AuthResponse>({
            url: `/auth/logout`,
            method: 'POST'
        })
        return response.data
    }

    public async refresh() {
        const response = await baseQueryV1<AuthResponse>({
            url: `/auth/refresh`,
            method: 'POST'
        })
        return response.data
    }

}

export default new ViewerService()