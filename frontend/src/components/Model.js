import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import duck from './rubber_duck_toy_4k.gltf'

export default function Model({ modelPath, scale = 40, position = [0, 0, 0] }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, duck);
  const [hovered, hover] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.y += 0.003));

  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={[10, -5, -20]}
        scale={50}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      />
    </>
  )
}
