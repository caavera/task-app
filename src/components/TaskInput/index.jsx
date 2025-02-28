import { useState } from 'react';
import './style.css'

function TaskInput({ onAddTask }) {
    const [task, setTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!task.trim()) return; // evita agregar tareas vacias
        onAddTask(task);
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