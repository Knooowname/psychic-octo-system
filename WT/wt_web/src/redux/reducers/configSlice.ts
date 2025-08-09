import { Config } from "@/shared/types/config.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CongifSlice {
    staticData: Config | null
}

const initialState: CongifSlice = {
    staticData: null
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setStaticData: (state, action: PayloadAction<Config>) => {
            state.staticData = action.payload
        }
    }
})

export const {setStaticData} = configSlice.actions
export default configSlice.reducer