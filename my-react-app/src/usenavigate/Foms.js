import { Button } from 'bootstrap'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Foms() {
const nav=useNavigate()

    function click(e){
        e.preventDefault()
console.log("Submitted");

    }
    function home(){
        nav('/')
    }
  return (
    <div>
        <form>
            Name:<input type="text"></input>
            Email:<input type='email'></input>
            <button onClick={click}>Sign In</button>
            <button onClick={home}>Go To Home</button>
            
        </form>
    </div>
  )
}
