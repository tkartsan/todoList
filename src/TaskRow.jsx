export default function TaskRow({task, setTasks}) {

    const checkToggle = () => {
        setTasks(prev => prev.map(prevTask => {
            return prevTask.id === task.id ? {...prevTask, completed: !prevTask.completed} : prevTask
            
        }))
    }


    return (
        <div key={task.id}>
            <>
            {task.title} 
            <input type='checkbox' checked={task.completed} onChange={checkToggle}/>
            </>
        </div>
    )
}