import { useState } from 'react'
import { TaskProvider } from './context/TaskContext'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'
import './styles/global.css'

function App() {
  const [filter, setFilter] = useState('all');

  return (
    <TaskProvider>
      <div className='container'>
        <h1>📝 Lista de tareas</h1>
        <TaskInput />
        <TaskFilter filter={filter} setFilter={setFilter} />
        <TaskList filter={filter} />
      </div>
    </TaskProvider>
  )
}

export default App
