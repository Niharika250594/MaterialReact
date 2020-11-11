import React, { useState } from 'react';
import {ButtonGroup} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Box} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'


function BtnGroup (){
    const[time,setTime]=useState('Good MORNING');
    const timehandle=(e)=>{
        if(e.target.value<='12:00'){
            setTime('Good Morning')
        }
        else if(e.target.value<='17.00'){
            setTime('Good Afternoon')
        }
        else{
            setTime('Good Evening')
        }
    }
    return(
        <Box color="text.primary">
        <div>
        <ButtonGroup variant="contained" color="secondary"  aria-label="contained primary button group">
        <Button  >one</Button>
        <Button >two</Button>
        <Button >three</Button>
        </ButtonGroup>
        </div>
        <div>
        <ButtonGroup variant="outlined" color="secondary" aria-label="outlined primary button group">
        <Button  >one</Button>
        <Button >two</Button>
        <Button >three</Button>
        </ButtonGroup>
        </div>
        <form style= {{color:'pink',fontSize:'100PX'}} >
  <TextField style={{width:'150px',fontSize:'50PX',marginTop:'40PX'}}
  
    id="time"
    label={time}
    type="time"
    defaultValue="07:30"
    
    
 onChange={timehandle} />
</form>
        
        </Box>
    )
}
export default BtnGroup