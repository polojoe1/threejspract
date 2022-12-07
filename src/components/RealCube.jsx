import React from 'react'
import { TextureLoader } from 'three';
import { Suspense } from 'react';
import White from '../textures/white.png'
import Blue from '../textures/blue-square-2-md.png'
import Green from '../textures/green-square-md.png'
import Orange from '../textures/orange-square-md.png'
import Red from '../textures/red.png'
import Yellow from '../textures/yellow-square-2-md.png'
import { useRef } from 'react';
import { useLoader, useFrame  } from 'react-three-fiber'
import { degToRad } from 'three/src/math/MathUtils';
import {Text} from '@react-three/drei'

const RealCube = (props) => {
    const texture_1 = useLoader(TextureLoader,White)
  const texture_2 = useLoader(TextureLoader,Blue)
  const texture_3 = useLoader(TextureLoader, Green)
  const texture_4 = useLoader(TextureLoader, Orange)
  const texture_5 = useLoader(TextureLoader, Red)
  const texture_6 = useLoader(TextureLoader, Yellow)
  let triggerBackRight = false
  let triggerFrontRight = false
    const cube = useRef();
    const cube2 = useRef()
    const cube3 = useRef()
    const cube4 = useRef()
    const cube5 = useRef();
    const cube6 = useRef()
    const cube7 = useRef()
    const cube8 = useRef()
    let frame = 0
    useFrame(()=>{
        if(triggerBackRight){
            //console.log(cube.current.position)
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
            triggerBackRight= false
            frame = 0;
            }
            }
            if(triggerFrontRight){
                //console.log(cube.current.position)
                let dummy = {...cube5.current.position}
                //console.log(dummy)
                if(frame===8){
                    cube5.current.position.x = cube6.current.position.x
                    cube5.current.position.y = cube6.current.position.y
                    cube5.current.position.z = cube6.current.position.z
    
                    cube6.current.position.x = cube7.current.position.x
                    cube6.current.position.y = cube7.current.position.y
                    cube6.current.position.z = cube7.current.position.z
    
                    cube7.current.position.x = cube8.current.position.x
                    cube7.current.position.y = cube8.current.position.y
                    cube7.current.position.z = cube8.current.position.z
    
                    cube8.current.position.x = dummy.x
                    cube8.current.position.y = dummy.y
                    cube8.current.position.z = dummy.z
                }
                // cube.current.position.x = cube2.current.position.x
                // cube.current.position.y = cube2.current.position.y
                // cube.current.position.z = cube2.current.position.z
                
                cube5.current.rotation.z-= degToRad(10)
                //1.569  
    
                //cube.current.rotation.y+=0.75
    
                // cube2.current.position.x = cube3.current.position.x
                // cube2.current.position.y = cube3.current.position.y
                // cube2.current.position.z = cube3.current.position.z
                cube6.current.rotation.z-= degToRad(10)
    
                // cube3.current.position.x = cube4.current.position.x
                // cube3.current.position.y = cube4.current.position.y
                // cube3.current.position.z = cube4.current.position.z
    
    
                // cube4.current.position.x = dummy.x
                // cube4.current.position.y = dummy.y
                // cube4.current.position.z = dummy.z
                cube7.current.rotation.z-= degToRad(10)
                cube8.current.rotation.z-= degToRad(10)
                frame++
                if(frame===9){
                triggerFrontRight= false
                frame = 0;
                }
                }
        }
    )
  return (
    <>
    <Text position={[6,3,3]} onClick={()=>{triggerFrontRight=true}} scale={[5,5,5]}>Front Square to RIGHT</Text>
    <Text position={[6,3,-6]} onClick={()=>{triggerBackRight=true}} rotation={[0,degToRad(180),0]} scale={[5,5,5]}>Back Square to RIGHT</Text>
    <Suspense fallback={null}>
        <mesh ref={cube}  position={[1,1,0]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
        <mesh ref={cube2}    position={[0,1,0]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
        <mesh ref={cube3}   position={[1,0,0]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
        <mesh  ref={cube4}  position={[0,0,0]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
        <mesh ref={cube5}  position={[1,1,1]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
        <mesh ref={cube6}  position={[0,1,1]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
        
        <mesh ref={cube7}  position={[1,0,1]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
        <mesh ref={cube8}  position={[0,0,1]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
        
      </Suspense>
    </>
  )
}

export default RealCube