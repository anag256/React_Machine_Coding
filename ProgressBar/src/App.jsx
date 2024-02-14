import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './components/ProgressBar'
import { useEffect } from 'react'

function App() {
  const [value, setValue] = useState(0)
  useEffect(()=>{
    let timer=setInterval(()=>{
      setValue(prevValue=>{
        if(prevValue===100) {

         clearInterval(timer);
         return prevValue;
        }
        else{
         return prevValue+1
        }
      });
    },300)

  },[])
  return (
    <>
      <ProgressBar value={value} onComplete={()=>console.log("completed")}/>
    </>
  )
}

export default App
