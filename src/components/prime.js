import React from "react";

let Prime = () => {
    var arr =[];
    for(var i=2;i<100;i++){
        var prime = chkprime(i);
        if(prime)
        arr.push(i);
    }
    
    return(
        <div><span>prime number between 1 and 100 is :</span><br />{
            arr.map((item) => 
            <span><b>{item},</b></span>
            )
            }</div>
    )
}

var chkprime =(i) => {
    if(i===2)
    return 1;
    if(i===3)
    return 1;
    if(i%2 === 0)
    return 0;
    if(i%3===0)
    return 0;
    for(var k=5;k*k<=i;k+=6){
        if(i%k===0)
        return 0;
        if(i%(k+2)===0)
        return 0;
    }
    return 1;
}
export default Prime;