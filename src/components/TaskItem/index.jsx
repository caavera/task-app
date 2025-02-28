import './style.css'

function TaskItem({ task, onToggle, onDelete}){
    return (
        <li className={task.completed ? 'completed' : ''}>
            <div>
                <input
                    type='checkbox'
                    checked = { task.completed }
                    onChange = {() => onToggle(task.id)}
                />
                <span>{task.text}</span>
            </div>
            <button className='delete-button' onClick={() => onDelete(task.id)}>X</button>
        </li>
    )
}

export default TaskItem;