// This is CSS IMPORATION 
 import './App.css'

// this is Bootstrap IMPORTATION
import 'bootstrap/dist/css/bootstrap.min.css'
// Upto 17th Lines COMPONENTS IMPORATATION
import Example1 from './components/Example1'
import Button1 from './components/Button1'
import Button2 from './components/Button2'
import Button3 from './components/Button3'
import Button4 from './components/Button4'
import Button5 from './components/Button5'
import Button6 from './components/Button6'
import Button7 from './components/Button7'
import Button8 from './components/Button8'
import Button9 from './components/Button9'
import Button10 from './components/Button10'
// This is Variables Examples Importation
import Variable from './Dynamic/Variable'
import Variablewx from './Dynamic/Variablewx'
// This is Props Importation
import Pro from './props/Pro'
import Propex1 from './props/Propex1'
// this is State Importation
import Use from './Usestate/Use'
import Picstate from './Usestate/Picstate' 
// this is Calculator Importation
import Calculator from './Calculator/Calculator'
import ReactFroms from './ReactFroms'
import Map from './map function/Map'
import Map1 from './map function/Map1'
import Reactform1 from './Reactform1'



export default function App()
{
  return(
    <div>
 {/*UseState  */}
      <Use/>
      <hr></hr>
      <Picstate/>
      <hr></hr>

{/* This is Props Values */}

     {/* <Pro/> */}
     {/* <Propex1/> */}

{/* This is Variables Values */}

   {/* <Variable/>
    <Variablewx/> */}

{/* This is Components Values */}

      {/* <Example1/>
      <Button1/>  <Button2/>
      <Button3/> <Button4/>
      <Button5/>  <Button6/>  <Button7/>
      <Button8/>  <Button9/> <Button10/> */}
      
      {/* Calculator */}
      <Calculator/>
<hr></hr>
      {/* Onchange in Usestate  */}
      {/* <ReactFroms/> */}
      <Reactform1/>
    

<hr></hr>
{/* MAP Function */}
      <Map/>
      <Map1/>

      </div>
    
     
    
  )
}