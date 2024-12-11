import "./App.css"

export default function InputForm({setTodo}) {
    
    return(
        <>
        <div className="todo-input-form">
        <div>Input your todo:</div>
        <input type="text" onChange={event => {setTodo(event.target.value)}}></input>
        <button>Submit</button>
        </div>
        </>
    )
}