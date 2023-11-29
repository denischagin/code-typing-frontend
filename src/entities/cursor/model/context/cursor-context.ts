import { createContext } from "react";
import { ICursorPositionContext } from "../types";

export const CursorPositionContext =
    createContext<ICursorPositionContext>({
        left: 0, top: 0, handleChangePosition: () => {}
    })