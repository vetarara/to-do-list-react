import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import inputReducer from './feature/inputSlice'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

export const store = configureStore({
  // собирает все возможные состояния приложения и выдаёт их одним завершённым объектом
  reducer: {
    todoList: todoReducer,
    input: inputReducer
  },
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch