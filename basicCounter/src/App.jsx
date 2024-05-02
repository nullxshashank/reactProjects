import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0)
  function addValue() {
    setCounter(counter+1)
  }
  function  reduceValue() {
    if(counter>=0){
      setCounter(counter-1)
    }
  }
  return (
    <>
    <h2>Just A Simple Counter</h2>
    <h3>Counter Value: {counter}</h3>
    <button onClick={addValue}>Add Value</button>
    <button onClick={reduceValue}>Reduce Value</button>
    </>
  )
}

export default App
