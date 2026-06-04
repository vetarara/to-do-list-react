import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { setInput } from '../../feature/inputSlice'
import { FormControl, FormBlock, FormField, FormLabel, FormWrapper } from './Form.styled'

import plusIcon from '../../assets/images/plus.png'

export const Form = (props: { createNewToDo: Function }) => {
    const dispatch = useDispatch()

    // Form больше не хранит состояние — он только отображает его 
    // и сообщает Redux об изменениях
    const text = useSelector((state: RootState) => state.input.value)

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        props.createNewToDo()
    }

    return (
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField 
                        value={text} 
                        type="text" 
                        onChange={(e) => dispatch(setInput(e.target.value))}
                    />
                    <FormControl icon={plusIcon}/>
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}