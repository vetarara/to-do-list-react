// компонент-страница для to-do листа
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { createAction, deleteAction, updateAction } from '../feature/todoList'
import { clearInput } from '../feature/inputSlice'


export const ToDoListPage = () => {
    // получение списка задач из Redux store
    const todoList = useSelector((state: RootState) => state.todoList.todos)

    // получение текущего значения input из Redux store
    const inputValue = useSelector((state: RootState) => state.input.value)
    const dispatch = useDispatch()

    // создаёт новую задачу из значения input в Redux 
    // и очищает поле ввода после добавления
    const createNewToDo = () => {
        if (inputValue) {
            dispatch(createAction(inputValue))
            dispatch(clearInput())
        }
    }

    const updateToDo = (toDoItem: ToDo) => {
        dispatch(updateAction(toDoItem))
    }

    const deleteToDo = (toDoItem: ToDo) => {
        dispatch(deleteAction(toDoItem))
    }

    return (
        <>
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}