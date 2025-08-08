import { useState } from 'react'
import InputNumber from './InputNumber.jsx'
import Message from './Message'
import RestartButton from './RestartButton'

function Game () {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber())
  const [userInput, setUserInput] = useState('')
  const [message, setMessage] = useState('')
  const [attempts, setAttempts] = useState(0)

  // Generar número aleatorio entre 1 y 100
  function generateRandomNumber () {
    return Math.floor(Math.random() * 100) + 1
  }

  // Función para manejar la verificación del número ingresado
  const handleGuess = (input) => {
    const guess = parseInt(input)
    setAttempts(attempts + 1)
    if (guess === targetNumber) {
      setMessage('¡Correcto!')
    } else if (guess < targetNumber) {
      setMessage('El número es mayor')
    } else {
      setMessage('El número es menor')
    }
  }

  // Función para reiniciar el juego
  const restartGame = () => {
    setTargetNumber(generateRandomNumber())
    setUserInput('')
    setMessage('')
    setAttempts(0)
  }

  return (
    <div>
      <h1>Adivina el número</h1>
      <p>Intenta adivinar un número entre 1 y 100</p>
      <InputNumber
        userInput={userInput}
        setUserInput={setUserInput}
        handleGuess={handleGuess}
      />
      <Message message={message} />
      <p>Intentos: {attempts}</p>
      <RestartButton restartGame={restartGame} />
    </div>
  )
}

export default Game
