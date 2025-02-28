import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskItem from './components/TaskItem'
import './styles/global.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, {id: Date.now(), text: task, completed: false}]);
  }

  const toggleTask = (taskId) => {
    setTasks(tasks.map( task =>
      task.id === taskId ? {...task, completed: !task.completed } : task
    ));
  }

  return (
    <>
      <div>
        <h1>Lista de tareas</h1>
        <TaskInput onAddTask={addTask} />
        <ul>
          {tasks.map( (task) => (
            <TaskItem key={task.id} task={task} onToggle={toggleTask} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
