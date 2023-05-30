import React, { useRef } from 'react';
import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import bungee from '../assets/Bungee_Regular.json';
import { useFrame, useThree } from '@react-three/fiber';

extend({ TextGeometry })

export default function CurvedText({ text, pos, rot }) {
    const font = new FontLoader().parse(bungee);
    const textOpt = {
        font,
        size: 0.5,
        height: 1
    };


    return (
        <mesh position={pos} rotation={rot} >
            <textGeometry args={[text, textOpt]} />
            <meshNormalMaterial attach='material' flatShading={true}/>
        </mesh>
    );
}