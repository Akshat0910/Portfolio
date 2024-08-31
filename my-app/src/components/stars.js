import React from 'react'
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function Star() {
  return (

    <div className='w-full h-full absolute inset-0 z-[-1]'>

    <Canvas>

        <Stars></Stars>
      
    </Canvas>
    </div>
  )
}
