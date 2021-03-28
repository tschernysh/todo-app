import s from './HeaderFilters.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormControls/FormControls'

const HeaderFiltersForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.header__filters}>

            <div className={s.filter}>
                <div>DONE</div>
                <Field  name='doneFilter' component={Input} type='checkbox' />
            </div>
            <div className={s.filter}>
                <div>TODO NAME</div>
                <Field  name='nameFilter' component={Input} />
            </div>
        </form>

    )
}

const HeaderFiltersReduxForm = reduxForm({ form: 'filters' })(HeaderFiltersForm)

const HeaderFilters = (props) => {

    return (
        <section className={s.filter__block}>
            <div className={s.header__filters_header}>
                filter by:
            </div>
            <HeaderFiltersReduxForm />
        </section>

    )
}


export default HeaderFilters