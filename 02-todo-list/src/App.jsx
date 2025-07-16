/* 1. Importar el hook useState */
import { useState } from 'react'
import './App.css'

function App () {
  /* 2. Creo el estado donde guardare la informacion del input */
  const [inputValue, setInputValue] = useState('')
  /* 3.Crear una funcion que se ejecutara cuando haga clic en anadir */
  const handleAdd = () => { console.log('Anadir tarea:', inputValue) }
  return (
    <>
      <h1>Todo List</h1>
      {/* 4. Implementar el evento onChange para guardar la información del estado, apenas esta sea tecleada */}
      <input
        type='text'
        placeholder='Escribe una tarea'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={handleAdd}>Añadir</button>
      <ul>
        <li>item 1<button>Eliminar</button></li>
        <li>item 2<button>Eliminar</button></li>
        <li>item 3<button>Eliminar</button></li>
      </ul>
    </>
  )
}

export default App
