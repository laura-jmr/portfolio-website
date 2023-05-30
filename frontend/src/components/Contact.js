import React from 'react';
import { Canvas } from '@react-three/fiber';
import Text from './Text';
import ModelViewer from './ModelViewer';
import CurvedText from './CurvedText';

export default function Contact() {
  return (
    <div className='contact-container' id='contact'>
      <Canvas
        style={{ color: '#00000', height: '100vh', width: '100vw', zIndex: "998" }}
        camera={{ fov: 30, position: [0, 0, 30] }}
      >
        <directionalLight position={[10, 10, 10]} />
        <ambientLight intensity={0.3} />
        <Text text={'Want to'} pos={[-10, 4, -10]} rot={1} />
        <Text text={'connect?'} pos={[-9, 2, -9]} rot={1} />
      </Canvas>
      <div className='contact-inner-container'>
        <p className='contact-email'>laura.juergensmeier@gmail.com</p>
        <div className='contact-icons'>
          <i class="large material-icons">content_copy</i>
          <i class="large material-icons">group_add</i>
          <i class="large material-icons">link</i>
        </div>
      </div>

    </div>
  )
}
