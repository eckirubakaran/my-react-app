import React, { useState } from 'react'
import Side1 from './Side1'
// this is creation of usecontext
 export const c=React.createContext([])

export default function Main() {
// this is for usestate function
  const [a,b]=useState("")
  const[y,z]=useState("")
// this is created for map function
  const[s,k]=useState([])

// this is submit function
  function kk (e){
    e.preventDefault();
    k([...s,a,y])
    b("")
    z("")


  }
  return (
    <div>
<c.Provider value={s} >
    <Side1/>
</c.Provider>

<form onSubmit={kk}>
  <input type='text' placeholder='Firstname' value={a} onChange={(e)=>b(e.target.value)}></input>
  <input type='text' placeholder='Lastname' value={y} onChange={(e)=>z(e.target.value)}></input>
  <input type='submit'></input>
</form>
    </div>
  )
}
