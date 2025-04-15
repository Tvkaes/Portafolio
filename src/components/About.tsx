import {motion} from 'framer-motion'
import { styles } from '../styles'
import { fadeIn,textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


const About = ()=>{

    return(
        <>
        <div className='flex-wrap gap-4'>

            <div>
                <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText} !text-neutral`}>Introduction</p>
                    <h2 className={`${styles.sectionHeadText} !text-neutral`}>Overview</h2>
                </motion.div>
                <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-neutral text-[17px] max-w-3xl leading-[30px]'>
                    I am a quick learning person with a very open-passionate wide sight for learning new things. My main interest is web design. I also seek to learn more about this field. 
                    I consider myself a friendly and cooperative person, both when working in a team and individually. My goal is to continue to grow professionally and contribute to innovative and challenging projects in the field of web design.
                    Besides my interest in technology, I also spend some time playing volleyball and enjoying my free time with my relatives.
                </motion.p>
            </div>
            

        </div>
        
        
        
        
        </>
    )
}

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;