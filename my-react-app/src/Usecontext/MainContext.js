import React, { useState } from 'react'
import File1 from './File1'
// this is first step to create the usecontext
export const a=React.createContext([])

export default function MainContext() {
    const [name,setName]=useState('');
    
    const[view,setView]=useState([])

    function ok(event)
    {
        event.preventDefault();
        setView([...view,name])
        alert("data added")
        setName('')
    }
  return (
    <div>
{/* this is for to provide the data to other files */}
        <a.Provider value={view}>
            <File1/>
        </a.Provider>
        <form onSubmit={ok}>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type='submit'/>
        </form>
    </div>
  )
}
