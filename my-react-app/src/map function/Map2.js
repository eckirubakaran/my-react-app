import React from 'react'

export default function Map2(props) {
    let {k}=props;
  return (
    <div>
      <ul>
        Bio Data
        <ol>
            {k.map((c)=>(
            <li>
              The Name is {c.Name},
              The Age is  { c.Age}
            </li>
            ))}
        </ol>
      </ul>
    </div>
  )
}
