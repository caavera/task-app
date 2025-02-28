import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskItem from '../TaskItem';

function TaskList({ filter }) {
    const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true; // all
    })

    return (
        <ul>
            {filteredTasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                />
            ))}
        </ul>
    )
}

export default TaskList;