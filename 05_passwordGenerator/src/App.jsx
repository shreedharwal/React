import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState('');

  const passwordGenerator= useCallback( () => {
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*()-_=+{}~'

  }, [length, numAllowed, charAllowed, setpassword])

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
