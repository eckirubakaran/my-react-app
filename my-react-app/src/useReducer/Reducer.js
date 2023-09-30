import React, { useReducer } from 'react'

function reduceCount(state,action){
    switch (action.type) {
        case "+":
            return {count:state.count+1}
        case "-":
            return {count:state.count-1}
        case "reset":
            return {count:0}
    
        default:
            throw Error ('invalid')       
    }
}
export default function Reducer() {
    const [state,dispatch]=useReducer(reduceCount,{count:0})
  return (
    <div>
        <h1>UseReducers</h1>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:"+"})}>+</button>
        <button onClick={()=>dispatch({type:"-"})}>-</button>
        <button onClick={()=>dispatch({type:"reset"})}>0</button>

    </div>
  )
}
