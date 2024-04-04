import { createEvent, createStore } from "effector"
import { useUnit } from "effector-react"

const eventToggleTerminal = createEvent()
const eventOpenTerminal = createEvent()
const eventCloseTerminal = createEvent()

export const $openTerminalStore = createStore<boolean>(false)
    .on(eventToggleTerminal, store => !store)
    .on(eventOpenTerminal, () => true)
    .on(eventCloseTerminal, () => false)

export const useTerminalHandlers = () =>
    useUnit({
        toggleTerminal: eventToggleTerminal,
        openTerminal: eventOpenTerminal,
        closeTerminal: eventCloseTerminal
    })

export const useTerminalIsOpen = () => useUnit($openTerminalStore)
