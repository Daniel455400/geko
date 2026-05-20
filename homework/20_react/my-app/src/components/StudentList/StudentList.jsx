import StudentCard from '../StudentCard/StudentCard'
import './StudentList.css'

const StudentList = ({ students, onDeleteStudent }) => {
  return (
    <div className="list-container">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          age={student.age}
          profession={student.profession}
          color={student.color}
          onDelete={() => onDeleteStudent(student.id)}
        />
      ))}
    </div>
  )
}

export default StudentList