import { useSelector, useDispatch } from 'react-redux'
import './Form.scss'
import { RootState } from '../../store'
import { setInput } from '../../feature/inputSlice'

export const Form = (props: { createNewToDo: Function }) => {
    const dispatch = useDispatch()
    const text = useSelector((state: RootState) => state.input.value)

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        props.createNewToDo()
    }

    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input 
                        value={text} 
                        type="text" 
                        onChange={(e) => dispatch(setInput(e.target.value))}
                    />
                    <button></button>
                </label>
            </form>
        </div>
    )
}