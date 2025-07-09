import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App saludo= "Hola que tal" title = "G41A esto es un prop" />
    <App saludo= "Hi" title = "this another component with diferent info" />
  </StrictMode>,
)
