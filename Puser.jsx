//  export function Puser(Props){    // props Declaration
//     console.log(Props);
    
//     return(
//         <>
//         <h1>user component  </h1>
//          <h2> {Props.name}</h2>   {/*calling props window  */}
//          <h2>{Props.age}</h2>
        
        
//         </>
//     )
// }



// *** secound format *** props calling and declaration

// export function Puser({age,names,email}){    // props pass secound way 
  
    
//     return(
//         <>
//          <h2> {names}</h2>   {/*calling props without .object */}
//          <h2>{age}</h2>
//          <h2>{email}</h2>
        
        
// *** object pass prpos ****

export function Puser({user}){    // props pass object way 
  
    
    return(
        <>
         <hr/>
         <h2> {user.names}</h2>   {/*calling props object */}
         <h2>{user.age}</h2>
         <h2>{user.email}</h2>
        
        </>
    )
}