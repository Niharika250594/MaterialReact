import React,{useState} from 'react';

function Form(){
    
        const [name,setMsg]=useState('');
        const ipthandler=(e)=>{
            const target=e.target;
              const name=target.name
            
            setMsg(name.value)
        }
    
    return(
        <div style={{textAlign:'left',margin:'80px',color:'blue',width:'500px'}}>Simple Form
        <div style={{display:'felx',flexDirection:'row',margin:'20px',justifyContent:'space-between'}} >
        <label >Enter Your FirstName</label>
        <input type="text" value={name} onChange={ipthandler} name="firstname"/>
        </div>
        <div style={{display:'felx',flexDirection:'row',margin:'20px',justifyContent:'space-between'}}>
        <label>Enter Your SecondName</label>
        <input type="text" value={name} onChange={ipthandler} name="secondname"/>
        </div>
        <div style={{display:'felx',flexDirection:'row',margin:'20px',justifyContent:'space-between'}}>
        <label>Enter Your MobileNumber</label>
        <input type="text" value={name} onChange={ipthandler} name="number"/>
        </div>
        </div>
    )
}
export default Form