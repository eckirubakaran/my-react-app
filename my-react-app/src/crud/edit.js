import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API } from './API';
import { useNavigate } from 'react-router-dom';

export default function Edit() {
    const [id,setId]=useState(0)
    const [name,setName]=useState("");
    const [name1,setName1]=useState("");
    const navi=useNavigate()
    function ok(e)
    {
        e.preventDefault();
        axios.put(`${API}/${id}`,{userName:name,lastName:name1});
        alert("data updated!!!");
        navi('/create')
    }
    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("userName"));
        setName1(localStorage.getItem("lastName"))
    },[])
  return (
    <div>
        <h1>Update Details</h1>
        <form onSubmit={ok}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
             <input type="text" value={name1} onChange={(e)=>setName1(e.target.value)}/>
            <button type='submit'>Save</button>
        </form>
    </div>
  )
}
