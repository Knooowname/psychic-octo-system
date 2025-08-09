import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from '../../shared/types/user.types'

export interface UserSlice {
    loading: boolean,
    error: string | null,
    user: User | null,
}

const initialState: UserSlice = {
    loading: false,
    error: null,
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload
            state.loading = false
            state.error = null
        },
        clearUser(state) {
            state.user = null
            state.loading = false
            state.error = null
        }
    }
})

export const {setUser, clearUser} = userSlice.actions
export default userSlice.reducer