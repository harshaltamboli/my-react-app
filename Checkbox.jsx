import { useState } from "react";

function Checkbox(){
    const [skills,setSkills]=useState([]);
    const handlerSkill=(event)=>{
        console.log(event.target.value,event.target.checked);

        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills([...skills.filter((iteam)=>iteam!=event.target.value)])
        }
    }
    return(
        <>
        <h3> selected your skills </h3>
        <input onChange={handlerSkill}type="Checkbox"id="php" value="php"/>
        <label htmlFor="php">php</label>
        <br/>

        <input onChange={handlerSkill} type="Checkbox"id="js" value="js"/>
        <label htmlFor="js">js</label>
        <br/>

        <input onChange={handlerSkill} type="Checkbox"id="nod" value="node"/>
        <label htmlFor="node">node</label>
        <br/>

        <input onChange={handlerSkill}  type="Checkbox"id="react" value="react"/>
        <label htmlFor="react">php</label>
        <br/>

        <h1>{skills}</h1>

        </>
    )
}
export default Checkbox;