import React,{useContext} from 'react';
import {context} from './ContextCon';


function ComponentA(){
    
    return(
        <div>
        <context.Consumer>
        
        

        {name=>{
           return( <h1>{name}</h1>)
        }}
        
    
        </context.Consumer>
        </div>
    )
}
export default ComponentA