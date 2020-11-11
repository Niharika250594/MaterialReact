import React,{useEffect,useState} from 'react';
import axios from 'axios';

function Data(){
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            res=>{
                console.log(res.data);
                setPosts(res.data)
            }
        ).catch(
          err=>console.log(err)
        )
    })
    return(
        <div>
        <ul>
        
      
            
        </ul>
        </div>
    )
}
export default Data