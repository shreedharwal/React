import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter= 5
  const addValue=()=>{
    console.log("clicked",Math.random());
    
    counter =counter+1
  }


  return (
    <>
      <h1>Basics of React</h1>
      <h2>Counter value: {counter}</h2>
      
      <button
      onClick={addValue}
      >Add Value</button>
      <button>Remove Value</button>
    </>
  )
}

export default App
