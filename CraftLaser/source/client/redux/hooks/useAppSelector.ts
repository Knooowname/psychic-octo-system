import { RootStateFromStore } from "../store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootStateFromStore> = useSelector