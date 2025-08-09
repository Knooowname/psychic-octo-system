import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getProfile, RegisterUser, userLogin, userLogout, userRegister } from "../../api/auth"


export interface User {
    email: string, 
    name: string,
    surname: string,
}

interface UserState {
    user: User | null,
    loading: boolean,
    error: string | null,
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
}

export const fetchUserProfile = createAsyncThunk('user/fetchProfile', async (_, thunkApi) => {
    try {
        return await getProfile()
    } catch (error) {
        return thunkApi.rejectWithValue('Ошибка при получении профиля')
    }
})

export const loginUser = createAsyncThunk('user/login', async ({email, password}: {email: string, password: string}, thunkApi) => {
    try {
        await userLogin({email, password})
        return await getProfile()
    } catch (error) {
        return thunkApi.rejectWithValue('Ошибка при входе')
    }
})

export const registerNewUser = createAsyncThunk('user/register', async (userData: RegisterUser, thunkApi) => {
    try {
        await userRegister(userData)
        return null
    } catch (error) {
        return thunkApi.rejectWithValue('Ошибка при регистрации')
    }
})

export const logoutUser = createAsyncThunk('user/logout', async (_, thunkApi) => {
    try {
        await userLogout()
        return null
    } catch (error) {
        return thunkApi.rejectWithValue('Ошибка при выходе')
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.user = action.payload
                state.loading = false
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(registerNewUser.fulfilled, (state) => {
                state.loading = false
                state.error = null
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null
                state.error = null
                state.loading = false
            })
    }
})

export default userSlice.reducer;