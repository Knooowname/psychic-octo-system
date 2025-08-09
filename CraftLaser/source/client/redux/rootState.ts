import { User } from "../shared/types/user.types";
import { UserSlice } from "./reducers/userSlice";

export interface RootState {
    user: UserSlice
}