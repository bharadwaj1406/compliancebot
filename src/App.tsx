import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AltiusChat } from './Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AltiusChat />
    </>
  )
}

export default App
