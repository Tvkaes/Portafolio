
import { styles } from '../styles'
import ModelCanvas from './canvas/sphere'






const Hero = ()=>{


    return(
        <>
        <section className='relative w-full h-screen mx-auto flex flex-wrap '>
        <div className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          

          <div>
            <div>
            <h1 className={`text-xl text-neutral`}>Hi there!</h1>
            <h2 className='text-3xl text-neutral'>Im Jonathan Gonzalez</h2>
            <p className={`${styles.heroHeadText} mt-2 text-neutral w-[50vh] lg:w-[70vh] text-gradient`}>Front-end Developer & Passionate Designer</p>
            </div>
            
            <div  className='-z-100 h-full w-full relative bottom-0 overflow-hidden'>
             <ModelCanvas></ModelCanvas>
            </div>

            
          </div>
          
        </div>

      </section>
        </>
    )
}


// export default SectionWrapper(Hero,'hero');
export default Hero