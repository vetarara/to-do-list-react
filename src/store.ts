import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import themeReducer from './feature/themeList'
import inputReducer from './feature/inputSlice'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

export const store = configureStore({
  // собирает все возможные состояния приложения и выдаёт их одним завершённым объектом
  reducer: {
    // подключает компоненты к store: 
    // их состояния становится частью Redux state 
    // и сохраняются через persist в localStorage
    todoList: todoReducer,
    themeList: themeReducer,
    input: inputReducer
  },
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch