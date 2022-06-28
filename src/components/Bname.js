import React from "react";
// import arr from "./cities";

let Bname = ()=> {
    let barray =[];
    var arr =['Agra','Lucknow','kanpur','varanasi','Baroda','Bhaghalpur','Bhuvneshwar','Buxar','Boston','Birmingham'];
    arr.forEach((item)=>{
        if(item.substring(0,1)==='B')
        barray.push(item);
    })
    return(
        <div>
            <span>cities with name starting with 'B':</span>
            <br />
            {
            barray.map((item)=>
            <span><b>{item}&#160;&#160;</b></span>
            )
            }
        </div>
       
    )
}

export default Bname;