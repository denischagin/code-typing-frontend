import {AuthResponse, ILoginCredentials, IRegisterCredentials} from "@entities/viewer";
import {baseQueryV1, baseQueryWithoutAuth} from "@shared/api";


class ViewerService {
    public async login({login, password}: ILoginCredentials) {
        const response = await baseQueryWithoutAuth<AuthResponse>({
            url: `/auth/login`,
            method: 'POST',
            data: {
                login,
                password
            },
        })
        return response.data

    }

    public async register({nickname, email, password}: IRegisterCredentials) {
        const response = await baseQueryWithoutAuth<AuthResponse>({
            url: `/auth/registration`,
            method: 'POST',
            data: {
                nickname,
                email,
                password
            },
        })
        return response.data
    }

    public async logout() {
        const response = await baseQueryV1<AuthResponse>({
            url: `/auth/logout`,
            method: 'DELETE'
        })
        return response.data
    }

    public async refresh() {
        const response = await baseQueryWithoutAuth<AuthResponse>({
            url: `/auth/refresh`,
            method: 'GET'
        })
        return response.data
    }

    public async refreshWithCredentials() {
        const response = await baseQueryWithoutAuth<AuthResponse>({
            url: `/auth/refresh`,
            method: 'GET',
        })
        return response.data
    }

}

export default new ViewerService()