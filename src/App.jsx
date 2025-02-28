import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskItem from './components/TaskItem'
import TaskFilter from './components/TaskFilter'
import './styles/global.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, {id: Date.now(), text: task, completed: false}]);
  }

  const toggleTask = (taskId) => {
    setTasks(tasks.map( task =>
      task.id === taskId ? {...task, completed: !task.completed } : task
    ));
  }

  const filteredTasks = tasks.filter( task => {
    if(filter === 'completed') return task.completed;
    if(filter === 'pending') return !task.completed;
    return true; // all
  })

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  return (
    <>
      <div className='container'>
        <h1>📝 Lista de tareas</h1>
        <TaskInput onAddTask={addTask} />
        <TaskFilter filter={filter} setFilter={setFilter} />
        <ul>
          {filteredTasks.map( (task) => (
            <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
