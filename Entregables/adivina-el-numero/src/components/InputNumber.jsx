function InputNumber ({ userInput, setUserInput, handleGuess }) {
  return (
    <div>
      <input
        type='number'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder='Ingresa tu número'
      />
      <button onClick={() => handleGuess(userInput)}>Adivinar</button>
    </div>
  )
}

export default InputNumber
