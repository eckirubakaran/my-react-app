import React, { useState } from 'react'
import '../Calculator/Calculator.css'

export default function Calculator() {

    const [value,setvalue]=useState("");
// this is for number 7 and we should pass the arugments in brackets
function enter(a){
    setvalue(value + a.target.value)
}
// this is for all clear
function empty(){
    setvalue("")
}
// ṭhis is for deleting one number
function del(){
    setvalue(value.slice(0,-1))
}
// this is for providing answer
function equal(){
    setvalue(eval(value))
}

  return (
    <div class="main">
        <div class="calculator">
            <form>
                <div>
                    <input type='text' value={value}/>
                </div>
                <div>
                    <input type="button" value='AC' onClick={empty}/>
                    <input type="button" value='DE' onClick={del}/>
                    <input type="button" value='.' onClick={e => setvalue(value +e.target.value)} />
                    <input type="button" value='/' onClick={e => setvalue(value +e.target.value)}/>
                
                </div>
                <div>
                    <input type="button" value='7' onClick={enter} />
                    <input type="button" value='8' onClick={enter}/>
                    <input type="button" value='9'onClick={e => setvalue(value +e.target.value)}/>
                    <input type="button" value='*'onClick={e => setvalue(value +e.target.value)}/>
                
                </div>
                <div>
                    <input type="button" value='4'onClick={e => setvalue(value +e.target.value)}/>
                    <input type="button" value='5'onClick={e => setvalue(value +e.target.value)}/>
                    <input type="button" value='6'onClick={e => setvalue(value +e.target.value)}/>
                    <input type="button" value='-'onClick={e => setvalue(value +e.target.value)}/>
                
                </div>
                <div>
                    <input type="button" value='1'onClick={e => setvalue(value +e.target.value)}/>
                    <input type="button" value='2'onClick={e => setvalue(value +e.target.value)}/>
                    <input type="button" value='3'onClick={e => setvalue(value +e.target.value)}/>
                    <input type="button" value='+'onClick={e => setvalue(value +e.target.value)}/>
                
                </div>
                <div>
                    <input type="button" value='00'onClick={e => setvalue(value +e.target.value)}/>
                    <input type="button" value='0'onClick={e => setvalue(value +e.target.value)}/>
                    <input type="button" value='=' id="equal" onClick={equal}/>
                </div>
            </form>
        </div>
    </div>
  )
}
