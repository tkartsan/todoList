import "./App.css"
import "./constants"
import TaskRow from "./TaskRow"

export default function TaskTable({tasks, setTasks}) {

return(
    <>
    {tasks.map(task => <TaskRow task={task} setTasks={setTasks}/>)}
    </>
)
}