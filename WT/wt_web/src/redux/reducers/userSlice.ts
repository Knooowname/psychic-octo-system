import { User } from "@/shared/types/user.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userInit {
    user: User | null
}

const initialState: userInit = {
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload
            console.log(state.user)
        },
        clearUser(state) {
            state.user = null
        }
    }
})

export const {setUser, clearUser} = userSlice.actions
export default userSlice.reducer