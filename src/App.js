
import './App.css';
import {Canvas } from 'react-three-fiber'
import {Stars, OrbitControls} from '@react-three/drei'

import RealCube from './components/RealCube';



function App() {
  

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
