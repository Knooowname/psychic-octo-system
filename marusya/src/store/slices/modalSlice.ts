import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Modal = 'register' | 'auth' | 'success' | 'trailer' | null

interface ModalState {
    isOpen: boolean,
    modalType: Modal,
}

const initialState: ModalState = {
    isOpen: false,
    modalType: null,
}


export const modalAuthSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal(state, action: PayloadAction<Modal>) {
            state.isOpen = true,
            state.modalType = action.payload
        },
        closeModal(state, action: PayloadAction<Modal>) {
            state.isOpen = false,
            state.modalType = action.payload
        }
    }
})

export const { openModal, closeModal } = modalAuthSlice.actions
export default modalAuthSlice.reducer