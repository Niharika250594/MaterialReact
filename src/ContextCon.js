import React,{Component} from 'react';
import ComponentA from './ComponentA';
export const context=React.createContext();
function ContextCon(){
    return(
        <context.Provider>
        <div>
        <ComponentA/>
        </div>
        </context.Provider>
    )
}
export default ContextCon