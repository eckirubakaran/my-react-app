import React, { useState } from 'react'
import  './Reactform.css'

export default function Reactform1() {

    const[card,Setcard]=useState("XXXX XXXX XXXX")
    const[year,Setyear]=useState("")
    const[eyear,Seteyear]=useState("")
    const [cardname,Setcardname]=useState("")
  

    function Cardnum(e){
        Setcard(e.target.value)
    }
    
    function date(e){
        Setyear(e.target.value)
    }
    
    function edate(e){
        Seteyear(e.target.value)
    }
     
   
  return (
    <div>

<div class='container'>
    <div class="card">
        <div class="header">
        <p>Canara Bank</p>
<p>Credit Card</p>
        </div>
        <div class="gold">
        <div id="chip"></div>
        <div id="signal">.))))</div> 
        </div>
        <div>
           <div id="cardnum"> CARD NUMBER:</div>
            <div id='num'>{card}</div> 
        </div>
        <div id="year">
            <div class="dateyear">FROM:"{year} "</div>
            <div class="dateyear">TO:" {eyear}"</div>
        </div>
      <div>
        <div id="namee">CARDHOLDER NAME:<br></br>{cardname}</div>
       
      </div>

    </div>

</div>
        <div>
            <form>
                <input type='text' placeholder='Enter Your Card Number' value={card}  onChange={Cardnum}></input><br/>
                <input type='date' placeholder='Starting Year' value={year} onChange={date}/><br/>
                <input type='date' placeholder='Expiring Year' value={eyear} onChange={edate}/><br/>
                <input type="text" placeholder='Enter Your Name' value={cardname} onChange={(e)=>{Setcardname(e.target.value)}} ></input>
              
            </form>
        </div>
    </div>
  )
}
