import s from './HeaderFilters.module.css'

let HeaderFilters = (props) => {

    let setNameFilter = (name) => {
        console.log(name);
        
        props.setNameFilter(name)
    }

    let toggleDoneFilter = () => {
        props.toggleDoneFilter()
    }

    return(
        <section className={s.filter__block}>
            <div className={s.header__filters_header}>
                filter by:
            </div>
            <div className={s.header__filters}>
                <div className={s.filter}>
                    <div className="">DONE</div>
                    <input onChange={ toggleDoneFilter } defaultChecked={props.toggleDoneFilter} type="checkbox"/>
                </div>
                <div className={s.filter}>
                    <div className="">TODO NAME</div>
                    <input onChange={ (e) => setNameFilter(e.target.value) } value={props.filters.name} type="text"/>
                </div>
            </div>           
        </section>

    )
}


export default HeaderFilters