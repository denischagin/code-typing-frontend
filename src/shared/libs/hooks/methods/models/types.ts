export type AnyAction = {
    type: string;
    payload?: unknown;
};
export type AnyMethod = (state: unknown, payload?: unknown) => unknown;

export type Tail<Arr extends readonly unknown[]> = Arr extends readonly [
        unknown,
        ...infer Rest
    ]
    ? Rest
    : [];

export interface UseMethodsOptions<State, Methods> {
    initialState: State;
    methods: Methods;
}

export type AnyMethodsMap<State> = Record<
    string,
    (state: State, payload?: unknown) => State | void
>;

export type UseMethodsInit<State, Methods extends AnyMethodsMap<State>> =
    | (() => UseMethodsOptions<State, Methods>)
    | UseMethodsOptions<State, Methods>;

export type BoundMethod<Method extends AnyMethod> = (
    ...args: Tail<Parameters<Method>>
) => void;

export type BoundMethods<Methods extends AnyMethodsMap<unknown>> = {
    [Key in keyof Methods]: BoundMethod<Methods[Key]>;
};