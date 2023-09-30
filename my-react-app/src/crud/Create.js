import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { API } from './API';


export default function Create() {
    const [name,setName]=useState("");
     const [name1,setName1]=useState("");
    const [view,setView]=useState([]);
    const navi=useNavigate();
    function ok(event){
        event.preventDefault();
        axios.post("https://65019ca2736d26322f5c02b9.mockapi.io/Example",{userName:name,lastName:name1})
        alert("Data saved !!!");
        setName('')
        setName1('')
    }

    useEffect(()=>{
        axios.get('https://65019ca2736d26322f5c02b9.mockapi.io/Example').then((s)=>{
            setView(s.data)
        })
    },[]);

    function del(id)
    {
        axios.delete(`${API}/${id}`).then(()=>{
            axios.get('https://65019ca2736d26322f5c02b9.mockapi.io/Example').then((s)=>{
                setView(s.data)
            })
        alert("data deleted")

        })
    }
    function edit(a,b,c)
    {
        localStorage.setItem("id",a);
        localStorage.setItem("userName",b);
        localStorage.setItem('lastName',c);
        navi('/edit')
    }
  return (
    <div>
        <h1>
            React Crud
        </h1>
        <form onSubmit={ok}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
             <input type="text" value={name1} onChange={(e)=>setName1(e.target.value)}/>
            <button type='submit'>Save</button>
        </form>
        {/* <ul>
            <h2></h2>
            {view.map((a)=>(
                <li>
                    {a.userName}, {a.lastName}

                </li>
              
            ))}
        </ul> */}
        <table>
            <tr>
                <th>First NAme</th>
                 <th>Last NAme</th>
                 <td></td>
            </tr>
            {view.map((a)=>(
            <tr>


    <td>{a.userName}</td>
    <td>{a.lastName}</td>
    <td>
        <button onClick={()=>del(a.id)}>Delete</button>
        <br/>
        <button onClick={()=>edit(a.id,a.userName,a.lastName)}>EDit</button>
    </td>
     </tr>
))}
            
           

        </table>
    </div>
  )
}
