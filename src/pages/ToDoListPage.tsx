// компонент-страница для to-do листа
import { useState } from 'react'
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"


export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([])

    const createNewToDo = (text: string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos, newToDo])
    }

    const updateToDo = (toDoItem: ToDo) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === toDoItem.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodos(newTodos)
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newTodos = todos.filter((todo) => todo.id !== toDoItem.id)
        setTodos(newTodos)
    }

    return (
        // один компонент может вернуть только один блок
        // <React.Fragment> принято сокращать до <>
        // все части вёрстки - в отдельных компонентах, страницы собираются, как конструктор
        <>
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}