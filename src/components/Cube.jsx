import React from 'react'
import { useRef } from 'react'
import { useFrame } from 'react-three-fiber';


const Cube = (props) => {
    let trigger = false
    const cube = useRef();
    const cube2 = useRef()
    const cube3 = useRef()
    const cube4 = useRef()
    
    
    useFrame(()=>{
        if(trigger){
            console.log(cube.current.position)
            let dummy = {...cube.current.position}
            console.log(dummy)
            while(cube.current.position.x !== cube2.current.position.x){
                if(cube.current.position.x < cube2.current.position.x){
                    cube.current.position.x +=0.5
                }
                else{
                    cube.current.position.x-=0.5
                }
            }
            //cube.current.position.x = cube2.current.position.x
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

            trigger= false
            
            }
        }
    )
  return (
    <>
    <mesh ref={cube}  onClick={()=>{trigger=true}} position={[3,3,3]}>
        
    <boxGeometry  args={[1,1,1]}/>
    <meshStandardMaterial color={'red'} attach={'material'}/>
    
    </mesh>
    <mesh ref={cube2}  onClick={()=>{trigger=true}} position={[3,2,3]}>
        
    <boxGeometry  args={[1,1,1]}/>
    
    <meshStandardMaterial color={'green'} attach={'material'}/>
    </mesh>

    <mesh ref={cube3}  onClick={()=>{trigger=true}} position={[2,2,3]}>
        
    <boxGeometry  args={[1,1,1]}/>
    <meshStandardMaterial color={'white'} attach={'material'}/>

    </mesh>
    <mesh ref={cube4}  onClick={()=>{trigger=true}} position={[2,3,3]}>
        
    <boxGeometry  args={[1,1,1]}/>
    <meshStandardMaterial color={'yellow'} attach={'material'}/>
  
    </mesh>
    </>
  )
}

export default Cube