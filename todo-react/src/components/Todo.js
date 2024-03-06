import styles from './Todo.module.css'
function Todo(props){
    return(
        <div className={styles.todoFlex}>
            <input type="checkbox" className={styles.taskDone} />
            <p >{props.title} </p>
        </div>
    )
}

export default Todo;