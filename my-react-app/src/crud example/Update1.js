import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {API1} from './API1'

export default function Update1() {
    const [id,setid]=useState(0)
    const [firstname,setfirstname]=useState("")
    const [lastname,setlastname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [confirm,setconfirm]=useState("")
   
    const nav=useNavigate()

    function submit(e){
e.preventDefault();
axios.put(`${API1}/${id}`,{Firstname:firstname,Lastname:lastname,Email:email,Password:password,ConfirmPassword:confirm,})
nav('/create1')

    }
    useEffect(()=>{
        setid(localStorage.getItem("id"))
        setlastname(localStorage.getItem("Lastname"))
        setfirstname(localStorage.getItem("Firstname"))
        setpassword(localStorage.getItem("Password"))
        setconfirm(localStorage.getItem("ConfirmPassword"))
        setemail(localStorage.getItem("Email"))
       
    },[])

  return (
    <div>
        <h1>Update Operation</h1>
        <form class="form" onSubmit={submit}>

    <label>First Name:</label>
    <input type='text' value={firstname}onChange={(e)=>{setfirstname(e.target.value)}} ></input><br/>
    <label>Last Name:</label>
    <input type='text' value={lastname} onChange={(e)=>{setlastname(e.target.value)}}/><br/>
     <label>E-mail:</label>
     <input type='email' value={email} onChange={(e)=>{setemail(e.target.value)}}/><br/>
     <label>Password:</label>
     <input type='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/><br/>
     <label>Confirm-Password:</label>
     <input type='password' value={confirm} onChange={(e)=>{setconfirm(e.target.value)}}/><br/>
    
     <button>Submit</button>

</form>

    </div>
  )
}
