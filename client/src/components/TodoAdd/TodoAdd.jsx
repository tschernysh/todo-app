import s from './TodoAdd.module.css'
import { reduxForm, Field } from 'redux-form'

const TodoAddForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h2>Create task</h2>
            <Field placeholder='Type task name' name='name' component='input' className={s.editor__header} type="text" />
            <Field placeholder='Type task description' name='description' component='textarea' className={s.editor__text} cols="30" rows="10" />
            <button>ADD TASK</button>

        </form>
    )
}

const TodoAddReduxForm = reduxForm({form: 'todoAdd'})(TodoAddForm)


const TodoAdd = (props) => {


    let createTodo = (values) => {
        console.log(values);
        
        props.createTodo(values.name, values.description)
    }

    return (
        <div className={s.editor__block}>
            <TodoAddReduxForm onSubmit={createTodo} />
        </div>
    )
}

export default TodoAdd