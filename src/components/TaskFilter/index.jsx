import './style.css'

function TaskFilter({ filter, setFilter }) {
    return (
        <div className="filter-container">
            <button
                className={filter === "all" ? "active" : ""}
                onClick={() => setFilter("all")}
            >
                Todas
            </button>
            <button
                className={filter === "completed" ? "active" : ""}
                onClick={() => setFilter("completed")}
            >
                Completadas
            </button>
            <button
                className={filter === "pending" ? "active" : ""}
                onClick={() => setFilter("pending")}
            >
                Pendientes
            </button>
        </div>
    )
}

export default TaskFilter;