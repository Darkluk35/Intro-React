import { useState } from 'react'
import Widget from './components/Widget/Widget.jsx'
import './App.css'

function App () {
  // Estado para saber si el usuario está logueado o no
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // Funciones para simular el inicio y cierre de sesion
  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => setIsLoggedIn(false)
  return (
    <>
      <div className='container'>
        <h1>Mi panel de control</h1>

        {/* --- RENDERIZADO CONDICIONAL CON OP. TERNARIO------- */}

        {
        isLoggedIn
          ? (
            <Widget title='Perfil de Usuario'>
              <p><strong>Usuario:</strong> César Guerra</p>
              <p><strong>Rol:</strong> Administrador</p>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </Widget>
            )
          : (
            <Widget title='Iniciar Sesión'>
              <p>Por favor, inicia sesión para continuar</p>
              <button onClick={handleLogin}>Iniciar sesión</button>
            </Widget>
            )
      }
      </div>
    </>
  )
}

export default App
