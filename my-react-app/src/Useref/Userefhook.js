import React,{useState,useRef,useEffect} from 'react'

export default function Userefhook() {
    const [name,setname]=useState("")

    const count=useRef(0);
    const num=useRef()

   useEffect(()=>{
    count.current=count.current+1;   
    num.current=name;
   })
  return (
    <div>

        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
        <br />

        Current string:{name} <br />
        Previous {num.current}
<br />        {count.current}

    </div>
  )
}
