import React, { useState, useEffect } from 'react'

export default function TaskDisplay() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(storedTasks)
  }, [])

  return (
    <div>
      <h1>Task List</h1>
      <a href='/home'>Home</a>
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        <table border={1}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}