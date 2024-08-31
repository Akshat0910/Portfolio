import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls ,Preload,Float,useTexture,Decal } from '@react-three/drei'
import CanvasLoader from './loader'




const Eachball = (props)=>{

    const [decal]= useTexture([props.icon]);
    
    return (
        
        <Float speed={1.75} rotationIntensity={1} 
        floatIntensity={2}>
            <ambientLight intensity={0.5}></ambientLight>
            <directionalLight position={[0,0,0.25]}></directionalLight>
            <mesh castshadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1,1]}></icosahedronGeometry>
                <meshStandardMaterial color="white"
                polygonOffset
                polygonOffsetFactor={-5}
                flatShading
                ></meshStandardMaterial>
                <Decal
                position={[0,0,1]}
                map={decal}
                rotation={[2*Math.PI,0,6.25]}
            
                ></Decal>


            </mesh>

           
        </Float>
      
    )




}

export default function Balls(props) {
  return (
<div>

     <Canvas frameloop='demand' 
    // shadows dpr={[1, 2]}  
    // camera={{position:[20,0,10],fov:25}} 
    gl={{preserveDrawingBuffer:true}}>
          

        <Suspense fallback={<CanvasLoader/>}>

        <OrbitControls
        enableZoom={false}
        ></OrbitControls>

        <Eachball icon={props.icon}></Eachball>

        </Suspense>

        <Preload all />

        </Canvas>
      
    </div>
  )
}
