import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from './slices/userSlice'
import modalRegReducer from './slices/modalSlice'
import favoritesReducer from './slices/favoritesSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        modal: modalRegReducer,
        favorites: favoritesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch