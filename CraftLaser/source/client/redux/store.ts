import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice'
import { RootState } from "./rootState";

export const preloadedState: Partial<RootState> = (window as any).__INITIAL_STATE__ || {}

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    preloadedState
})

export type RootStateFromStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store