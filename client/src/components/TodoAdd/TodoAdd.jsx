import s from './TodoAdd.module.css'
import { reduxForm, Field } from 'redux-form'
import {Input, Textarea} from "../common/FormControls/FormControls"
import { required } from '../../utils/validators/validator'

const TodoAddForm = (props) => {
    console.log(props.isFetching);
    
    return (
        <form className={s.add__block}  onSubmit={props.handleSubmit}>
            <h2>Create task</h2>
            <Field validate={[required]} placeholder='Type task name' name='name' component={Input}  type="text" />
            <Field placeholder='Type task description' name='description' component={Textarea}  cols="30" rows="10" />
            <button disabled={props.isFetching} >ADD TASK</button>

        </form>
    )
}

const TodoAddReduxForm = reduxForm({form: 'todoAdd'})(TodoAddForm)


const TodoAdd = (props) => {


    let createTodo = (values) => {
        console.log(props.profileId);
        
        props.createTodo(props.profileId ,values.name, values.description)
    }

    return (
        <div >
            <TodoAddReduxForm isFetching={props.isFetching}  onSubmit={createTodo} />
        </div>
    )
}

export default TodoAdd