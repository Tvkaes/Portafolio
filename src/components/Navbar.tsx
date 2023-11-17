import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { useState } from "react";
import { styles } from "../styles";
import { logo } from "../assets";

const Navbar = ()=>{

    const [active,setActive] =useState("")

    return(
        <>
         <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 backdrop`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link to={"/"} className='flex items-center gap-2 btn btn-ghost' onClick={()=>{
                setActive("");
                window.scrollTo(0,0)
                }}>
                <img src={logo} className='w-9 h-9 object-contain'></img>
                <p className='text-neutral text-[18px] font-bold cursor-pointer flex'>Jonathan &nbsp; <span className='sm:block hidden'> Gonzalez</span></p>
                
                </Link>
                <ul className=' list-none hidden sm:flex flex-row gap-10 '>
                    {navLinks.map((link)=>(
                    <li onClick={()=> setActive(link.title)} key={link.id} className={`${active === link.title ? "text-opal" :"text-neutral"} hover:text-white text-[18px] font-medium cursor-pointer`}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                    ))}
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center drawer drawer-end'>     
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                    {/* Page content here */}
                        <label  htmlFor="my-drawer-4" className="btn drawer-button btn-ghost">
                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        </label>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content items-center'>
                            {navLinks.map((link)=>(
                            <li onClick={()=> setActive(link.title)} key={link.id} className={`${active === link.title ? "text-white" :"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
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