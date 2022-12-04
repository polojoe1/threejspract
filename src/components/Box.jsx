import React from 'react'

const Box = (props) => {
    

  return (
    <mesh >
        <boxGeometry attach={'geometry'}/>
        <meshLambertMaterial color={'yellow'} attach={'material'} />
    </mesh>
  )
}

export default Box