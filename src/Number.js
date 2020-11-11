import React, { useState } from 'react';
function Number(){
    const [number,setNumber]=useState([]);
    const handler=()=>{
        setNumber([...number,{id:number.length,value:Math.floor(Math.random()*10)+1}])
    }
    return(

        <div>
        <button onClick={handler}>add number</button>
        <ul>
        {number.map(el=><li kye={el.id}>{`${el.value} is the element with ${el.id} index`} </li>)}
        </ul>
        </div>

    )
}
export default Number