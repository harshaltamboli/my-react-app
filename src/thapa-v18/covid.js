import React, { useEffect } from 'react';
const Covid =()=>{
    const getCovidData = async ()=>{
        try{
            // const  res= await fetch('https://api.covid19india.org/data.json');
            const  res= await fetch('https://restcountries.com/v3.1/all');

          
           const actualData = await res.json();
           console.log(actualData);
           
            
        }catch(err){
            console.log(err);
            
        }
         
    }
    useEffect(()=>{
        getCovidData();
    },[]);
    return(

        <>
        <div>
            <h1>  🔴 Live </h1>
            <h2>Covid Corona Virus Tracker </h2>
        </div>
        </>
    )
}

export default Covid