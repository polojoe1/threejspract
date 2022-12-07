import React from 'react'
import { useRef } from 'react'
import { useFrame } from 'react-three-fiber';
import { degToRad } from 'three/src/math/MathUtils';


const Cube = (props) => {
    let trigger = false
    const cube = useRef();
    const cube2 = useRef()
    const cube3 = useRef()
    const cube4 = useRef()
    let frame = 0
    
    useFrame(()=>{
        if(trigger){
            console.log(cube.current.position)
            let dummy = {...cube.current.position}
            //console.log(dummy)
            if(frame===8){
                cube.current.position.x = cube2.current.position.x
                cube.current.position.y = cube2.current.position.y
                cube.current.position.z = cube2.current.position.z

                cube2.current.position.x = cube3.current.position.x
                cube2.current.position.y = cube3.current.position.y
                cube2.current.position.z = cube3.current.position.z

                cube3.current.position.x = cube4.current.position.x
                cube3.current.position.y = cube4.current.position.y
                cube3.current.position.z = cube4.current.position.z

                cube4.current.position.x = dummy.x
                cube4.current.position.y = dummy.y
                cube4.current.position.z = dummy.z
            }
            // cube.current.position.x = cube2.current.position.x
            // cube.current.position.y = cube2.current.position.y
            // cube.current.position.z = cube2.current.position.z
            
            cube.current.rotation.z-= degToRad(10)
            //1.569  

            //cube.current.rotation.y+=0.75

            // cube2.current.position.x = cube3.current.position.x
            // cube2.current.position.y = cube3.current.position.y
            // cube2.current.position.z = cube3.current.position.z
            cube2.current.rotation.z-= degToRad(10)

            // cube3.current.position.x = cube4.current.position.x
            // cube3.current.position.y = cube4.current.position.y
            // cube3.current.position.z = cube4.current.position.z


            // cube4.current.position.x = dummy.x
            // cube4.current.position.y = dummy.y
            // cube4.current.position.z = dummy.z
            cube3.current.rotation.z-= degToRad(10)
            cube4.current.rotation.z-= degToRad(10)
            frame++
            if(frame===9){
            trigger= false
            frame = 0;
            }
            }
        }
    )
  return (
    <>
    
    <mesh ref={cube}  onClick={()=>{trigger=true}} position={[3,3,3]}>
        
    <boxGeometry  args={[1,1,1]}/>
    <meshStandardMaterial color={'red'} attach={'material-0'}/>
    <meshStandardMaterial color={'blue'} attach={'material-1'}/>
    <meshStandardMaterial color={'green'} attach={'material-2'}/>
    <meshStandardMaterial color={'white'} attach={'material-3'}/>
    <meshStandardMaterial color={'orange'} attach={'material-4'}/>
    <meshStandardMaterial color={'yellow'} attach={'material-5'}/>
    
    </mesh>
    <mesh ref={cube2}  onClick={()=>{trigger=true}} position={[3,2,3]}>
        
    <boxGeometry  args={[1,1,1]}/>
    
    <meshStandardMaterial color={'green'} attach={'material-0'}/>
    <meshStandardMaterial color={'white'} attach={'material-1'}/>
    <meshStandardMaterial color={'red'} attach={'material-2'}/>
    <meshStandardMaterial color={'blue'} attach={'material-3'}/>
    <meshStandardMaterial color={'yellow'} attach={'material-4'}/>
    <meshStandardMaterial color={'orange'} attach={'material-5'}/>
    </mesh>

    <mesh ref={cube3}  onClick={()=>{trigger=true}} position={[2,2,3]}>
        
    <boxGeometry  args={[1,1,1]}/>
    <meshStandardMaterial color={'white'} attach={'material-0'}/>
    <meshStandardMaterial color={'green'} attach={'material-1'}/>
    <meshStandardMaterial color={'blue'} attach={'material-2'}/>
    <meshStandardMaterial color={'red'} attach={'material-3'}/>
    <meshStandardMaterial color={'orange'} attach={'material-4'}/>
    <meshStandardMaterial color={'yellow'} attach={'material-5'}/>

    </mesh>
    <mesh ref={cube4}  onClick={()=>{trigger=true}} position={[2,3,3]}>
        
    <boxGeometry  args={[1,1,1]}/>
    <meshStandardMaterial color={'yellow'} attach={'material'}/>
  
    </mesh>
    </>
  )
}

export default Cube