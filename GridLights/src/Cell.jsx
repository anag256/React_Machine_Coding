import React from 'react'
import { useState } from 'react'

function Cell({onPress,cellIndex,filled,isDisabled}) {

  return (
    <button className={`cell ${filled?'activated':''}`} onClick={(e)=>onPress(cellIndex)} disabled={filled} aria-label={`label ${cellIndex}`}></button>
  )
}

export default Cell