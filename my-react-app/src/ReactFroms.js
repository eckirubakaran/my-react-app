import React, { useState } from 'react'


export default function ReactFroms() {
    const [name,setName]=useState('')
    const[last,setLast]=useState('')
    const[pass,setPass]=useState('')
    
    function Dispaly(e){
      setName(e.target.value)
    
    }
    function Last(a){
      setLast(a.target.value)
    }
    function Password(a){
      setPass(a.target.value)
    }
 
  return (
    
    // <div>
    //     <h1>React Forms</h1>
    //    <h3>Hello,{name}</h3> 
    //     <form>
        
    //         <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
    //         <input type='submit'/>
    //     </form>
    // </div>
    <div>
        Hello,First Name:{name}<br></br>
      Last Name:{last}<br></br>
      Password:{pass}
     
        <form>
            <input type='text' placeholder='First Name'   value={name}  onChange={Dispaly}/>
            <input type='text' placeholder='Last Name' value={last} onChange={Last}/>
            <input type='password' placeholder='Password' value={pass} onChange={Password}/>
            <input type='submit'/>
        </form>
    </div>
  )
}
