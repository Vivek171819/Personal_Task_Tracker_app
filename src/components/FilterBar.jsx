import React from 'react'

export default function FilterBar({ filter, setFilter, category, setCategory, search, setSearch }) {
  return (
    <div className="filterbar">
      <input placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>All</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Study</option>
        <option>Other</option>
      </select>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option>All</option>
        <option>Active</option>
        <option>Completed</option>
      </select>
    </div>
  )
}
