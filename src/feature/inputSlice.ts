// значение поля ввода хранится в redux store вместо локального useState

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface InputState {
    value: string
}

const initialState: InputState = {
    value: ''
}

// createSlice() автоматически создаёт:
// reducer
// actions
// action creators
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
