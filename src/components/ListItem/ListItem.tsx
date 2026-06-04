import { ToDo } from "../../models/todo-item"
import { Link } from "react-router-dom"
import { ListItemLink } from "./ListItem.styled"

export const ListItem = ({todo}: { todo: ToDo }) => {
    return (
        <ListItemLink 
            to={`/list/${todo.id}`}
            $isDone={todo.isDone}
        >{todo.text}</ListItemLink>
    )
}