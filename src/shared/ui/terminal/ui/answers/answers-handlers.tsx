import { Devs } from "./Devs.tsx"
import { Help } from "./Help.tsx"
import { Repos } from "./Repos.tsx"
import { Stack } from "./Stack.tsx"
import { AnswersWithComponent, AnswersWithFunction } from "@shared/ui/terminal/types"

export const answersWithComponent: AnswersWithComponent = {
    devs: Devs,
    stack: Stack,
    help: Help,
    repos: Repos
}

export const answersWithFunction: AnswersWithFunction = {
    clear: args => {
        args.setTerminalValues([])
    },
    exit: args => {
        args.closeTerminal()
    }
}
