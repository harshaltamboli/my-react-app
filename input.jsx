// import { useState } from "react"
// import { Checkbox } from "./Checkbox"


// function Input(){

//     let[val,setVal]=useState(" harshal Tamboli")
//     return(
//         <>
//         <h1> Get Input Field Value </h1>
//         <input type="text" value={val}  onChange={(event)=>setVal(event.target.value)} placeholder="Enter User Name"/>
//         <h1> {val}</h1>

//         <button onClick={()=>setVal(" ")}>clin value</button>

        
//         </>
//     )
// }

// export default Input



import { useState } from "react"
import Checkbox from "./Checkbox"
import { Radio } from "./radio"



function Input(){


    return(
        <>
       <Checkbox/>
       <Radio/>
        
        </>
    )
}

export default Input