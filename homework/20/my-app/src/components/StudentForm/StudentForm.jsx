import { useState } from 'react'
import './StudentForm.css'

const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [profession, setProfession] = useState('Frontend')

  const colors = ['red', 'blue', 'green', 'orange', 'purple']

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !age) return

    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    const newStudent = {
      id: Date.now(),
      name: name,
      age: parseInt(age),
      profession: profession,
      color: randomColor
    }

    onAddStudent(newStudent)
    setName('')
    setAge('')
    setProfession('Frontend')
  }

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Enter your age" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <select value={profession} onChange={(e) => setProfession(e.target.value)}>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Cybersecurity">Cybersecurity</option>
      </select>
      <button type="submit">Add Student</button>
    </form>
  )
}

export default StudentForm