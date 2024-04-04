export interface GithubUser {
    avatar_url: string
    html_url: string
    login: string
    bio: string
}

export interface GithubUserItemProps {
    username: string
}

export interface GithubRepoItemProps {
    owner: string
    repo: string
}

export interface GithubRepository {
    name: string
    html_url: string
    topics?: string[]
}
