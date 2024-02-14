import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cell from './Cell'
import { useEffect } from 'react'

function App() {
  const config=[[1,1,1],
                [1,0,1],
                [1,1,1]]

                const [order,setOrder]=useState([]);
                const handleCellClick=(index)=>{
                 let newOrder=[...order,index];
                 setOrder(newOrder);
                }

                const deactivateCells=()=>{
                  const timer=setInterval(()=>{
                     setOrder((prevOrder)=>{
                      let newOrder=prevOrder.slice(0)
                      newOrder.pop();
                      if(newOrder.length==0){
                        clearInterval(timer);
                      }
                      return newOrder;
                     })

                  },300);
                 //  if(order.length==0) clearInterval(timer);
                 }
                useEffect(()=>{
                  if(order.length===config.flat().length){
                    deactivateCells();
                    console.log("deactivating")
                   }
                   console.log('order',order)
                },[order])


  return (
    <div className='container'>
    {
      config.flat().map((ele,index)=><Cell  onPress={handleCellClick} key={index} cellIndex={index} filled={order.includes(index)} />
      )
    }

    </div>
  )
}

export default App
