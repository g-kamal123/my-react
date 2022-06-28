import React from "react";

let Factorial = ()=>{
    var num =5;
    var fact=1;
    for(var i=num;i>1;i--){
        fact *= i;
    }
    return(  
        <>
        <p>factorial of {num} is :</p>
        <p><b>{fact}</b></p>
        </> 
        
    )
}
// Factorial(5);
export default Factorial;