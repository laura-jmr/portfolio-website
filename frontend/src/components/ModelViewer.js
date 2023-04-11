import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function ModelViewer({ modelPath, scale = 40, position = [0, 0, 0] }) {
    return (
      
            <Suspense fallback={null}>
                <Model modelPath={modelPath} scale={scale} position={position} />
            </Suspense>
    )
}
