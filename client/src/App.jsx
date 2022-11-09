import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AllRoutes } from './allRoutes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AllRoutes/>
    </>

  )
}

export default App
