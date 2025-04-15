import {motion} from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn,textVariant, } from '../utils/motion'
import { technologies } from '../constants'
import { useEffect } from 'react';

interface Props{
    index:number,
    name?:string,
    icon?: string; // Assuming icon is a URL string
}

const Skill = ({index,name,icon}:Props)=>(
   
    <li key={index}>
        <motion.div className="avatar" >
            <div className="w-24 bg-white/20 shadow-md shadow-black/5 object-contain rounded-full p-4">
                <img alt={name} src={icon} />
            </div>
        </motion.div>
    </li>
)

const Skills = ()=>{

    useEffect(()=>{
        const scrollers = document.querySelectorAll(".scroller")

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }


        function addAnimation(): void {
            scrollers.forEach((scroller: Element) => {
              if (scroller instanceof HTMLElement) {
                // add data-animated="true" to every `.scroller` on the page
                scroller.setAttribute("data-animated", "true");
          
                // Make an array from the elements within `.scroller-inner`
                const scrollerInner: HTMLElement | null = scroller.querySelector(".scroller__inner");
          
                if (scrollerInner) {
                    const scrollerContent: HTMLElement[] = Array.from(scrollerInner.children) as HTMLElement[];
          
                  // For each item in the array, clone it
                  // add aria-hidden to it
                  // add it into the `.scroller-inner`
                  scrollerContent.forEach((item: HTMLElement) => {
                    const duplicatedItem: HTMLElement = item.cloneNode(true) as HTMLElement;
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                  });
                }
              }
            });
          }
    },[])


    return(
        <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} !text-neutral`}>My Personal</p>
            <h2 className={`${styles.sectionHeadText} !text-neutral`}>Expertise</h2>
        </motion.div>

        <div className='w-full flex-wrap grid lg:grid-cols-2 grid-cols-1 mt-12 '>
            <motion.div variants={fadeIn("right","spring",0.1,1)} className=' justify-center items-center p-4'>

                <div className="mockup-window  bg-base-300/20">
                    <div className=" justify-center px-4 py-16 bg-base-200/45">
                    <h2 className={`${styles.sectionSubText}  text-center text-bold !text-neutral/70`}>
                            Frontend Developer
                        </h2>
                        <p className='mt-3 !text-neutral/70  font-medium text-[17px] max-w-3xl leading-[30px] p-4 text'>
                            Proficient in React, Vue.js, and Angular, with a strong passion for UI/UX. I build web applications efficiently, prioritizing a seamless user experience.
                        </p>
                    </div>
                </div>
                

            </motion.div>
            <motion.div variants={fadeIn("left","spring",0.1,1)} className='  justify-center items-center p-4'>
                <div className="mockup-browser  bg-neutral/10">
                    <div className="mockup-browser-toolbar ">
                        <div className="input !input-ghost !bg-[#493c4b]/30">https://www.tvkaes.dev</div>
                    </div>
                    <div className="justify-center px-4 py-16 bg-base-200/45">
                        <h2 className={`${styles.sectionSubText} !text-neutral/70  text-center`}>
                           Software & Web Dev
                        </h2>
                        <p className='mt-3 !text-neutral/70 font-medium text-[17px] max-w-3xl leading-[30px] p-1.5'>
                        Web and software developer specializing in JavaScript and TypeScript, with expertise in both frontend and backend solutions using Node.js and MongoDB.
                        </p>
                    </div>
                </div>

            </motion.div>
            
        </div>
        <div className='mt-20 flex gap-7'>
        <motion.div variants={fadeIn(" "," ",0.1,1)} className="scroller" data-speed="slow">
            <ul className="tag-list scroller__inner">
                 {
                technologies.map((obj,index)=>(
                    <Skill key={index} index={index} {...obj}/>
                ))
                }
            </ul>
        </motion.div>
           

        </div>
        </>

    )
}



const WrappedSkills = SectionWrapper(Skills, 'skills');
export default WrappedSkills;