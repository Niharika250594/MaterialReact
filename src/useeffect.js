import { Button } from '@material-ui/core';
import React,{useEffect, useRef, useState} from 'react';
function OneComponent(){
    const[num,setNum]=useState(0);
    const [show,setShow]=useState(true);
    const ipref=useRef();
    useEffect(()=>{
       console.log('useeffect uses');
       ipref.current.addEventListener('click',
       showing)
       /*return(
           ipref.current.removeEventListener('click',showing)
       )*/

    },[num]

    )
    const showing=()=>{
        console.log('showing content')
    }
    const handler=()=>{
        setNum(preState=>preState+1)
    }
   
    return(
        <div>
        <button onClick={handler} >click</button>
        <button ref={ipref}>its about useeffect</button>
        
        <h1>{num}</h1>
        </div>
    )
}
export default OneComponent;
