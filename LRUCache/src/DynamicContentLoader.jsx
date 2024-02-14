import React from 'react'
import { useState } from 'react';
import useLRUCache from './hooks/useLRUCache';

function DynamicContentLoader() {
    const [content,setContent]=useState([]);
       const {get,put}= useLRUCache(3);
    const loadContent=async(id)=>{
        await new Promise((resolve)=>setTimeout(resolve,2000));
        let loadedContent={
            id,
            data:`tab ${id} data`
        }
        put(id,loadedContent)
        setContent((prev)=>[...prev,loadedContent])
    }

    const handleCLick=(id)=>{
        const cachedContent=get(id);
        if(cachedContent){
            console.log(`content ${id} loaded from cache`)
            setContent((prev)=>[...prev,cachedContent])
        }
        else{
            console.log(`content ${id} loaded from api`)
            loadContent(id)
        }

    }
  return (
    <div>
       <h3>Dynamic content loading with LRU cache</h3>
       <button onClick={()=>handleCLick(1)}>Tab 1</button>
       <button onClick={()=>handleCLick(2)}>Tab 2</button>
       <button onClick={()=>handleCLick(3)}>Tab 3</button>
       <button onClick={()=>handleCLick(4)}>Tab 4</button>
       <button onClick={()=>handleCLick(5)}>Tab 5</button>
       <button onClick={()=>handleCLick(6)}>Tab 6</button>

       <div>
            <h3>Loaded content</h3>
            {content?.map(item=><li key={item.id+Math.random()}>{item.data}</li>)}
       </div>
    </div>
  )
}

export default DynamicContentLoader