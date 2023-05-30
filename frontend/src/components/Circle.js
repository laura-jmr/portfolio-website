import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Circle( {key, radius, segments, color, position} ) {
    const mesh = useRef(null);

    useFrame(() => {
        mesh.current.geometry.center()
        mesh.current.position.y += (0.03 * (radius) );
      })

    return (
        <mesh position={position} rotation={[0, 0, 0]} ref={mesh}>
            <circleGeometry args={[radius, segments]} />
            <meshBasicMaterial attach='material' color={color} />
        </mesh>
    )
}
