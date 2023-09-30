import React, { useContext } from 'react'
import {a} from './MainContext'

export default function File2() {
    const b=useContext(a)
  return (
    <div>
        <h1>
            {b.map((q)=>(
                <li>
                    {q}
                </li>
            ))}
        </h1>
    </div>
  )
}
