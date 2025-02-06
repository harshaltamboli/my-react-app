import { useState } from "react"


export function Radio(){
    const [gender,setGender]= useState("");

    const[city,setCity]=useState("India");
    return(
        <>
        <h1>Handle radio Dropdoun </h1>

        <h4> Selected Gender </h4>
        <input type="radio"onChange={(event)=>setGender(event.target.value)} name="Gender"value={"male"} checked={gender==='male'}id="male"/> 
        <label htmlFor="male">Male</label> 

        <input type="radio" onChange={(event)=>setGender(event.target.value)}  value={"female"} checked={gender==='female'}  name="Female" id="female"/> 
        <label htmlFor="female"> Female</label>

        <h2> Selected Gender: {gender}</h2>
        <br/>

        <h1> Seleced Cities:</h1>

        <select onChange={(event)=>setCity(event.target.value)} defaultValue={"India"}>
        
        <option value="india">India</option>
        <option value="America">America</option>
        <option value="Delhi">Delhi</option>
        <option value="China">China</option>
        <option value="Dubai">Dubai</option>
    
        </select>

        <h2> Selected city:{city}</h2>
        </>
    )
}