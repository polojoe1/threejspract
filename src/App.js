
import './App.css';
import {Canvas, } from 'react-three-fiber'
import Box from './components/Box';
import {Stars, OrbitControls} from '@react-three/drei'




function App() {
  
  return (
    <Canvas style={{backgroundColor:'pink',height:'100vh'}}>
      <Stars />
      <OrbitControls/>
      
      <ambientLight  intensity={0.5}/>
      <spotLight  position={[10,15,10]} angle={0.3}/>
      <Box  position={[0, 0, 0]}/>
      <mesh  position={[1,0,0]}>
        <boxGeometry/>
        <meshLambertMaterial color={'red'} attach={'material'}/>
      </mesh>
      <mesh  position={[1,1.1,0]}>
        <boxGeometry />
        <meshStandardMaterial color={'red'} attach={'material'}/>
        {/* <meshStandardMaterial color={'blue'} attach={'material'}/>
        <meshStandardMaterial color={'yellow'} attach={'material'}/>
        <meshStandardMaterial color={'pink'} attach={'material'}/>
        <meshStandardMaterial color={'black'} attach={'material'}/>
        <meshStandardMaterial color={'white'} attach={'material'}/> */}
      </mesh>
      <mesh position={[0,1.1,0]}>
        <boxGeometry/>
        <meshLambertMaterial color={'yellow'} attach={'material'}/>
      </mesh>
      <mesh position={[5,0,0]}>
        <sphereGeometry/>
        <meshLambertMaterial color={'blue'} attach={'material'}/>
      </mesh>
      
    </Canvas>
  );
}

export default App;
