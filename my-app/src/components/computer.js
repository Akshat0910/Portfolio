import {Suspense,useEffect,useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from "../components/loader";







const Computer = ({IsMobile}) => {

  // console.log(IsMobile);

  const computer = useGLTF('./Computer/scene.gltf');
  return (
    <mesh>
    <hemisphereLight intensity={3}  groundColor='blue' />
    <pointLight intensity={2} position={IsMobile? [2.5,1.5,1.6]:[2.4,2.9,2]}></pointLight>
    <spotLight position={[0,3.5,2]} angle={0.12}
        penumbra={1}
        intensity={1} 
        castShadow
        shadow-mapSize={1024}
        >
          
      </spotLight>
    
    <primitive object={computer.scene}
    scale={ IsMobile ? 0.5 : 0.7} position={IsMobile? [2.3,-0.5,-0.3]:[2.5,0,0]} rotation={[0, -0.3, -0.3]}></primitive>

    
  </mesh>
  )
}

const ComputerCanvas = () =>{

  const [IsMobile , setIsMobile] = useState(false); 

  useEffect(()=>{
    const media = window.matchMedia("(max-width: 500px)");
    
    setIsMobile(media.matches);
    // console.log(IsMobile);

    const handleMediaQuery = (event)=>{

      setIsMobile(event.matches);

    }

    media.addEventListener('change',handleMediaQuery);
    
    // remove listener when component is unmounted
    return ()=>{
      media.removeEventListener('change',handleMediaQuery);
    }



  },[])
  






     return(
    
        <Canvas frameloop='demand' shadows dpr={[1, 2]} camera={{position:[20,0,10],fov:25}} gl={{preserveDrawingBuffer:true}}>
          

        <Suspense fallback={<CanvasLoader/>}>

        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}></OrbitControls>

        <Computer IsMobile={IsMobile}></Computer>

        </Suspense>

        <Preload all />

        </Canvas>
      

     )
}

export default ComputerCanvas;




