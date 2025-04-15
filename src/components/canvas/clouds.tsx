import {useEffect,useState} from 'react'
import { Canvas,extend } from '@react-three/fiber'
import { OrbitControls,useGLTF,useAnimations,Cloud,Clouds, Float } from '@react-three/drei'
import * as THREE from 'three'

extend({ OrbitControls,useAnimations,useGLTF})

interface Props{
    isMobile?:boolean
}

const CloudsModel = ({isMobile}:Props)=>{
    return(
    <>
    <group>
      <Clouds material={THREE.MeshLambertMaterial} limit={400} >
        <Float floatIntensity={.1}>
            <Cloud  color="#eed0d0" seed={2} position={[15, 0, 0]} />
        </Float>
        <Float floatIntensity={0.5}>
            <Cloud  color="#d0e0d0" seed={3} position={[-15, 0, 0]} />
        </Float>
        <Float  floatIntensity={.2}>
                <Cloud  color="#a0b0d0" seed={4} position={isMobile ? [1, 0, -10] : [10, 0, -9]} />
        </Float>
        <Cloud concentrate="outside" position={[0, -45, 0]} growth={100} color="white" opacity={1.25} seed={0.3} bounds={200} volume={200} />
      </Clouds>
    </group>
  </>

    )
}

const  CloudCanvas =()=>{

    const [isMobile,setIsMobile] = useState(false);

    useEffect(()=>{
    
        const mediaQuery = window.matchMedia('(max-width:500px)');
        setIsMobile(mediaQuery.matches);
    
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
          setIsMobile(event.matches)
        }
    
        mediaQuery.addEventListener('change',handleMediaQueryChange);
    
        return()=>{
          mediaQuery.removeEventListener('change',handleMediaQueryChange);
        }
    
    
    },[])

    return(

        <Canvas camera={{ position: [0, -10, 10], fov: 60 }}>  
        <CloudsModel isMobile={isMobile}/>
        <ambientLight intensity={Math.PI / 1.5} />
        <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
        <spotLight position={[-20, 0, 10]} color="red" angle={0.15} decay={0} penumbra={-1} intensity={30} />
        <spotLight position={[20, -10, 10]} color="red" angle={0.2} decay={0} penumbra={-1} intensity={20} />
      </Canvas>

    )

}

export default CloudCanvas