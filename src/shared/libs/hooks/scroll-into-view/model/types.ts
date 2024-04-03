export interface ScrollHandlers {
    scrollIntoView: (behavior?: ScrollBehavior) => void
    scrollTo: (options?: ScrollToOptions) => void
}
