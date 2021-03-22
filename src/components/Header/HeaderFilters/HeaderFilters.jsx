import s from './HeaderFilters.module.css'

let HeaderFilters = () => {
    return(
        <section>
            <div className={s.header__filters_header}>
                filters
            </div>
            <div className={s.header__filters}>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
            </div>           
        </section>

    )
}


export default HeaderFilters