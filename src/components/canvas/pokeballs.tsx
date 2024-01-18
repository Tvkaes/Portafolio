import {useEffect,useState} from 'react'
import { Canvas,extend } from '@react-three/fiber'
import { OrbitControls,useGLTF,useAnimations, Float, Clone } from '@react-three/drei'



extend({ OrbitControls,useAnimations,useGLTF})

interface Props{
    isMobile?:boolean,
    url:string,
    position?:any
    rotation?:any
    
}

const ModelInstance = ({ url, position,rotation }:Props) => {

   const {scene} = useGLTF(url)
  
    return (
        <Float floatIntensity={.1}>
            <Clone object={scene} position={position} scale={1.50} rotation={rotation}/>
        </Float>
        
    );
};



const PokeballModel = ({isMobile}:Props)=>{

   

    const models = [
        { url: 'public/pok.glb', position: [15, 0, 0] },
        { url: 'public/pok.glb', position: [-5, 6, 1] },
        { url: 'public/pok.glb', position: [5, -2, 3],rotation:[.5,10.6,0] },
        { url: 'public/pok.glb', position: [-15, 0, 0] },
        { url: 'public/pok.glb', position: isMobile ? [1, 0, -10] : [10, 0, -9] },
        // Agrega más instancias con diferentes posiciones según sea necesario
    ];

    
    return(
    <>
    <group>
        {models.map((model, index) => (
            <ModelInstance key={index} url={model.url} position={model.position} rotation={model.rotation} />
        ))}
    </group>
  </>

    )
}

const  PokeballCanvas =()=>{

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

        <Canvas camera={{ position: [0, -10, 10], fov: 60 }}>  
        <PokeballModel isMobile={isMobile} url=''/>
        <ambientLight intensity={Math.PI / 1.5} />
        <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
        <spotLight position={[-20, 0, 10]} color="red" angle={0.15} decay={0} penumbra={-1} intensity={30} />
        <spotLight position={[20, -10, 10]} color="red" angle={0.2} decay={0} penumbra={-1} intensity={20} />
      </Canvas>

    )

}

export default PokeballCanvas