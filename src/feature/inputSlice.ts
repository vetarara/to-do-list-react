import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface InputState {
    value: string
}

const initialState: InputState = {
    value: ''
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setInput: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        clearInput: (state) => {
            state.value = ''
        }
    }
})

export const { setInput, clearInput } = inputSlice.actions

export default inputSlice.reducer
