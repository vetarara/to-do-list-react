import { useEffect, useState } from "react"
import { ToDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom"

interface ComponentProps {
    todos: ToDo[]
}

export const ItemDescription = ({ todos }: ComponentProps) => {
    // useParams достаёт динамические параметры, например, из bp Route path='/list/:id' из index.tsx
    const { id } = useParams()
    // useNavigate переводит страницу на другой url
    const navigate = useNavigate()
    const [todo, setTodo] = useState<ToDo>()

    // useEffect объединяет все возможные жизненные циклы компонентов
    useEffect(() => {
        const searchTodo = todos.find((todo) => String(todo.id) === id)

        if (searchTodo) {
            setTodo(searchTodo)
        } else {
            navigate('/404')
        }
    }, [todos, id, navigate])

    return (
        <div className="container">
            <h1 >{todo?.text}</h1>
        </div>
    )
}