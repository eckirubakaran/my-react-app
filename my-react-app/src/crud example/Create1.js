import React, { useState } from 'react'
import "../crud/Create.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';


export default function Create1() {

    const [firstname,setfirstname]=useState("")
      const [lastname,setlastname]=useState("")
      const [email,setemail]=useState("")
      const [password,setpassword]=useState("")
      const [confirm,setconfirm]=useState("")
      const [file,setfile]=useState("")

      const nav=useNavigate()

      function submit(e) {
        e.preventDefault();
        axios.post("https://65019ca2736d26322f5c02b9.mockapi.io/reactCrud",{Firstname:firstname,Lastname:lastname,Email:email,Password:password,ConfirmPassword:confirm,Files:file})
        setfirstname('')
        setlastname('')
        setemail('')
        setpassword('')
        setconfirm('') 
      setfile('')}
      function Dis(){
        nav('/read1')
      }
  return (
    <div>
       
<form class="form" onSubmit={submit}>
<h1>Creation Page</h1>
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
     <input type='file' value={file} onChange={(e)=>{setfile(e.target.value)}}/><br/>
     <button>Submit</button>

     <button onClick={Dis}>Display</button>

</form>

    </div>
  )
}
