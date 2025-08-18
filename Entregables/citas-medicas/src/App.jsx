import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Citas from './pages/Citas'
import CitaDetalle from './pages/CitaDetalle'
import NotFound from './pages/NotFound'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <nav className='navbar'>
        <Link to='/'>Inicio</Link>
        <Link to='/citas'>Ver Citas</Link>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/citas' element={<Citas />} />
          <Route path='/cita/:id' element={<CitaDetalle />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
