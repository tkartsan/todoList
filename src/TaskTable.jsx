import "./App.css"
import "./constants"
import { useState } from "react";
import TaskRow from "./TaskRow"

export default function TaskTable({tasks, setTasks}) {
const [filtered, setIsFiltered] = useState(false);
const currentTasks = filtered ? tasks.filter(task => task.completed) : tasks;
console.log({currentTasks})

return(
    <>
    <div className="filter-tasks">
    <label>
    <input type='checkbox' onChange={() => setIsFiltered(!filtered)}/>
    Show only done tasks
    </label>
    </div>
    { currentTasks.map(task => <TaskRow task={task} setTasks={setTasks}/>)
    }
    </>
)
}