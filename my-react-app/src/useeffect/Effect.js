import React, { useEffect, useState } from 'react'
// this is Usenavigate hook import
import { useNavigate } from 'react-router-dom';

export default function Effect() {
    const [num,setNum]=useState(0);
    // usenavigate hook
    const navi=useNavigate()
    function add()
    {
        setNum(num+1)
    }
    // useeffect function
    useEffect(()=>{
        document.title=`Count is:${num}`;
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    })
    // navigate function
    function forms()
    {
            navi('/formReact')
        
    }
  return (
    <div>
        <h3>
            {num}
            
        </h3>
        <button onClick={add}>++</button> <br></br>
        <button onClick={forms}>Go to react Form</button>
    </div>
  )
}
