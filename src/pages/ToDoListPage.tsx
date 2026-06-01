// компонент-страница для to-do листа
import { Header } from "../components/Header/Header"
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"

export const ToDoListPage = () => {

    // данные хранятся в самом главном родительском компоненте
    const todos: ToDo[] = [
            {
                id: 0,
                text: 'Первая задача',
                isDone: false
            },
            {
                id: 1,
                text: 'Вторая задача',
                isDone: true
            },
            {
                id: 2,
                text: 'Третья задача',
                isDone: true
            }
        ]
    return (
        // один компонент может вернуть только один блок
        // <React.Fragment> принято сокращать до <>
        // все части вёрстки - в отдельных компонентах, страницы собираются, как конструктор
        <>
            <Header/>
            <Form/>
            <ToDoList todos={todos}/>
        </>
    )
}