import './style.css'

function TaskItem({ task, onToggle}){
    return (
        <li className={task.completed ? 'completed' : ''}>
            <input
                type='checkbox'
                checked = { task.completed }
                onChange = {() => onToggle(task.id)}
            />
            <span>{task.text}</span>
        </li>
    )
}

export default TaskItem;