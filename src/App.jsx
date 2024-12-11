import './App.css'
import { useState } from 'react';
import InputForm from "./InputForm"
import TaskTable from "./TaskTable"

function App() {
    const [todo, setTodo] = useState();

    return(
        <div className="App">
        <InputForm setTodo={setTodo}/>
        <TaskTable />
        <div>{todo}</div>
        </div>
    )
}

export default App
