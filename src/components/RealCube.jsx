import React,{useState} from 'react'
import {  TextureLoader } from 'three';
import { Suspense } from 'react';
import White from '../textures/white.png'
import Blue from '../textures/blue-square-2-md.png'
import Green from '../textures/green-square-md.png'
import Orange from '../textures/orange-square-md.png'
import Red from '../textures/red.png'
import Yellow from '../textures/yellow-square-2-md.png'
import { useRef } from 'react';
import { useLoader, useFrame } from 'react-three-fiber'
import { degToRad } from 'three/src/math/MathUtils';
import {Text} from '@react-three/drei'
//clean up code later
const RealCube = (props) => {
    const texture_1 = useLoader(TextureLoader,White)
  const texture_2 = useLoader(TextureLoader,Blue)
  const texture_3 = useLoader(TextureLoader, Green)
  const texture_4 = useLoader(TextureLoader, Orange)
  const texture_5 = useLoader(TextureLoader, Red)
  const texture_6 = useLoader(TextureLoader, Yellow)
  let triggerBackRight = false
  let triggerFrontRight = false
  let triggerTopRight = false;
    const cube = useRef();
    const cube2 = useRef()
    const cube3 = useRef()
    const cube4 = useRef()
    const cube5 = useRef();
    const cube6 = useRef()
    const cube7 = useRef()
    const cube8 = useRef()
    const [allCubes,setAllCubes] = useState([cube,cube2,cube3,cube4,cube5,cube6,cube7,cube8])


    

    let frame = 0
    useFrame(()=>{
        if(triggerBackRight){
            let backSquares = []
            for (let i = 0; i < allCubes.length; i++) {
                if(allCubes[i].current.position.x===1&&allCubes[i].current.position.y===1&&allCubes[i].current.position.z===0){
                    backSquares.push(allCubes[i])
                }
                if(allCubes[i].current.position.x===0&&allCubes[i].current.position.y===1&&allCubes[i].current.position.z===0){
                    backSquares.push(allCubes[i])
                }
                if(allCubes[i].current.position.x===1&&allCubes[i].current.position.y===0&&allCubes[i].current.position.z===0){
                    backSquares.push(allCubes[i])
                }
                if(allCubes[i].current.position.x===0&&allCubes[i].current.position.y===0&&allCubes[i].current.position.z===0){
                    backSquares.push(allCubes[i])
                }
            }
            //console.log(cube.current.position)
            let dummy = {...backSquares[0].current.position}
            //console.log(dummy)
            if(frame===8){
                
                backSquares[0].current.position.x = backSquares[1].current.position.x
                backSquares[0].current.position.y = backSquares[1].current.position.y
                backSquares[0].current.position.z = backSquares[1].current.position.z

                backSquares[1].current.position.x = backSquares[2].current.position.x
                backSquares[1].current.position.y = backSquares[2].current.position.y
                backSquares[1].current.position.z = backSquares[2].current.position.z

                backSquares[2].current.position.x = backSquares[3].current.position.x
                backSquares[2].current.position.y = backSquares[3].current.position.y
                backSquares[2].current.position.z = backSquares[3].current.position.z

                backSquares[3].current.position.x = dummy.x
                backSquares[3].current.position.y = dummy.y
                backSquares[3].current.position.z = dummy.z
            }
            // cube.current.position.x = cube2.current.position.x
            // cube.current.position.y = cube2.current.position.y
            // cube.current.position.z = cube2.current.position.z
            
            backSquares[0].current.rotation.z-= degToRad(10)
            //1.569  

            //cube.current.rotation.y+=0.75

            // cube2.current.position.x = cube3.current.position.x
            // cube2.current.position.y = cube3.current.position.y
            // cube2.current.position.z = cube3.current.position.z
            backSquares[1].current.rotation.z-= degToRad(10)

            // cube3.current.position.x = cube4.current.position.x
            // cube3.current.position.y = cube4.current.position.y
            // cube3.current.position.z = cube4.current.position.z


            // cube4.current.position.x = dummy.x
            // cube4.current.position.y = dummy.y
            // cube4.current.position.z = dummy.z
            backSquares[2].current.rotation.z-= degToRad(10)
            backSquares[3].current.rotation.z-= degToRad(10)
            frame++
            if(frame===9){
            triggerBackRight= false
            frame = 0;
            }
            }
            if(triggerFrontRight){
                //console.log(cube.current.position)
                let frontSquares = []
                for (let i = 0; i < allCubes.length; i++) {
                    if(allCubes[i].current.position.x===1&&allCubes[i].current.position.y===1&&allCubes[i].current.position.z===1){
                        frontSquares.push(allCubes[i])
                    }
                    if(allCubes[i].current.position.x===0&&allCubes[i].current.position.y===1&&allCubes[i].current.position.z===1){
                        frontSquares.push(allCubes[i])
                    }
                    if(allCubes[i].current.position.x===1&&allCubes[i].current.position.y===0&&allCubes[i].current.position.z===1){
                        frontSquares.push(allCubes[i])
                    }
                    if(allCubes[i].current.position.x===0&&allCubes[i].current.position.y===0&&allCubes[i].current.position.z===1){
                        frontSquares.push(allCubes[i])
                    }
                }
                let dummy = {...frontSquares[0].current.position}
                //console.log(dummy)
                if(frame===8){
                    frontSquares[0].current.position.x = frontSquares[1].current.position.x
                    frontSquares[0].current.position.y = frontSquares[1].current.position.y
                    frontSquares[0].current.position.z = frontSquares[1].current.position.z
    
                    frontSquares[1].current.position.x = frontSquares[2].current.position.x
                    frontSquares[1].current.position.y = frontSquares[2].current.position.y
                    frontSquares[1].current.position.z = frontSquares[2].current.position.z
    
                    frontSquares[2].current.position.x = frontSquares[3].current.position.x
                    frontSquares[2].current.position.y = frontSquares[3].current.position.y
                    frontSquares[2].current.position.z = frontSquares[3].current.position.z
    
                    frontSquares[3].current.position.x = dummy.x
                    frontSquares[3].current.position.y = dummy.y
                    frontSquares[3].current.position.z = dummy.z
                }
                // cube.current.position.x = cube2.current.position.x
                // cube.current.position.y = cube2.current.position.y
                // cube.current.position.z = cube2.current.position.z
                
                frontSquares[0].current.rotation.z-= degToRad(10)
                //1.569  
    
                //cube.current.rotation.y+=0.75
    
                // cube2.current.position.x = cube3.current.position.x
                // cube2.current.position.y = cube3.current.position.y
                // cube2.current.position.z = cube3.current.position.z
                frontSquares[1].current.rotation.z-= degToRad(10)
    
                // cube3.current.position.x = cube4.current.position.x
                // cube3.current.position.y = cube4.current.position.y
                // cube3.current.position.z = cube4.current.position.z
    
    
                // cube4.current.position.x = dummy.x
                // cube4.current.position.y = dummy.y
                // cube4.current.position.z = dummy.z
                frontSquares[2].current.rotation.z-= degToRad(10)
                frontSquares[3].current.rotation.z-= degToRad(10)
                frame++
                if(frame===9){
                triggerFrontRight= false
                frame = 0;
                }
                }
                if(triggerTopRight){
                    //console.log(cube.current.position)
                    let topSquares = []
                    for (let i = 0; i < allCubes.length; i++) {
                        if(allCubes[i].current.position.x===1&&allCubes[i].current.position.y===1&&allCubes[i].current.position.z===0){
                            topSquares.push(allCubes[i])
                        }
                        if(allCubes[i].current.position.x===0&&allCubes[i].current.position.y===1&&allCubes[i].current.position.z===0){
                            topSquares.push(allCubes[i])
                        }
                        if(allCubes[i].current.position.x===1&&allCubes[i].current.position.y===1&&allCubes[i].current.position.z===1){
                            topSquares.push(allCubes[i])
                        }
                        if(allCubes[i].current.position.x===0&&allCubes[i].current.position.y===1&&allCubes[i].current.position.z===1){
                            topSquares.push(allCubes[i])
                        }
                    }
                    
                    
                    //console.log(dummy)

                    if(frame===8){
                        let dummy = {...topSquares[0].current.position}
                        topSquares[0].current.position.x = topSquares[1].current.position.x
                        topSquares[0].current.position.y = topSquares[1].current.position.y
                        topSquares[0].current.position.z = topSquares[1].current.position.z
        
                        topSquares[1].current.position.x = topSquares[2].current.position.x
                        topSquares[1].current.position.y = topSquares[2].current.position.y
                        topSquares[1].current.position.z = topSquares[2].current.position.z
        
                        topSquares[2].current.position.x = topSquares[3].current.position.x
                        topSquares[2].current.position.y = topSquares[3].current.position.y
                        topSquares[2].current.position.z = topSquares[3].current.position.z
        
                        topSquares[3].current.position.x = dummy.x
                        topSquares[3].current.position.y = dummy.y
                        topSquares[3].current.position.z = dummy.z
                    }
                    // cube.current.position.x = cube2.current.position.x
                    // cube.current.position.y = cube2.current.position.y
                    // cube.current.position.z = cube2.current.position.z
                    const top=()=>{
                      <group>
                        {topSquares.map((el)=>{return el})}
                      </group>
                    }
                    top()
                    console.log(top())
                    topSquares[0].current.rotation.y+= degToRad(10)
                    //1.569  
                    
                    
                    //cube.current.rotation.y+=0.75
        
                    // cube2.current.position.x = cube3.current.position.x
                    // cube2.current.position.y = cube3.current.position.y
                    // cube2.current.position.z = cube3.current.position.z
                    topSquares[1].current.rotation.y+= degToRad(10)
        
                    // cube3.current.position.x = cube4.current.position.x
                    // cube3.current.position.y = cube4.current.position.y
                    // cube3.current.position.z = cube4.current.position.z
        
        
                    // cube4.current.position.x = dummy.x
                    // cube4.current.position.y = dummy.y
                    // cube4.current.position.z = dummy.z
                    topSquares[2].current.rotation.y+= degToRad(10)
                    topSquares[3].current.rotation.y+= degToRad(10)


                    
                    
                    frame++
                    if(frame===9){
                    triggerTopRight= false
                    frame = 0;
                    }
                }
        }
    )
  return (
    <>
    <Text position={[6,3,3]} onClick={()=>{triggerFrontRight=true}} scale={[5,5,5]}>Front Square to RIGHT</Text>
    <Text position={[3,6,3]} onClick={()=>{triggerTopRight=true}} scale={[5,5,5]}>Top Square to RIGHT</Text>
    <Text position={[6,3,-6]} onClick={()=>{triggerBackRight=true}} rotation={[0,degToRad(180),0]} scale={[5,5,5]}>Back Square to RIGHT</Text>
    <Suspense fallback={null}>
        <mesh ref={cube} onClick={()=>{triggerTopRight=true}}   position={[1,1,0]}>
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