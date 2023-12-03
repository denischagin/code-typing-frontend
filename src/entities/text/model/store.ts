import {createEvent, createStore} from "effector";

export const eventChangeTypingValue = createEvent<string>();
export const eventChangeCurrentWordIndex = createEvent<number>();
export const eventIncrementCurrentWordIndex = createEvent()

export const $typingValueStore = createStore<string>('');
export const $currentWordIndexStore = createStore<number>(0);

$typingValueStore
    .on(eventChangeTypingValue, (_, value) => value);
$currentWordIndexStore
    .on(eventChangeCurrentWordIndex, (_, value) => value)
    .on(eventIncrementCurrentWordIndex, (store) => store + 1)

$currentWordIndexStore.watch((state) => console.log(state))
$typingValueStore.watch((state) => console.log(state))

