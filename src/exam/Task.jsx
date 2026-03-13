import React, { useState } from 'react'
import './task.css'

export default function Task() {

  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'Low',
    status: 'Todo'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setTask((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || []

    const newTask = {
      id: Date.now(),
      ...task
    }

    localStorage.setItem('tasks', JSON.stringify([...existingTasks, newTask]))

    setTask({
      title: '',
      description: '',
      priority: 'Low',
      status: 'Todo'
    })

    alert('Task added successfully!')
  }

  return (
    <div className="page-container">
      <h2>Add Task</h2>

      <div className="card">
        <form onSubmit={handleSubmit}>

          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />

          <label>Description:</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          />

          <label>Priority:</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <label>Status:</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>

          <button type="submit">Save task</button>

        </form>

        <p>
          <a href="/task-display">View task list</a>
        </p>
      </div>
    </div>
  )
}