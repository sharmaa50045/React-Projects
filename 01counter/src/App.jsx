import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addvalue = () => {
    console.log("clicked", counter);
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const removevalue = () => {
    console.log("clicked", counter)
    setCounter(counter - 1)
  }

  return (
    <>
      <h1 className='font-bold text-2xl'>React with Counter</h1>
      <h2 className='text-2xl mt-3 font-bold'>Counter Value:{counter}</h2>
      <button className='mt-4' onClick={addvalue}>Add Value {counter}</button>
      <button className='m-4' onClick={removevalue} >Remove Value{counter}</button>
    </>
  )
}

export default App
