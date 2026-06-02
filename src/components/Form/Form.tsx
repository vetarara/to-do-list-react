import { useState } from  'react'
import './Form.scss'


export const Form = (props: { createNewToDo: Function }) => {
    // useState - хранилище состояния и управления им
    const [text, setText] = useState<string>('')

    // ToDo добавляется, только если есть текст
    const formSubmit = () => {
        if (text) {
            props.createNewToDo(text)
            setText('')
        }        
    }

    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input 
                        value={text} 
                        type="text" 
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button></button>
                </label>
            </form>
        </div>
    )
}