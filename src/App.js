
import './App.css';
import {Canvas, useLoader, useFrame  } from 'react-three-fiber'
import {Stars, OrbitControls} from '@react-three/drei'
import { TextureLoader } from 'three';
import { Suspense } from 'react';
import White from './textures/white.png'
import Blue from './textures/blue-square-2-md.png'
import Green from './textures/green-square-md.png'
import Orange from './textures/orange-square-md.png'
import Red from './textures/red.png'
import Yellow from './textures/yellow-square-2-md.png'
import { useRef } from 'react';
import Cube from './components/Cube';
import { degToRad } from 'three/src/math/MathUtils';
import RealCube from './components/RealCube';



function App() {
  const texture_1 = useLoader(TextureLoader,White)
  const texture_2 = useLoader(TextureLoader,Blue)
  const texture_3 = useLoader(TextureLoader, Green)
  const texture_4 = useLoader(TextureLoader, Orange)
  const texture_5 = useLoader(TextureLoader, Red)
  const texture_6 = useLoader(TextureLoader, Yellow)
  let trigger = false
    const cube = useRef();
    const cube2 = useRef()
    const cube3 = useRef()
    const cube4 = useRef()
    let frame = 0

  return (
    <>
    
    <Canvas style={{backgroundColor:'black',height:'100vh', position:'absolute'}}>
      <Stars />
      <OrbitControls/>

      <ambientLight  intensity={0.5}/>
      <spotLight  position={[10,15,10]} angle={0.3}/>
      
      
      
      <RealCube/>
      
      {/* <Cube/> */}
    </Canvas>
    </>
  );
}

export default App;
