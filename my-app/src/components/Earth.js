import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from './loader'

const Earthmodel=()=>{

  const earth = useGLTF('./Earth/scene.gltf')

  return(

    <primitive
     object={earth.scene} scale={3}
     rotation-y={0} position-y={0}></primitive>
   



  

  )


}


export default function Earth() {
  return (
    <div className='w-full h-full '>

          <Canvas frameloop='demand' shadows dpr={[1, 2]} camera={{position:[20,0,10],fov:25,near:0.1, far:150,aspect:2}} gl={{preserveDrawingBuffer:true}}>
          

          <Suspense fallback={<CanvasLoader/>}>
  
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} autoRotate></OrbitControls>
  
          <Earthmodel></Earthmodel>
  
          </Suspense>
  
          <Preload all />
  
          </Canvas>
        
      
    </div>
  )
}
