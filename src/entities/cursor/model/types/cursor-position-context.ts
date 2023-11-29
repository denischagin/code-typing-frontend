export interface ICursorPositionContext extends ICursorPosition {
    handleChangePosition: (position: ICursorPosition) => void
}

export interface ICursorPosition {
    left: number,
    top: number
}