import { useState } from 'react'//for Hook
import './App.css'

function App() {
  const [counter,setCounter] = useState(0) //to change state in ui in dom
  
  const addValue=()=>{
    // console.log("clicked",counter);
    //counter =counter+1
    if(counter < 20 ){
      // setCounter(counter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1) 
      //for interview question
      //this will process the items in batch
      //This is necessary because state updates in React are asynchronous and may be batched.
      //Using the current value of the counter directly like setCounter(counter + 1) 
      // four times would not increase the counter by 4 — it may end up adding just 1 due to batching.
      //First call: counter → counter + 1
      // Second call: result of previous → +1 again
      // And so on...

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
