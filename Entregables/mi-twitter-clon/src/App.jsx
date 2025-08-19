import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import './App.css'

function App () {
  const [user, setUser] = useState(null)

  // Recuperar usuario al cargar la app
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  // Simular login
  const login = (username, password) => {
    const userData = { username }
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  // Simular registro
  const register = (username, password) => {
    // ⚠️ Aquí deberías conectar con un backend en un futuro
    const newUser = { username }
    localStorage.setItem('registeredUser', JSON.stringify(newUser))
    login(username, password)
  }

  // Cerrar sesión
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }
  return (
    <Router>
      <Navbar user={user} logout={logout} />
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route
          path='/profile'
          element={user ? <Profile user={user} /> : <Navigate to='/login' />}
        />
        <Route path='/login' element={<Login onLogin={login} />} />
        <Route path='/register' element={<Register onRegister={register} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  )
}

export default App
