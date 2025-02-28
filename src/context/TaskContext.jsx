import { createContext, useState, useEffect } from 'react';

// crear el contexto
export const TaskContext = createContext();

// crear el providar que manejara tasks
export function TaskProvider({ children }) {
    // cargar las tareas del localStorage
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    }, []);

    const [filter, setFilter] = useState('all');


    // guardar las tareas en el localStorage
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    }

    const toggleTask = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            addTask,
            toggleTask,
            deleteTask
        }} >
            {children}
        </TaskContext.Provider>
    )
}