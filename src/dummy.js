import React from 'react';
import Dummy1 from './dummy1';
 export const context1=React.createContext();
function Dummy(){
    return(
        <context1.Provider value={'akshara'}>
        <div>
        <Dummy1/>
        </div>
        </context1.Provider>
    )
}
 export default Dummy
