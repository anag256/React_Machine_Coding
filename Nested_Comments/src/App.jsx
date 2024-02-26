import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {data} from './data'
import Comment from './Components/Comment'
function App() {
  const [commentData, setCommentData] = useState(data)
  console.log(data);
  return (
    <>
      <Comment commentData={commentData}/>
    </>
  )
}

export default App
