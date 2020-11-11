import React,{useContext} from 'react';

import {context1} from './dummy'
function Dummy2(){
    const name=useContext(context1)
    return(
        <h4>hello {name}[context]</h4>
    )
}
 export default Dummy2