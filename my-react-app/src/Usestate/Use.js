import React, { useState } from 'react'
// export default function Use() {
//     let [name,setName]=useState(1000);
//     function state()
//     {
//         setName("hello welcome")
//     }
//   return (
//     <div>
//         <h1>
//             {name}
//         </h1>
//         <button onClick={state}>Click</button>
//     </div>
//   )
// }
export default function Use(){
    let [count,counting]=useState(0);
   
    function state() {
    counting(count +1)
    }
     function state2() {
    
    if (count<=0) {
        alert("please Select Valid Number")
    }
    else{
         counting(count -1)
    }
    
    }
    function rest() {
        counting (0)
    }

    return(
        <div>
        
            {/* <h2>
               {count}
            </h2> */}
            <button onClick={state} id='btn1'>{count}</button>
             <button onClick={state2} id='btn2'>{count}</button>
             <button onClick={rest} id='btn3'>{count}</button>
           
            
        </div>
        
    )

   }

