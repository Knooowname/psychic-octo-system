import { fetchConfig } from "@/api/fetchConfig";
import { useAppSelector } from "@/hooks/useAppSelector";
import { api } from "@/pages/api/api";
import { APICOMMAND } from "@/shared/types/command.types";
import { Task } from "@/shared/types/task.types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskInitialState {
    tasks: Task[] | [],
    loading: boolean,
    error: string | null,
}

const initialState: TaskInitialState = {
    tasks: [],
    loading: false,
    error: null
}

export const fetchTasksExecutor = createAsyncThunk('tasks/executor', async (id: string, thunkApi) => {
    try {
        const config = await fetchConfig()
        const response = await api(APICOMMAND.GETEXECUTORTASK, {'id': `${id}`}, config)
        const data = await response?.json()
        return data
    } catch (error) {
        return thunkApi.rejectWithValue('Ошибка при получении задач для исполнителя')
    }
})

export const fetchTasksAuthor = createAsyncThunk('tasks/author', async (id: string, thunkApi) => {
    try {
        const config = await fetchConfig()
        const response = await api(APICOMMAND.GETAUTHORTASK, id, config)
        const data = await response?.json()
        return data
    } catch (error) {
        return thunkApi.rejectWithValue('Ошибка при получении задач для автора')
    }
})

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchTasksExecutor.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTasksExecutor.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
            .addCase(fetchTasksExecutor.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.tasks = action.payload
            })
            .addCase(fetchTasksAuthor.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTasksAuthor.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
            .addCase(fetchTasksAuthor.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.tasks = action.payload
            })
    }
})

export default taskSlice.reducer