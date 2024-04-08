import { Devs } from "./Devs.tsx"
import { Help } from "./Help.tsx"
import { Repos } from "./Repos.tsx"
import { Stack } from "./Stack.tsx"
import { AnswersWithComponent } from "@shared/ui/terminal/types"

export const answersWithComponent: AnswersWithComponent = {
    devs: Devs,
    stack: Stack,
    help: Help,
    repos: Repos
}
