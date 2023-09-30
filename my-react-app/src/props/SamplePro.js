import React from 'react'

export default function SamplePro(props) {
    let {a}=props;
  return (
    <div>
        <h1>
            {a.firstName} ,{a.lastName}
        </h1>
    </div>
  )
}
