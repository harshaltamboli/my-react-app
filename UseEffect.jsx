import { useEffect, useState } from "react";

export function UseEffects() {

    const [counter, setCounter] = useState(0);
    const[data,setData]=useState(0);

    
    useEffect(()=>{
        callonce();
     },[data])


    function callonce() {
        console.log("Callonce Function called ");

    }



    
    return (

        <>

            <h1> i am a effect </h1>
            <button onClick={() => setCounter(counter+1)}>Counter {counter}</button>
            <button onClick={() => setData(data+1)}>Data {data}</button>
        </>

    )
}