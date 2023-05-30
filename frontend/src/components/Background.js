import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import Circle from './Circle';

export default function Background({ amount }) {
  const { viewport } = useThree();

  function randomIntFromInterval(min, max) {
    return (Math.random() * (max - min + 1) + min)
  }

  var circles = []

  for (var i = 0; i < amount; i++) {
    var circle = {
      id: i,
      radius: randomIntFromInterval(0.001, 0.002),
      segments: 32,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      position: [randomIntFromInterval(viewport.width * -1, viewport.width)*10*-1 + 6,
      randomIntFromInterval(viewport.height * -1, viewport.height) * 10/2- 10,
      -10]
    }
    circles.push(circle);
  }

  return (
    <>
      {circles.map((entry) => (
        <Circle key={entry.id} radius={entry.radius} segments={entry.segments} color={entry.color} position={entry.position}/>
      ))}
    </>
  )
}
