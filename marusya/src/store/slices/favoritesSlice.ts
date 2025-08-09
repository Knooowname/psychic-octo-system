import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteFavoritesMovie, getFavorites, setFavoritesMovie } from "../../api/favorites";
import { MovieSchema } from "../../api/MovieSchema";

export interface UserFavorites {
    favorites: string[],
    surname: string,
    name: string,
    email: string,
}

export interface Favorites {
    favorites: MovieSchema[] | null,
    user: UserFavorites | null,
    loading: boolean,
    error: string | null,
}

const initialState: Favorites = {
    favorites: null,
    user: null,
    loading: false,
    error: null,
}

export const fetchFavoritesUser = createAsyncThunk('user/getFavorites', async (_, thunkApi) => {
    try {
        return await getFavorites()
    } catch (error) {
        return thunkApi.rejectWithValue('Ошибка при получении избранных фильмов')    
    }
})

export const setFavorites = createAsyncThunk('user/setFavorites', async (id: string, thunkApi) => {
    try {
        return await setFavoritesMovie(id)
    } catch (error) {
        return thunkApi.rejectWithValue('Ошибка при добавлении фильма в избранное')
    }
})

export const removeFavorites = createAsyncThunk('user/removeFavorites', async (id: string, thunkApi) => {
    try {
        return await deleteFavoritesMovie(id)
    } catch (error) {
        return thunkApi.rejectWithValue('Ошибка при удалении фильма')
    }
})

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchFavoritesUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchFavoritesUser.fulfilled, (state, action) => {
                state.favorites = action.payload
                state.loading = false
                state.error = null
            })
            .addCase(fetchFavoritesUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
            .addCase(setFavorites.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.user = action.payload
            })
            .addCase(removeFavorites.fulfilled, (state, action) => {
                state.user = action.payload
                state.loading = false
                state.error = null
            })
    }
})

export default favoritesSlice.reducer