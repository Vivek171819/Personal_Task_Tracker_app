import React, { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [category, setCategory] = useState('Work')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      dueDate: dueDate || null,
      priority,
      category,
      completed: false
    }

    onAdd(newTask) // 👈 immediately updates state in App
    // Clear form
    setTitle('')
    setDescription('')
    setDueDate('')
    setPriority('Medium')
    setCategory('Work')
  }

  return (
    <form className="taskform" onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>Work</option>
        <option>Personal</option>
        <option>Study</option>
        <option>Other</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  )
}
