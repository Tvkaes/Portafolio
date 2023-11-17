import {motion} from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { gmail, location, me } from '../assets'
import { styles } from '../styles'
import { socialMedia } from '../constants'
import { useState } from 'react'
import { fadeIn } from '../utils/motion'


interface Props{
    index:number,
    icon?:any,
    name:string,
    link:string
}

const Media = ({index,icon,name,link}:Props)=>(
    <>
        <motion.a variants={fadeIn("right","spring",0.5*index,2)} className="avatar btn h-16 bg-transparent border-none hover:bg-transparent" href={link} target='_blank'>
            <div className="w-16 bg-[#c9a8c7]/20 shadow-xl shadow-[#c9a8c7]/50 object-contain rounded-full p-4">
                <img alt={name} src={icon} />
            </div>
        </motion.a>
    </>
)

const Contacts = ()=>{

    const [inputValue] = useState('JJGonzalezJ0@gmail.com');


  
    const handleCopyClick = () => {
      // Copia el valor actual del input al portapapeles
      navigator.clipboard.writeText(inputValue)
        .then(() => {
          console.log('Valor copiado al portapapeles: ', inputValue);
        })
        .catch((error) => {
          console.error('Error al copiar al portapapeles: ', error);
        });
    };

    return(
        <>
        <div className='w-full mt-5  mx-auto justify-center items-center flex'>

            <div className="avatar  absolute top-2 z-10">
                <div className="w-36 shadow-xl border border-[#875575] shadow-[#875575]/90 rounded-full glass">
                    <img src={me} />
                </div>
            </div>

            <div className="card w-full h-full bg-white shadow-xl  text-neutral ">
                <div className="card-body">
                    <div className='grid grid-cols-1 lg:grid-cols-2 my-auto'>
                        <div className='p-6 space-y-4'>
                            <h2 className={`text-3xl  font-bold text-center text-gradient`}>Jonathan Gonzalez</h2>
                            <p className={`${styles.sectionSubText} flex items-center justify-center !text-neutral/50`}>Frontend Developer</p>
                            <p className='flex items-center justify-center text-lg font-semibold'><span><img src={location} /></span>Rosarito,Baja California</p>
                        </div>

                        <div className='flex flex-col gap-6 space-y-4'>
                            <div className='flex flex-col justify-center items-center gap-4'>
                                <p className={`text-lg flex items-center justify-center !text-neutral`}>Feel free to contact me <span className='ml-4'><img src={gmail}></img></span></p>
                                <div className="join" id='input'>
                                    <input className="input input-bordered join-item bg-neutral/20 border-none text-neutral/50 input-disabled" value={inputValue}/>
                                    <button className="btn join-item btn-primary" onClick={handleCopyClick}>Copy</button>
                                </div>
                            </div>
                            <div className='flex-wrap space-x-4 justify-center flex items-center'>
                                    {
                                        socialMedia.map((obj,index)=>(
                                            <Media key={index} index={index} {...obj}></Media>
                                        ))
                                    }
                            </div>
                        </div>
                       

                    </div>

                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-secondary">Download CV</button>
                    </div> */}
                    
                    
                </div>
                
            </div>

        </div>
       
        </>
    )
}


export default SectionWrapper(Contacts,"contact")