import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'
import { useCustomMemo } from './hooks/useCustomMemo'

function App() {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(100)
  const [counter3, setCounter3] = useState(2)
  const incrementCounter=()=>{
    setCounter1((prevcount)=>prevcount+1);

  }
  const decrementCounter=()=>{
    setCounter2((prevcount)=>prevcount-1)
  }

  const sqart=()=>{
    console.log("expensive")
   return counter1*counter1;
  }
  const cubeRoot=()=>{
    console.log("expensive2")
    return counter1*counter1*counter1;
  }
  const memoisedValue=useCustomMemo(sqart,[counter1])
  const memoisedValue2=useCustomMemo(cubeRoot,[counter1])
  return (
    <>
    <div>{counter1}</div>
    <div>{memoisedValue}</div>
    <div>{memoisedValue2}</div>
      <button className='counter1' onClick={incrementCounter}>
       Increment
      </button>

      <div>{counter2}</div>
      <button className='counter2' onClick={decrementCounter}>
      decrement
      </button>


      <div>{counter3}</div>
      <button className='counterTwice' onClick={()=>setCounter3((prev)=>prev*2)}>
       Double
      </button>

    </>
  )
}

export default App
