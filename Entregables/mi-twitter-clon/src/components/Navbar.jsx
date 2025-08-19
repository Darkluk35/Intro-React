import { Link } from 'react-router-dom'

const Navbar = ({ user, logout }) => {
  return (
    <nav className='navbar'>
      <Link to='/'>Inicio</Link>
      {user
        ? (
          <>
            <Link to='/profile'>Perfil</Link>
            <button onClick={logout}>Cerrar sesión</button>
          </>
          )
        : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Registro</Link>
          </>
          )}
    </nav>
  )
}

export default Navbar
