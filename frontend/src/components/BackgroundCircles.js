import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import Circle from './Circle';

export default function BackgroundCircles() {

    return (
        <div className='background-container'>
            <span className='background-dot-1'></span>
            <span className='background-rec-1'></span>
            <span className='background-dot-2'></span>
            <span className='background-rec-2'></span>
            <span className='background-dot-3'></span>
            <span className='background-rec-3'></span>
            <span className='background-dot-4'></span>
            <span className='background-rec-4'></span>
            <span className='background-dot-5'></span>
            <span className='background-rec-5'></span>
        </div>   
        )
}
