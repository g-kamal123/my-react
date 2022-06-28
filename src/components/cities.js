import React from "react";

let City = ()=>{
    var arr =['Agra','Lucknow','kanpur','varanasi','Baroda','Bhaghalpur','Bhuvneshwar','Buxar','Boston','Birmingham'];
    return(
        <ul><h3>Cities....</h3>{
            arr.map((item)=>
            <li><b>{item}</b></li>
            )
        }</ul>
    )
}
export default City;
