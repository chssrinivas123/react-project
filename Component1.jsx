import React from 'react'
const details={
    name:"ramu",
    place:"guntur",
    pno:9089674321
}

const Component1 = () => {
  return (
    <div class='comp1'><h1>Component1</h1>
    <p>name: {details.name}</p>
    <p>place: {details.place}</p>
    <p>phno: {details.pno}</p>
    </div>
    
  )
}

export default Component1