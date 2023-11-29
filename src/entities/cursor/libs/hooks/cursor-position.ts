import { CursorPositionContext } from "@entities/cursor";
import { useContext } from "react";

export const useCursorPosition = () => useContext(CursorPositionContext)