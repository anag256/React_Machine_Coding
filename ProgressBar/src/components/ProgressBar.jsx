import React from 'react'
import './ProgressBar.css'
import { useState } from 'react'
import { useEffect } from 'react';
function ProgressBar({value=0,onComplete}) {
    const [percent,setPercent]=useState(value);
    useEffect(()=>{
        setPercent(Math.min(100,Math.max(0,value)));
        if(value>=100){
            onComplete();
        }
    },[value])
  return (
    <div className='progress' role='progressbar' aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent.toFixed()}>
        <span>{percent}%</span>
        <div
        // style={{width:`${percent}%`}}
        style={{transform:`scaleX(${percent/100})`,transformOrigin:'left'}}
        ></div>
    </div>
  )
}

export default ProgressBar