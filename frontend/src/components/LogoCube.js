import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import bungee from '../assets/Bungee_Regular.json';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

export default function LogoCube( {path, pos, name} ) {
    const texture = useLoader(TextureLoader,
        require(`../${path}`))
    const mesh = useRef()
    useFrame(() => {
        mesh.current.rotation.x += 0.003
        mesh.current.rotation.y += 0.003
        mesh.current.rotation.z += 0.003
    })

    const font = new FontLoader().parse(bungee);
    const textOpt = {
        font,
        size: 0.1,
        height: 0.01
    };

    const textPos = [...pos];
    textPos[2] = pos[2] + 1
    textPos[1] = pos[1] - 0.8
    textPos[0] = pos[0] - 0.25
    return (
        <>
        <mesh position={pos} ref={mesh}>
            <boxGeometry args={[0.75, 0.75, 0.75]} />
            <meshNormalMaterial attach='material'/>
            <meshStandardMaterial color={0xffffff} map={texture} attach="material" />
            
        </mesh>
        <mesh position={textPos} rotation={[0, 0, 0]}>
            <textGeometry args={[name, textOpt]} />
            <meshBasicMaterial attach='material' color={'yellow'}/>
        </mesh>
        </>
    )
}
