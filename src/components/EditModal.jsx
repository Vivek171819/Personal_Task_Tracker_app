import React, { useState, useEffect } from "react";

export default function EditModal({ open, task, onClose, onSave }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
    category: "Work",
  });

  useEffect(() => {
    if (open && task) setForm({ ...task });
  }, [open, task]);

  if (!open) return null;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) return;
    onSave(form);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Edit Task</h3>
        <form onSubmit={handleSubmit}>
          <input name="title" value={form.title} onChange={handleChange} />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />
          <input
            name="dueDate"
            type="date"
            value={form.dueDate || ""}
            onChange={handleChange}
          />
          <select name="priority" value={form.priority} onChange={handleChange}>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select name="category" value={form.category} onChange={handleChange}>
            <option>Work</option>
            <option>Personal</option>
            <option>Study</option>
            <option>Other</option>
          </select>
          <div className="actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
