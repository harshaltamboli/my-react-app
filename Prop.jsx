import { useState } from "react"
import { Puser } from "./Puser"
import { Parray } from "./Parray"

function Prop(){
    // let Username="harshal Tamboli";
    // let age=21;
    // let email="harshal249@gmail.com";



    //object

    let Userobj={
        names:"Harshal Tamboli",
        age:"21",
        email:"harshaltamboli429@gmail.com"
    }
        let Userobj2={
            names:"Hitesh Tamboli",
            age:"21",
            email:"hiteshtamboli421@gmail.com"

        }
            // Arry in props

            let Collage=['imrd','iit','nit','mit']
    
return(
    <>
    

    <Parray Collage={ Collage[0]}/>
    
    <Parray Collage={ Collage[1]}/>
    
    <Parray Collage={ Collage[2]}/>
    
    <Parray Collage={ Collage[3]}/>


    {/* <h1> propes method  </h1>

    {/* *** propes Declartion 1st way**** */}
    {/* <Puser name= " Harshal Tamboli"  age={21} email= "harshaltamboli429@gmail.com"/> */}
    
    {/*** props declaration 2 way*** */}
{/* <Puser name={Username} age={age} email ={email} /> */} 


   {/* ***object in props *** */}

        <Puser user ={Userobj} />
        <Puser user ={Userobj2} />
    
        
        
    
    </>
)
}
export default Prop