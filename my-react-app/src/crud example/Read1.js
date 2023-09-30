import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import "../crud/Create.css"
import {API1} from './API1'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faPen} from'@fortawesome/free-solid-svg-icons';
import EditIcon from '@mui/icons-material/Edit';


export default function Read1() {
    const nav=useNavigate()

    const[view1,setview1]=useState([]);
    useEffect(()=>{

        // document.title("Reading Operation")
        axios.get("https://65019ca2736d26322f5c02b9.mockapi.io/reactCrud").then((x)=>{
            setview1(x.data)
        })
    },[]);

    function clear(id){
        axios.delete(`${API1}/${id}`).then(()=>{
            axios.get("https://65019ca2736d26322f5c02b9.mockapi.io/reactCrud").then((x)=>{
       setview1(x.data) 
    })})}

    function upd(a,b,c,d,e,f){
        localStorage.setItem("id",a)
        localStorage.setItem("Firstname",b);
        localStorage.setItem("Lastname",c);
        localStorage.setItem("Email",d);
         localStorage.setItem("Password",e);
         localStorage.setItem("ConfirmPassword",f);
        
        
    nav('/update1')
    }

  return (
    <div>
        <h1 id='read'>Read Operation</h1>
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>E-mail</th>
                <th>Pasword</th>
                <th>Confirm Password</th>
                <th>Files</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
            
               { view1.map((y)=>(
                    <tr>
                        <td>{y.Firstname}</td>
                        <td>{y.Lastname}</td>
                        <td>{y.Email}</td>
                        <td>{y.Password}</td>
                        <td>{y.ConfirmPassword}</td>
                        <td>{y.Files}</td>
                        <td> <FontAwesomeIcon onClick={()=>clear(y.id)} icon={faTrash} size="sm"/> </td>
                        <td><FontAwesomeIcon  onClick={()=>upd(y.id,y.Firstname,y.Lastname,y.Email,y.Password,y.ConfirmPassword)} icon={faPen} size="sm" style={{color: "#6bc7f5",}} /></td>
                    </tr>
                ))
            }
        </table>
<button onClick={()=>nav('/create1')}>Create</button>
<EditIcon/>
    </div>
  )
}
