
import { useState } from "react"
function Toggel(){

    const [count,setCount]=useState(0);
    return(
        <>
        <h1> mutltiple condition </h1>
        
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}> Counter </button>
        {
            
            count==0?<h1>condition 0</h1>
            :count==1?<h1>condition 1</h1>
            :count==2?<h1>condition 2</h1>
            :count==3?<h1>condition 3</h1>
            :count==4?<h1>condition 4</h1>
            :<h1>other</h1>
        }


        </>
    )
}
export default Toggel