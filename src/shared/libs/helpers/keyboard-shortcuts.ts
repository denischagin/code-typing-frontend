export type KeyboardShortcutsEvent = {
    key: string
    ctrlKey: boolean
    shiftKey: boolean
    altKey: boolean
    metaKey: boolean
}

/**
 * @example
 * keyboardShortcuts({
 *     "Ctrl+Shift+s": (e) => {
 *         e.preventDefault()
 *     },
 *     "!Ctrl+S": () => {}
 * })(e)
 * @param shortcuts
 */
export const keyboardShortcuts =
    <T extends KeyboardShortcutsEvent>(shortcuts: Record<string, (e: T) => void>) =>
    (e: T) => {
        Object.entries(shortcuts).forEach(([shortcut, handler]) => {
            const keys = shortcut.split("+")
            if (
                keys.every(key => {
                    if (key !== "!" && key.startsWith("!"))
                        return !getIsCurrentSymbol(e, key.substring(1))
                    return getIsCurrentSymbol(e, key)
                })
            )
                handler(e)
        })
    }

export const getIsCurrentSymbol = (e: KeyboardShortcutsEvent, key: string) => {
    if (key === "Ctrl") return e.ctrlKey
    if (key === "Shift") return e.shiftKey
    if (key === "Alt") return e.altKey
    if (key === "Meta") return e.metaKey
    return key === e.key
}
