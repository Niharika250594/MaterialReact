import React from 'react';
function Useeffectbtn(props){
    const [show,setShow]=useState(true)
    return(
        <div>
        <button onclick={()=>setShow(!show)}>del button</button>
        </div>
    )
}