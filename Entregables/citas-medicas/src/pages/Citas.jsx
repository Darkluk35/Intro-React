import { Link } from 'react-router-dom'

function Citas () {
  const citas = [
    { id: 1, paciente: 'Juan Pérez', fecha: '2025-08-20', hora: '10:00 AM' },
    { id: 2, paciente: 'Ana Torres', fecha: '2025-08-21', hora: '2:30 PM' },
    { id: 3, paciente: 'Carlos Díaz', fecha: '2025-08-22', hora: '9:15 AM' },
  ]

  return (
    <div>
      <h2>Lista de Citas</h2>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>
              {cita.paciente} - {cita.fecha} a las {cita.hora}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Citas
