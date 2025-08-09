import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./reducers/configSlice";
import userReducer from './reducers/userSlice'
import taskReducer from './reducers/taskSlice'

const store = configureStore({
    reducer: {
        config: configReducer,
        user: userReducer,
        task: taskReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store