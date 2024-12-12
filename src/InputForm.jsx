import "./App.css"

export default function InputForm({setTodo, setTasks, tasks, todo}) {

    const onClickHandler = () => {
        const newTask = {id: tasks.length + 1, title: todo, completed: false};
        setTasks((prev) => [...prev, newTask])
    }
    
    return(
        <div className="todo-input-form">
         <div>Input your todo:</div>
         <input type="text" onChange={event => {setTodo(event.target.value)}}></input>
         <button 
         onClick={onClickHandler}
         >Submit</button>
        </div>
    )
}