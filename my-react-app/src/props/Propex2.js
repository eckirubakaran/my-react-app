// This is a Child Folder 

import React from 'react'
import Propex3 from './Propex3'

export default function Propex2(props) {
  const {b}=props;

  return (
   
    <div>
      <Propex3 c={b}/>
    </div>
  )
}
