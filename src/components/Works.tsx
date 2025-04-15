import {motion} from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import { styles } from '../styles'
import { code } from '../assets'
import { internet } from '../assets'


interface Props {
    index:number
    name?:string
    description?:string
    image?:string
    source_code_link?: string
}



const ProjectCard = ({index,name,description,image,source_code_link}:Props)=>(

    <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className="card sm:w-[360px] w-full bg-base-100 shadow-xl">
        <figure className='h-36'><img src={image} alt={name} /></figure>
        <div className="card-body">
            <h2 className="card-title text-neutral">
                {name}
            </h2>
            <p className='text-neutral/60'>{description}</p>
            <div className="card-actions justify-end">
                <div onClick={()=> window.open(source_code_link,"_blank")} className='flex justify-center items-center cursor-pointer btn btn-sm btn-circle'>
                     <img src={code} alt='code' className='w-1/2 h-1/2 object-contain'/>
                </div>
                <div onClick={()=> window.open(source_code_link,"_blank")} className='flex justify-center items-center cursor-pointer btn btn-sm btn-circle'>
                    <img src={internet} alt='code' className='w-1/2 h-1/2 object-contain'/>
                </div>
            </div>
        </div>
    </motion.div>
)


const Works = ()=>{

    return(
        <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} !text-neutral`}>My Personal</p>
            <h2 className={`${styles.sectionHeadText} !text-neutral`}>Projects</h2>
        </motion.div>
        <div className='w-full flex'>
            <motion.p variants={fadeIn(" "," ",0.1,1)} className='mt-3 text-neutral font-medium text-[17px] max-w-3xl leading-[30px]'>
            My journey as a Front-End development enthusiast has been marked by creativity and constant learning. 
             My personal projects have allowed me to hone my skills and create attractive web solutions. 
             I'm excited about the opportunities the future holds and eager to continue developing
            projects that challenge my limits and enrich my experience as a Front-End developer.
            </motion.p>

        </div>
        <div className='mt-20 flex flex-wrap gap-7'>
            {projects.map((project,index)=>(
                <ProjectCard key={index} index={index} {...project}></ProjectCard>
            ))}
        </div>
        
        </>
    )
}


const WrappedWorks = SectionWrapper(Works);
export default WrappedWorks;
