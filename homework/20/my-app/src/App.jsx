import { useState } from 'react'
import StudentForm from './components/StudentForm/StudentForm'
import StudentList from './components/StudentList/StudentList'

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Arman', age: 20, profession: 'Frontend', color: 'blue' }
  ])

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent])
  }

  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter(student => student.id !== id)
    setStudents(updatedStudents)
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Student Manager</h1>
      <StudentForm onAddStudent={handleAddStudent} />
      <StudentList students={students} onDeleteStudent={handleDeleteStudent} />
    </div>
  )
}

export default App