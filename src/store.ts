import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import inputReducer from './feature/inputSlice'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

export const store = configureStore({
  // собирает все возможные состояния приложения и выдаёт их одним завершённым объектом
  reducer: {
    todoList: todoReducer,

    // подключает inputReducer к store: теперь состояние input 
    // становится частью Redux state 
    // и сохраняется через persist в localStorage
    input: inputReducer
  },
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch