import { useEffect } from "react";
import { useRef } from "react"

const areEqual=(oldDeps,newDeps)=>{
    if(!oldDeps) return false;
    if(oldDeps.length!==newDeps.length) return false;
    for(let i=0;i<newDeps.length;i++){
        if(oldDeps[i]!==newDeps[i]) return false;
    }
    return true;
}
 export const useCustomMemo=(cb,deps)=>{
    //variable or state -> cached value
    //compare changes in dependencies
    // whenever unmounting component,cleanup logic
    //return memoise value
    const memoisedRef=useRef(null);
    if(!memoisedRef.current ||  !areEqual(memoisedRef.current.deps,deps)){
        memoisedRef.current={
            value:cb(),
            deps
        }
    }

    useEffect(()=>{
        return ()=> memoisedRef.current=null;
    },[])

    return memoisedRef.current.value
}
