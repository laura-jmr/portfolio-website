import React, { useRef } from 'react';
import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import righteous from '../assets/Righteous_Regular.json';
import bungee from '../assets/Bungee_Regular.json';
import bungeeShade from '../assets/Bungee Shade_Regular.json';
import erica from '../assets/Erica One_Regular.json';
import fascinate from '../assets/Fascinate_Regular.json';
import modak from '../assets/Modak_Regular.json';
import monoton from '../assets/Monoton_Regular.json';
import { useFrame, useThree } from '@react-three/fiber'

extend({ TextGeometry })

export default function Text({ text, pos, rot }) {
    const font = new FontLoader().parse(bungee);
    const textOpt = {
        font,
        size: 1.75,
        height: 1
    };

    const mesh = useRef(null)

    const { viewport } = useThree();

    useFrame(({ mouse }) => {
        const x = (mouse.x * viewport.width) / 1.5
        const y = (mouse.y * viewport.height) / 2.5
        mesh.current.lookAt(x, y, -1)
        mesh.current.geometry.center()
    })

    return (
        <mesh position={pos} ref={mesh} rotation={[0, 0, 0]}>
            <textGeometry args={[text, textOpt]} />
            <meshNormalMaterial attach='material' color={'yellow'}/>
        </mesh>
    );
}