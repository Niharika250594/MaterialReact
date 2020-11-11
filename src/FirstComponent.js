import React from 'react';
import {useState,useRef} from 'react';
import Button from '@material-ui/core/Button';
function FirstComponent(){
          const [text,setText]=useState('To See Output');
          const [show,setShow]=useState(false)
          const iptRef=useRef();

        const  handleshow=()=>{
            if(iptRef.current.innerText==='To See Output'){
             setShow(true);
             setText('To Hide Output')
            }
            else {
                setShow(false);
             setText('To See Output')
            }
          }
          const btn=<Button variant="contained" color="primary" >Contained Button</Button>
    return(
        <div style={{marginTop:'50px'}}>
        <div><button ref={iptRef} onClick={handleshow}>{text}</button></div>
        <div style={{border:'1px solid black'}}>
        <p>
        The below code has to be written for getting contained button<br/>
        <br/>
         &lt;Button variant&#61;&quot;contained&quot; color&#61;&quot;primary&quot;&gt;Contained Button&lt;Button&gt;
        </p>
        <div>{show?btn:null}</div>
        </div>
        </div>
    )
}
export default FirstComponent