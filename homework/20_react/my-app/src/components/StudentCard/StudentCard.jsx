import './StudentCard.css'

const StudentCard = ({ name, age, profession, color, onDelete }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default StudentCard