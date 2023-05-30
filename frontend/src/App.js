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
import React, { Suspense, useState, useEffect } from "react";
import LogoCube from './components/LogoCube';
import Cursor from './components/Cursor';
import CV from './components/CV';
import Footer from './components/Footer';
import Scrollbar from './components/Scrollbar';
import Loading from './components/Loading';
import Projects from './components/Projects';
import BackgroundCircles from './components/BackgroundCircles';
import CurvedText from './components/CurvedText';
import Contact from './components/Contact'

function App() {

  const handleCanvasCreated = (canvas) => {
    console.log(canvas.offsetWidth, canvas.offsetHeight);
  };

  //const normalmap = useLoader(TextureLoader, './assets/normalmap.jpg')
  //const texture = useTexture('./assets/normalmap.jpg');

  return (
    <>

      <Loading style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, width: "100vw", height: "100vh" }} />



      <Canvas
        style={{ color: '#11111', height: '100vh', width: '100vw', position: 'fixed', top: '0', left: '00', zIndex: '-999' }}
        onCreated={handleCanvasCreated}
        camera={{ fov: 60, position: [0, 0, 0] }}
      >
        <Background amount={10} />
      </Canvas>
      <BackgroundCircles />
      <Scrollbar />
      <Menu />
      <Canvas
        style={{ color: '#00000', height: '100vh', width: '100vw', zIndex: "998" }}
        onCreated={handleCanvasCreated}
        camera={{ fov: 30, position: [0, 0, 30] }}
      >
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
        <ModelViewer scale={3} modelPath={"/images/3d/Donut/donut.glb"} position={[8, -5, -15]} />
      </Canvas>
      <Canvas
        className='canvas-bg'
        style={{ color: '#c25959', height: '500px', width: '100vw', marginBottom: "200px" }}
        onCreated={handleCanvasCreated}
        camera={{ fov: 10, position: [0, 0, 15] }}
      >
        <directionalLight position={[10, 10, 10]} />
        <ambientLight intensity={0.3} />

        <CurvedText text="S" pos={[-1.15, 1.15, -10]} rot={[-0.1, 0, 0.4]} />
        <CurvedText text="k" pos={[-0.75, 1.35, -10]} rot={[-0.1, 0, 0.2]} />
        <CurvedText text="i" pos={[-0.25, 1.5, -10]} rot={[-0.1, 0, 0]} />
        <CurvedText text="l" pos={[0.25, 1.5, -10]} rot={[-0.1, 0, 0]} />
        <CurvedText text="l" pos={[0.75, 1.35, -10]} rot={[-0.1, 0, -0.2]} />
        <CurvedText text="s" pos={[1.15, 1.15, -10]} rot={[-0.1, 0, -0.4]} />

        <LogoCube path={'assets/python-logo.svg.png'} pos={[-4, 0.25, -6]} name={"python"} />
        <LogoCube path={'assets/numpy-logo.png'} pos={[-4, -1.25, -6]} name={"numpy"} />
        <LogoCube path={'assets/html-logo.png'} pos={[-2, 0.25, -6]} name={"html"} />
        <LogoCube path={'assets/css-logo.png'} pos={[-2, -1.25, -6]} name={"css"} />
        <LogoCube path={'assets/nodejs-logo.png'} pos={[0, 0.25, -6]} name={"nodejs"} />
        <LogoCube path={'assets/react-logo.png'} pos={[0, -1.25, -6]} name={"react"} />
        <LogoCube path={'assets/mongodb-logo.png'} pos={[2, 0.25, -6]} name={"mongodb"} />
        <LogoCube path={'assets/sql-logo.png'} pos={[2, -1.25, -6]} name={"sql"} />
        <LogoCube path={'assets/scala-logo.jpg'} pos={[4, 0.25, -6]} name={"scala"} />
        <LogoCube path={'assets/java-logo.png'} pos={[4, -1.25, -6]} name={"java"} />
      </Canvas>
      <Canvas
        className='canvas-bg'
        style={{ color: '#c25959', height: '500px', width: '100vw' }}
        onCreated={handleCanvasCreated}
        camera={{ fov: 10, position: [0, 0, 15] }}
      >
        <directionalLight position={[10, 10, 10]} />
        <ambientLight intensity={0.3} />
        <CurvedText text="C" pos={[-0.25, -0.6, -10]} rot={[-0.1, 0, 0]} />
        <CurvedText text="V" pos={[0.25, -0.6, -10]} rot={[-0.1, 0, 0]} />
      </Canvas>
      <CV />
      <Canvas
        className='canvas-bg'
        style={{ color: '#c25959', height: '500px', width: '100vw' }}
        onCreated={handleCanvasCreated}
        camera={{ fov: 10, position: [0, 0, 15] }}
      >
        <directionalLight position={[10, 10, 10]} />
        <ambientLight intensity={0.3} />
        <CurvedText text="P" pos={[-1.75, -1.35, -10]} rot={[-0.1, 0, 0.6]} />
        <CurvedText text="r" pos={[-1.15, -1.15, -10]} rot={[-0.1, 0, 0.4]} />
        <CurvedText text="o" pos={[-0.75, -0.85, -10]} rot={[-0.1, 0, 0.2]} />
        <CurvedText text="j" pos={[-0.25, -0.6, -10]} rot={[-0.1, 0, 0]} />
        <CurvedText text="e" pos={[0.25, -0.6, -10]} rot={[-0.1, 0, 0]} />
        <CurvedText text="c" pos={[0.75, -0.85, -10]} rot={[-0.1, 0, -0.2]} />
        <CurvedText text="t" pos={[1.15, -1.15, -10]} rot={[-0.1, 0, -0.4]} />
        <CurvedText text="s" pos={[1.75, -1.35, -10]} rot={[-0.1, 0, -0.6]} />
      </Canvas>
      <Projects/>
      <Contact/>
      <Footer />



    </>
  );
}

export default App;
