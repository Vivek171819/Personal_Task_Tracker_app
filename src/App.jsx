import React, { useState, useEffect, useMemo } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import TaskForm from './components/TaskForm'
import TaskCard from './components/TaskCard'
import EditModal from './components/EditModal'
import ProgressBar from './components/ProgressBar'
import FilterBar from './components/FilterBar'
import ThemeToggle from './components/ThemeToggle'
import ConfirmDialog from './components/ConfirmDialog'
import Toast from './components/Toast'

export default function App() {
  const [tasks, setTasks] = useLocalStorage('tasks_v3', [])
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const [editing, setEditing] = useState(null)
  const [confirm, setConfirm] = useState({ open: false, id: null })
  const [toast, setToast] = useState(null)
  const [filter, setFilter] = useState('All')
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const showToast = msg => {
    setToast(msg)
    setTimeout(() => setToast(null), 2000)
  }

  function addTask(task) {
    setTasks(prev => [task, ...prev])
    showToast('✅ Task added')
  }

  function toggleTask(id) {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  function saveEdit(updated) {
    setTasks(prev => prev.map(t => (t.id === updated.id ? updated : t)))
    setEditing(null)
    showToast('✏️ Task updated')
  }

  function requestDelete(id) {
    setConfirm({ open: true, id })
  }
  function confirmDelete() {
    setTasks(prev => prev.filter(t => t.id !== confirm.id))
    setConfirm({ open: false, id: null })
    showToast('🗑️ Task deleted')
  }
  function cancelDelete() {
    setConfirm({ open: false, id: null })
  }

  const filtered = useMemo(() => {
    let v = [...tasks]
    if (filter === 'Active') v = v.filter(t => !t.completed)
    if (filter === 'Completed') v = v.filter(t => t.completed)
    if (category !== 'All') v = v.filter(t => t.category === category)
    if (search.trim()) {
      const s = search.toLowerCase()
      v = v.filter(t => (t.title + t.description).toLowerCase().includes(s))
    }
    return v
  }, [tasks, filter, category, search])

  const progress = useMemo(() => {
  if (tasks.length === 0) return 0;
  const completed = tasks.filter(t => t.completed).length;
  return Math.round((completed / tasks.length) * 100);
}, [tasks]);

  return (
    <div className="app">
      <header className="header">
        <h1>Personal Task Tracker</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>

      <FilterBar
        filter={filter}
        setFilter={setFilter}
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />

      <main className="main">
        <aside>
          <TaskForm onAdd={addTask} />
          <ProgressBar percent={progress} />
        </aside>

        <section>
          {filtered.length === 0 ? (
            <p className="empty">No tasks found</p>
          ) : (
            filtered.map(t => (
              <TaskCard
                key={t.id}
                task={t}
                onToggle={() => toggleTask(t.id)}
                onEdit={() => setEditing(t)}
                onDelete={() => requestDelete(t.id)}
              />
            ))
          )}
        </section>
      </main>

      <EditModal open={!!editing} task={editing} onClose={() => setEditing(null)} onSave={saveEdit} />
      <ConfirmDialog open={confirm.open} onConfirm={confirmDelete} onCancel={cancelDelete} />
      <Toast message={toast} />
    </div>
  )
}
