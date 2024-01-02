import {AnyAction, AnyMethodsMap, BoundMethods, UseMethodsInit} from "@shared/libs";
import {Reducer, useMemo, useReducer} from "react";
import {produce} from "immer";

/**
 * Custom hook that provides state and bound methods for managing state using the reducer pattern.
 *
 * @template State - The type of the state object.
 * @template Methods - The type of the methods object.
 * @param {UseMethodsInit<State, Methods>} options - The options object or function that returns the options object.
 * @returns {[State, BoundMethods<Methods>]} - A tuple containing the state object and the bound methods.
 */
export const useMethods = <State, Methods extends AnyMethodsMap<State>>(
    options: UseMethodsInit<State, Methods>
): [State, BoundMethods<Methods>] => {
    const initialOptions = useMemo(
        () => (typeof options === "object" ? options : options()),
        []
    );

    const reducer = (state: State, action: AnyAction): State => {
        const actualOptions = typeof options === "object" ? options : options();

        const actionReducer = actualOptions.methods[action.type];
        return produce(state, (draft: State) =>
            actionReducer(draft, action.payload)
        );
    };

    const [state, dispatch] = useReducer<Reducer<State, AnyAction>>(reducer, initialOptions.initialState);

    const methods = useMemo(() => {
        const result = {} as BoundMethods<Methods>

        for (const key in initialOptions.methods) {
            result[key] = (payload?: unknown) => dispatch({type: key, payload});
        }
        return result;
    }, [initialOptions]);

    return [state, methods as BoundMethods<Methods>]
}