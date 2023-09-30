import React from 'react'
import Map2 from "../map function/Map2"

export default function Map1() {
    let BioData=[{Name:"Kiruba",Age:22,City:"Erode"},
    {Name:"Santhosh",Age:21,City:"Chennai"},
    {Name:"Sathya",Age:23,City:"Jaipur"}]
  return (
    <div>
         <Map2 k={BioData}/>   
        
    </div>
  )
}
