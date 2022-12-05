
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




function App() {
  const texture_1 = useLoader(TextureLoader,White)
  const texture_2 = useLoader(TextureLoader,Blue)
  const texture_3 = useLoader(TextureLoader, Green)
  const texture_4 = useLoader(TextureLoader, Orange)
  const texture_5 = useLoader(TextureLoader, Red)
  const texture_6 = useLoader(TextureLoader, Yellow)
  const mesh = useRef()
  
  const MyCube = ()=>{
    const cube = useRef();
    useFrame(()=>{
      if(1){
        //cube.current.rotateX+= 0.01;
        
      }
      return(
        <Suspense fallback={null}>
        <mesh ref={cube} rotateX={0.01}  position={[2,1,0]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
      </Suspense>
      )
    })
  }

  return (
    <Canvas style={{backgroundColor:'black',height:'100vh'}}>
      <Stars />
      <OrbitControls/>

      <ambientLight  intensity={0.5}/>
      <spotLight  position={[10,15,10]} angle={0.3}/>
      <MyCube />
      
      <Suspense fallback={null}>
        <mesh ref={mesh}  position={[1,1,0]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
        <mesh   position={[0,0,0]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
        <mesh   position={[0,0,1]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
        <mesh   position={[0,1,1]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
        <mesh   position={[1,1,1]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
        <mesh   position={[1,0,1]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
      </Suspense>
      <Suspense fallback={null}>
      <mesh   position={[0,1,0]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>

        <mesh   position={[1,0,0]}>
          <boxGeometry args={[1,1,1]}/>
          <meshStandardMaterial map={texture_1} attach={'material-0'}/>
          <meshStandardMaterial map={texture_2} attach={'material-1'}/>
          <meshStandardMaterial map={texture_3} attach={'material-2'}/>
          <meshStandardMaterial map={texture_4}  attach={'material-3'}/>
          <meshStandardMaterial map={texture_5}  attach={'material-4'}/>
          <meshStandardMaterial map={texture_6}  attach={'material-5'}/>
        </mesh>
      </Suspense>
      
      
    </Canvas>
  );
}

export default App;
