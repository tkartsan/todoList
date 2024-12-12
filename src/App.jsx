import './App.css'
import { useState } from 'react';
import InputForm from "./InputForm"
import TaskTable from "./TaskTable"
import { initialTasks } from './constants';

function App() {
    const [todo, setTodo] = useState();
    const [tasks, setTasks] = useState(initialTasks);

    return(
        <div className="App">
        <InputForm setTodo={setTodo} setTasks={setTasks} tasks={tasks} todo={todo}/>
        <TaskTable tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}

export default App
