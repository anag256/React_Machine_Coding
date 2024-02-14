import { useRef } from "react"

const useCustomEffect=(cb,deps)=>{
    const isFirstRender=useRef(true);
    const prevDeps=useRef([]);
    //cleanup only runs when dependencies change. unmounting logic we can not handle
      //initial render
    if(isFirstRender.current){
        isFirstRender.current=false;
       const cleanup= cb();
    //    return ()=>{
        // if(cleanup && typeof(cleanup) ==='function'){
        //     cleanup();
        //    }
    //    }

        // return;
    }



    // when deps change or no deps arry
    const depsChanged=deps ? (JSON.stringify(deps)!==JSON.stringify(prevDeps.current)) : true;

    if(depsChanged){
        const cleanup=cb();
        // if(cleanup && typeof(cleanup) ==='function' && deps){
        //     cleanup();
        //    }
    }
    //cleanup

    prevDeps.current=deps || [];
}
export default useCustomEffect;