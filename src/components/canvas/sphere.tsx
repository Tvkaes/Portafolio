import {Suspense,useEffect,useState} from 'react'
import { Canvas,extend } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls,Preload,Sphere,useGLTF,useAnimations,} from '@react-three/drei'

extend({ OrbitControls,useAnimations,useGLTF})

interface Props{
    isMobile:boolean
}

const SphereModel = ({isMobile}:Props)=>{

    return(
    <group  dispose={null} >
      <mesh receiveShadow >
        <Sphere args={[1,100,200]} scale={1.9} position={isMobile ?[-3,0,-2] :[-3,1,-3]}>
          <MeshDistortMaterial speed={3}  attach="material" color={"#c9a8c7d"}/>
      </Sphere>
      </mesh>
    </group>
    )
}

const  ModelCanvas =()=>{

    const [isMobile,setIsMobile] = useState(false);

    useEffect(()=>{
    
        const mediaQuery = window.matchMedia('(max-width:500px)');
        setIsMobile(mediaQuery.matches);
    
        const handleMediaQueryChange = (event:any)=>{
          setIsMobile(event.matches)
        }
    
        mediaQuery.addEventListener('change',handleMediaQueryChange);
    
        return()=>{
          mediaQuery.removeEventListener('change',handleMediaQueryChange);
        }
    
    
    },[])

    return(
       <Canvas camera={{position:[20,3,5],fov:20}}  shadows  gl={{preserveDrawingBuffer:true}} >
       <OrbitControls enableZoom={false} enableRotate={false}/>
       <ambientLight intensity={1.5}/>
       <spotLight position={[-20,50,10]} angle={0.12} penumbra={1} intensity={1} shadow-mapSize={1024}/>
       <pointLight intensity={2} color={"#c9a8c7d"}></pointLight>
       <hemisphereLight intensity={2} groundColor={'#875575'}/>
       <directionalLight intensity={5} position={[3,2,1]} color={"#c9a8c7d"}/>
 
       <group position={[0, -1, 0]}>
         <Suspense >
           <SphereModel isMobile={isMobile}/>
         </Suspense>
         <Preload all />
       </group>
 
        
     </Canvas>
    )

}

export default ModelCanvas