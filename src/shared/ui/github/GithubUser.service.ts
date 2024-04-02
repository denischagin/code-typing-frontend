import {GithubUser} from "./GithubUser.interface.ts";
import axios from "axios";

class GithubUserService {
    public async getUserByUsername(username: string): Promise<GithubUser> {
        const response = await axios.get<GithubUser>(`https://api.github.com/users/${username}`)
        return response.data
    }
}

export default new GithubUserService()