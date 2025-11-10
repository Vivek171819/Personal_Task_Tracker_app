import React from 'react'

export default function TaskCard({ task, onToggle, onEdit, onDelete }) {
  return (
    <div className={`taskcard ${task.completed ? 'done' : ''}`}>
      <div className="left">
        <input type="checkbox" checked={task.completed} onChange={onToggle} />
        <div>
          <h3>{task.title}</h3>
          {task.description && <p>{task.description}</p>}
          <small>
            {task.dueDate ? `Due: ${task.dueDate}` : 'No due date'} • {task.category} • {task.priority}
          </small>
        </div>
      </div>
      <div className="right">
        <button onClick={onEdit}>✏️</button>
        <button onClick={onDelete}>🗑️</button>
      </div>
    </div>
  )
}
