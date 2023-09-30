import React from 'react'
import SamplePro from './SamplePro'

export default function Pro() {
    let name={firstName:'Siva',lastName:'Anantham'}
  return (
    <div>
        <SamplePro a={name}/>
    </div>
  )
}
