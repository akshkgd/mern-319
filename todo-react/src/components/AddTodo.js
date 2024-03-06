import { json, useNavigate } from 'react-router-dom';
import styles from './AddTodo.module.css';
import Todo from './Todo'
import { useRef, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function AddTodo() {
    const [addStatus, setAddStatus] = useState(false);
    const [todos, setTodos] = useState([]);
    const taskInput = useRef(null);
    const navigate = useNavigate();

    
    useEffect(()=>{
        fetch('https://mern-319-default-rtdb.firebaseio.com/task.json').then(
        response => response.json()).then(data=>{
            let tempTodos = []
            for(const key in data){
                let todos = {
                    id: key,
                    ...data[key]
                }
                tempTodos.push(todos)
            }
            setTodos(tempTodos);
            
        })
    }, [])
    
    useEffect(()=>{
        console.log('All Todos: ', todos)
    }, [todos])

    function AddTaskHandler() {
        setAddStatus(true)
        const task = taskInput.current.value;
        const tempTask = {
            title: task,
        }
        // const newTodos = [...todos, task];
        // setTodos(newTodos);

        // save the task to the database
        fetch('https://mern-319-default-rtdb.firebaseio.com/task.json', {
            method: 'post',
            body: JSON.stringify(tempTask)
        }).then(()=>{
            setAddStatus(false);
            navigate('/');
        })


    }

    return (
        <div className={styles.container}>
            
        
            <h1>Manage your tasks <span className={styles.gray}>@ashish</span></h1>
            {/* <p className={todos.length == 0 ? "" : "d-none"}>Start by adding your first task #taskmanager #productivity </p> */}
            
            {/* render the todos */}
            <div className={styles.todoContainer}>
            {
                todos.map((todo)=>{
                    return <Todo title={todo.title} />
                })
            }
            </div>


            <input ref={taskInput} className={styles.input} placeholder='e.g. complete unit assignments' />
            <button className={styles.btn} onClick={AddTaskHandler}>Add New Task <div className={addStatus ? styles.loader : ''}></div> </button>
        </div>
    )
}

export default AddTodo;
