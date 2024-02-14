import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DynamicContentLoader from './DynamicContentLoader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <DynamicContentLoader/>

       </div>
    </>
  )
}

export default App
