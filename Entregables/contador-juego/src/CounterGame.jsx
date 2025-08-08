import { useState, useReducer, useRef, useCallback, useEffect } from 'react'

// Estado inicial
const initialState = { count: 0, history: [] }

// Reducer que maneja las acciones del contador
function reducer (state, action) {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + action.payload,
        history: [...state.history, `+${action.payload} (Nuevo valor: ${state.count + action.payload})`]
      }
    case 'decrement':
      return {
        count: state.count - 1,
        history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`]
      }
    case 'reset':
      return initialState
    case 'undo': {
      const lastHistory = state.history[state.history.length - 1]

      // Extraer el número utilizando una expresión regular
      const newCountMatch = lastHistory.match(/([+-]?\d+)/)
      const newCount = newCountMatch ? parseInt(newCountMatch[0]) : state.count

      return {
        count: newCount,
        history: state.history.slice(0, -1) // Eliminar la última acción del historial
      }
    }
    default:
      return state
  }
}

function CounterGame () {
  const [state, dispatch] = useReducer(reducer, initialState)
  const incrementBtnRef = useRef(null)
  const [inputValue, setInputValue] = useState('')

  // Fijar el foco en el botón de incremento al renderizar
  useEffect(() => {
    incrementBtnRef.current.focus()
  }, [])

  // Guardar el historial en localStorage
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(state.history))
  }, [state.history])

  // Recuperar historial desde localStorage al cargar la aplicación
  useEffect(() => {
    const storedHistory = localStorage.getItem('history')
    if (storedHistory) {
      // Restaurar el historial desde localStorage
      dispatch({ type: 'reset' }) // Resetear el estado antes de cargar el historial
      const history = JSON.parse(storedHistory)
      history.forEach((entry) => {
        const lastChange = entry.split(' ')[0] === '+' ? 'increment' : 'decrement'
        dispatch({ type: lastChange, payload: parseInt(entry.split(' ')[1]) })
      })
    }
  }, [])

  const handleIncrement = useCallback(() => {
    const value = parseInt(inputValue) || 1  // Si no es un número válido, se suma 1
    dispatch({ type: 'increment', payload: value })
    setInputValue('')  // Limpiar el input después de la acción
  }, [inputValue])

  const handleDecrement = useCallback(() => {
    dispatch({ type: 'decrement' })
  }, [])

  const handleReset = useCallback(() => {
    dispatch({ type: 'reset' })
  }, [])

  const handleUndo = useCallback(() => {
    dispatch({ type: 'undo' })
  }, [])

  return (
    <div>
      <h2>Contador: {state.count}</h2>
      <input
        type='number'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Ingresa un número'
      />
      <button ref={incrementBtnRef} onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleUndo}>Deshacer</button>

      <h3>Historial de cambios:</h3>
      <ul>
        {state.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  )
}

export default CounterGame
