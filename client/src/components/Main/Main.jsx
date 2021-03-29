import s from './Main.module.css'

const Main = (props) => {
    return(
        <div className={s.main}>
            <h1>Hey , {props.name}</h1>
            <p>add some todo's in "+ADD TODO" and click on "TODO'S" in header to see them</p>
            <p>to edit your todo's click on the pen near the todo name</p>
            <p>to delete your todo's click on the cross near the todo name</p>
            <p>to edit your profile click on profile in header</p>
            <h2>BE PRODUCTIVE</h2>
        </div>
    )
}

export default Main