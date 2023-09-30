import React from 'react'

export default function Map() {
    let ar=[1,'siva','erode',"mern stack"]
  return (
    <div>
        <ul>
            <li>Array ar</li>
            <ol>
                {ar.map((e)=>(
                    <li>
                        {e}
                    </li>
                ))}
            </ol>
        </ul>
    </div>
  )
}
