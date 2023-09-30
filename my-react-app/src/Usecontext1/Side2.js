import React ,{ useContext }from 'react'
import {c} from "./Main"

export default function Side2() {
    const x=useContext(c);
  return (
    <div>
      {/* <h3>{
        x.map((q)=>(
          <li>{q}</li>
        
        ))}
        </h3>
         */}

         <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          {x.map((q)=>(
            <tr>
              <td>{q}</td>
            </tr>
          ))}
        
         </table>
    </div>
  )
}
