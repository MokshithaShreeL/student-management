import { useState } from 'react'
import './App.css'

function App() {
const [name, setName] = useState('')
const [department, setDepartment] = useState('')
const [students, setStudents] = useState([])

function addStudent(e) {
e.preventDefault()

if (!name.trim() || !department.trim()) {
  alert('Please fill in all fields')
  return
}

setStudents([
  ...students,
  {
    id: Date.now(),
    name: name.trim(),
    department: department.trim()
  }
])

setName('')
setDepartment('')

}

function deleteStudent(id) {
setStudents(students.filter(student => student.id !== id))
}

return (
<div className="container">
<h1>Student Management System</h1>
<p className="subtitle">Manage your student records</p>

  <form onSubmit={addStudent} className="student-form">
    <input
      type="text"
      placeholder="Enter student name"
      value={name}
      onChange={e => setName(e.target.value)}
    />

    <input
      type="text"
      placeholder="Enter department"
      value={department}
      onChange={e => setDepartment(e.target.value)}
    />

    <button type="submit">Add Student</button>
  </form>

  <h2>Student List ({students.length})</h2>

  {students.length === 0 ? (
    <p className="empty">No students added yet.</p>
  ) : (
    <div className="student-list">
      {students.map((student, index) => (
        <div className="student-card" key={student.id}>
          <div>
            <strong>{index + 1}. {student.name}</strong>
            <p>{student.department}</p>
          </div>

          <button
            className="delete-btn"
            onClick={() => deleteStudent(student.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )}
</div>

)
}

export default App