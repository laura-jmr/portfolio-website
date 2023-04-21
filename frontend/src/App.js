import Text from './components/Text'
import './App.css'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import normalMap from "./assets/normalmap.jpg"
import { useTexture } from '@react-three/drei';
import Background from './components/Background'
import ModelViewer from './components/ModelViewer'
import Menu from './components/Menu'
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import LogoCube from './components/LogoCube';
import Cursor from './components/Cursor';
import CV from './components/CV'

function App() {
  const handleCanvasCreated = (canvas) => {
    console.log(canvas.offsetWidth, canvas.offsetHeight);
  };

  //const normalmap = useLoader(TextureLoader, './assets/normalmap.jpg')
  //const texture = useTexture('./assets/normalmap.jpg');

  return (
    <>
    <Cursor/>
    <Menu />
      <Canvas
        style={{ color: '#00000', height: '100vh', width: '100vw' }}
        onCreated={handleCanvasCreated}
        camera={{ fov: 30, position: [0, 0, 30] }}
      >
        <Background />
        <directionalLight position={[10, 10, 10]} />
        <ambientLight intensity={0.3} />
        <Text text={'L'} pos={[-10, 1.25, -10]} rot={1} />
        <Text text={'a'} pos={[-8, 1.75, -10]} rot={1} />
        <Text text={'u'} pos={[-6, 2, -10]} rot={1} />
        <Text text={'r'} pos={[-4, 2.25, -10]} rot={1} />
        <Text text={'a'} pos={[-2, 2, -10]} rot={1} />

        <Text text={'J'} pos={[-10, -2.25, -10]} rot={1} />
        <Text text={'ü'} pos={[-8, -2, -10]} rot={1} />
        <Text text={'r'} pos={[-6, -1.75, -10]} rot={1} />
        <Text text={'g'} pos={[-4, -1.5, -10]} rot={1} />
        <Text text={'e'} pos={[-2, -1.25, -10]} rot={1} />
        <Text text={'n'} pos={[0, -1, -10]} rot={1} />
        <Text text={'s'} pos={[2, -1, -10]} rot={1} />
        <Text text={'m'} pos={[4, -1.25, -10]} rot={1} />
        <Text text={'e'} pos={[6, -1.5, -10]} rot={1} />
        <Text text={'i'} pos={[8, -1.75, -10]} rot={1} />
        <Text text={'e'} pos={[10, -2, -10]} rot={1} />
        <Text text={'r'} pos={[12, -2.25, -10]} rot={1} />
        <ModelViewer scale="100" modelPath={"/images/3d/Donut/donut.glb"} />
      </Canvas>
      <Canvas 
        className='canvas-bg'
        style={{ color: '#c25959', height: '400px', width: '100vw' }}
        onCreated={handleCanvasCreated}
        camera={{ fov: 10, position: [0, 0, 15] }}
      >
        <directionalLight position={[10, 10, 10]} />
        <ambientLight intensity={0.3} />
        <LogoCube path={'assets/python-logo.svg.png'} pos={[-4, 0.5, -2]}/>
        <LogoCube path={'assets/numpy-logo.png'} pos={[-4, -0.5, -2]}/>
        <LogoCube path={'assets/html-logo.png'} pos={[-2, 0.5, -2]}/>
        <LogoCube path={'assets/css-logo.png'} pos={[-2, -0.5, -2]}/>
        <LogoCube path={'assets/nodejs-logo.png'} pos={[0, 0.5, -2]}/>
        <LogoCube path={'assets/react-logo.png'} pos={[0, -0.5, -2]}/>
        <LogoCube path={'assets/mongodb-logo.png'} pos={[2, 0.5, -2]}/>
        <LogoCube path={'assets/sql-logo.png'} pos={[2, -0.5, -2]}/>
        <LogoCube path={'assets/scala-logo.png'} pos={[4, 0.5, -2]}/>
        <LogoCube path={'assets/java-logo.png'} pos={[4, -0.5, -2]}/>
      </Canvas>
      <CV/>
    </>
  );
}

export default App;
