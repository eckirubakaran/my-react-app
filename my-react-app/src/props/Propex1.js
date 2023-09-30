//  This Methodes is used to transfer data from parent to child componentes by using props methods .

// This is Parent Folder.

import React from 'react'
import Propex2 from './Propex2'

export default function Propex1() {

let Bio=[{
    Name:"Kiruba",Age:21,City:"Erode"
},
 {
Name:"Eshwer",Age:22,City:"Namakkal"
},{
    Name:"Santhosh",Age:23,City:"Salem"
}]
 
  return (
    <div>
     <Propex2 b={Bio}/>
    
    </div>
  )
}
