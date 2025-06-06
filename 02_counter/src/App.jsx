import { useState } from 'react'//for Hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0) //to change state in ui in dom
  
  const addValue=()=>{
    // console.log("clicked",counter);
    //counter =counter+1
    if(counter < 20 ){
      setCounter(counter+1)
    }
  }
  const removeValue=()=>{
    if(counter >0 ){
      setCounter(counter-1)
    }
    
  }


  return (
    <>
      <h1>Basics of React</h1>
      <h2>Counter value: {counter}</h2>
      
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <button 
      onClick={removeValue}
      >Remove Value {counter}</button>
    </>
  )
}

export default App
