import React, { useState } from 'react'

export default function Picstate() {

   const[image,visibility]=useState(false);

//    function visible() {
//     visibility (true)
//    }
//    function visible1() {
//     visibility (false)
//    }
function handle() {
    visibility(!image)
    
};

if(image){
  return (
    <div>
         {image && <div>  <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png" alt="image1"/> </div>}
        {/* <button onClick={visible} >Show</button>
        <button onClick={visible1}> Hide</button> */}
        <button onClick={handle}>Click</button>
      
    </div>
  )}
  else{
    return <button onClick={handle}>Click</button>
  }
}
