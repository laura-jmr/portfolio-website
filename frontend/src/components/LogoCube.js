import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';

export default function LogoCube( {path, pos} ) {
    const texture = useLoader(TextureLoader,
        require(`../${path}`))
    const mesh = useRef()
    useFrame(() => {
        mesh.current.rotation.x += 0.003
        mesh.current.rotation.y += 0.003
        mesh.current.rotation.z += 0.003
    })
    return (
        <mesh position={pos} ref={mesh}>
            <boxGeometry args={[0.75, 0.75, 0.75]} />
            <meshNormalMaterial attach='material'/>
            <meshStandardMaterial color={0xffffff} map={texture} attach="material" />
            
        </mesh>
    )
}
