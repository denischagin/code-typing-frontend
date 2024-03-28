import {createEvent, createStore} from "effector";
import {useUnit} from "effector-react/compat";

import {CodeErrorsContextState} from "@entities/code";

const eventIncrementErrors = createEvent()
const eventSetErrorsCount = createEvent<number>()
const eventSetIsError = createEvent<boolean>()

const $codeErrorsStore = createStore<CodeErrorsContextState>({
    isError: false,
    errorsCount: 0,
})
    .on(eventIncrementErrors, (state) => ({
        ...state,
        errorsCount: state.errorsCount + 1
    }))
    .on(eventSetErrorsCount, (state, errors) => ({
        ...state,
        errorsCount: errors
    }))
    .on(eventSetIsError, (state, isError) => ({
        ...state,
        isError: isError
    }))

export const useCodeErrors = () => useUnit($codeErrorsStore)
export const useCodeErrorsHandlers = () => useUnit({
    incrementErrors: eventIncrementErrors,
    setErrorsCount: eventSetErrorsCount,
    setIsError: eventSetIsError,
})