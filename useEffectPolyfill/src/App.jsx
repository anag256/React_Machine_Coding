import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCustomEffect from './hooks/useCustomEffect'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  useCustomEffect(()=>{
    console.log("effect triggered:",count1);
    return ()=>console.log("cleanup")
  },[])
  const incrementCounter=()=>{
    setCount(count+1);
  }
  const decrementCounter=()=>{
    setCount(count-1);
  }
  return (
    <>
    <div className='counter'>
        <h1>Counter:{count}</h1>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
    </div>
     </>
  )
}

export default App
