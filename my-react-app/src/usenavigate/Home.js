import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
 const nave=useNavigate()
    function cli(){
        nave('/Sign In')
    }
    function reduce()
    {
        nave('/reducerHook')
    }
  return (
    <div>
        <h1>Welcome To Our Page</h1>

        <button onClick={cli}>New User Click Here</button>

    <button onClick={reduce}>Usereducer</button>
    </div>
  )
}
