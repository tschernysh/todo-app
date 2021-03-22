import s from './TodoCard.module.css'

const TodoCard = (props) => {
    return (
        <div className={`${s.todo__card}`}>
            <span className={s.edit__task} title="edit task">&#9998;</span>
            <span className={s.delete__task} title="delete task">+</span>
            <div title={props.name} className={s.card__header}> {props.name} </div>
            <div className={s.card__done}>
                <hr />
                <input title="done" type="checkbox" />
                <hr />
            </div>
            <div title={props.description} className={s.card__text}> {props.description} </div>
        </div>
    )
}

export default TodoCard