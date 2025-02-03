// state 
import {useState} from "react"


function New(){
const [fruit,setFruit]=useState("Apple");
const handelFruit=()=>{
    setFruit("Banana")

}
    return(
        <>
        <h1> fruts...</h1>
        <h1> {fruit}</h1>
        <button onClick={handelFruit}>change fruits</button>
        </>
    )
}

export default New