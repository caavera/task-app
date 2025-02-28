import { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import './style.css'

function TaskInput() {
    const { addTask } = useContext(TaskContext);

    const [task, setTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!task.trim()) return; // evita agregar tareas vacias
        addTask(task);
        setTask(""); // limpia el input
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Escribe una tarea'
                value={task}
                onChange={(event) => setTask(event.target.value)}
            />
            <button type='submit' className='add-button' > Agregar </button>  
        </form>
    )
}

export default TaskInput;