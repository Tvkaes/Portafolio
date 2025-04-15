
import { navLinks } from "../constants";
import { useState } from "react";
import { styles } from "../styles";
import {motion} from 'framer-motion'



const Navbar = ()=>{

    const [active,setActive] =useState("")

    return(
        <>
         <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 backdrop`}>
            <div className='w-full flex justify-end items-center max-w-7xl mx-auto'>
                <div className="flex space-x-1 ">
                   
                    {navLinks.map((tab)=>(
                        <a key={tab.id} onClick={()=>setActive(tab.id)}
                            href={`/#${tab.id}`}
                            style={{WebkitTapHighlightColor:"transparent"}}
                            className={`${active === tab.id ? "":"hover:text-wwhite/60"} relative rounded-full px-3 py-1.5 text-md font- text-[#875575]  transition focus-visible:outline-2`}
                        >
                            {active === tab.id && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute inset-0 z-10 bg-white mix-blend-difference"
                                    style={{borderRadius:9999}}
                                    transition={{type:"spring",bounce:0.2,duration:0.6}}
                                />
                            )}
                           
                            {tab.title}
                        </a>
                    ))}

                </div>

                <div className='sm:hidden flex flex-1 justify-end items-center drawer drawer-end '>     
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                    {/* Page content here */}
                        <label  htmlFor="my-drawer-4" className="btn drawer-button btn-ghost">
                            <svg className="swap-off text-neutral" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        </label>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <ul className='menu p-4 w-80 min-h-full bg-white text-base-content items-center'>
                            {navLinks.map((link)=>(
                            <li onClick={()=> setActive(link.title)} key={link.id} className={`${active === link.title ? "text-neutral" :"text-neutral/40"} hover:text-neutral text-[18px] font-medium cursor-pointer`}>
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
};

export default Navbar;