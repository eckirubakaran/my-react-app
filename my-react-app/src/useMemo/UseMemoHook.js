import React,{useState,useMemo} from 'react'

export default function UseHook() {

    let [num,setnum]=useState(0)

    function calu()
    {
        return num*123456789;
    }

   let val=useMemo(()=>calu(),[num])

  return (
    <div>

        {num}
        <button onClick={()=>setnum(num+1)}>Multiply</button>
       {val}
        
    </div>
  )
}
