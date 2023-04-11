import React from 'react'
import { useTexture } from '@react-three/drei';
import normalMap from '../assets/normalmap.jpg'

export default function Background() {

    const texture = useTexture(normalMap);
    return (
        <>
        <meshNormalMaterial attach="background" normalMap={texture}/>
        <color attach="background" args={['#00000']} />
        </>
    )
}
