import React, { useState, useEffect, useMemo } from 'react'
import Planeta from './components/Planeta'
import './App.css'

function App () {
  const [distancia, setDistancia] = useState(0)
  const [combustible, setCombustible] = useState(100)
  const [estadoNave, setEstadoNave] = useState('En órbita')
  const [planetasVisitados, setPlanetasVisitados] = useState([])

  // Efecto al montar el componente
  useEffect(() => {
    console.log('¡El panel está listo!') // Montaje

    const intervalo = setInterval(() => {
      setDistancia(prevDistancia => prevDistancia + 10) // Aumentar distancia
      setCombustible(prevCombustible => prevCombustible - 1) // Reducir combustible
    }, 1000)

    return () => {
      clearInterval(intervalo) // Limpiar el intervalo al desmontar
      console.log('El panel se ha apagado.') // Desmontaje
    }
  }, [])

  // Efecto al cambiar combustible
  useEffect(() => {
    console.log('¡Combustible actualizado!') // Actualización
  }, [combustible])

  // Cálculo de mensaje de estado usando useMemo
  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`
  }, [estadoNave])

  // Función para aterrizar
  const aterrizar = () => {
    setEstadoNave('Aterrizando')
    setPlanetasVisitados([...planetasVisitados, `Planeta ${planetasVisitados.length + 1}`])
  }
  return (
    <>
      <div>
        <h1>Panel de Control</h1>
        <p>Distancia: {distancia} km</p>
        <p>Combustible: {combustible}%</p>
        <p>{mensajeEstado}</p>
        <button onClick={aterrizar}>Aterrizar</button>

        {/* Renderiza los planetas visitados */}
        {planetasVisitados.map((planeta, index) => (
          <Planeta key={index} nombre={planeta} />
        ))}
      </div>
    </>
  )
}

export default App
