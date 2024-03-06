export type AnyAction = {
    type: string;
    payload?: unknown;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyMethod = (state: any, payload?: any) => any;

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: State, payload?: any) => State | void
>;

export type UseMethodsInit<State, Methods extends AnyMethodsMap<State>> =
    | (() => UseMethodsOptions<State, Methods>)
    | UseMethodsOptions<State, Methods>;

export type BoundMethod<Method extends AnyMethod> = (
    ...args: Tail<Parameters<Method>>
) => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BoundMethods<Methods extends AnyMethodsMap<any>> = {
    [Key in keyof Methods]: BoundMethod<Methods[Key]>;
};