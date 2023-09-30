import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Effect from './useeffect/Effect'
import ReactFroms from './ReactFroms'
import Home from './usenavigate/Home'
import Foms from './usenavigate/Foms'
import Reducer from './useReducer/Reducer'
import Create from './crud/Create'
import Create1 from './crud example/Create1'
import Read1 from './crud example/Read1'
import Update1 from './crud example/Update1'
import Edit from './crud/edit'
import Userefhook from './Useref/Userefhook'
import UseHook from './useMemo/UseMemoHook'


export default function App1() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                {/* <Route element={<Effect></Effect>} path='/'/>
                <Route element={<ReactFroms></ReactFroms>} path='/formReact'/> */}


                 {/* this is for navigation function */}

            {/* <Route element={<Home></Home>} path='/'/> */}
            {/* next page element */}
            {/* <Route element={<Foms></Foms>} path='/Sign In'/> */}
            {/* reducer hook */}
            {/* <Route element={<Reducer></Reducer>} path='/reducerHook'/> */}

            <Route path='/create' element={<Create></Create>}/>
            <Route path='/edit' element={<Edit></Edit>}/>

             <Route path='/create1' element={<Create1></Create1>}/>
                 <Route path='/read1' element={<Read1></Read1>}/>
                 <Route path='/update1' element={<Update1></Update1>}/>
                 <Route  path='/useref' element={<Userefhook></Userefhook>}/>
                 <Route path='/usememo' element={<UseHook></UseHook>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
