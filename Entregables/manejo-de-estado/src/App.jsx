import { useState } from 'react'
import './App.css'

function App() {

  const [nuevoProducto, setNuevoProducto] = useState("");
    const [productos, setProductos] = useState([]);

  // Función para agregar un nuevo producto a la listano da video
  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

  // Función para eliminar un producto de la lista
  const eliminarProducto = (index) => {
    const newTasks = productos.filter((_, i) => i !== index)
    setProductos(newTasks)
    // Completar la lógica para eliminar un producto
  };
 
  return (
    <>
      <div>
      <h2>Lista de Compras</h2>
      <input
        type="text"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
      />
      <button onClick={agregarProducto}>Agregar</button>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto}
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
