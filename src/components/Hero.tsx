
import { styles } from '../styles'
import CloudCanvas from './canvas/clouds'
import {motion} from 'framer-motion' 






const Hero = ()=>{


    return(
        <>
        <section className='relative w-full h-screen mx-auto flex flex-wrap '>
        <div  className='-z-50 h-screen w-screen absolute  overflow-hidden'>
             <CloudCanvas></CloudCanvas>
            </div>
        <div className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl mx-auto flex  items-start `}>
  
            <div className='w-[90vh] xs:w-[50vh] sm:w-[80vh] md:w-[85vh] z-50bg-black'>
              <h1 className={`text-3xl text-neutral `}>Hi there!</h1>
              <h2 className='text-4xl text-neutral'>I'm Jonathan Gonzalez</h2>
              <p className={`${styles.heroHeadText}  text-neutral  text-gradient`}>Front-end Developer & Passionate Designer</p>
            </div>
   
        </div>

      </section>
        </>
    )
}


// export default SectionWrapper(Hero,'hero');
export default Hero