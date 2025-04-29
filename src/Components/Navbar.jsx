import React, { useState } from 'react'
import { logo, close, menu } from "../assets"
import { navLinks } from '../constants'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [active, setActive] = useState("Home")
    return (
        <nav className='max-w-7xl mx-auto flex justify-between items-center py-4 p-1 sm:p-0 sm:py-6'>
            <img src={logo} alt="logo" className="w-[124px] h-[32px] cursor-pointer" />
            <ul className='hidden sm:flex flex-1 justify-end items-center'>
                {navLinks.map((link, index) => (
                    <li key={index}
                        className={`pl-14 text-[16px] font-normal ${active === link.title ? "text-white" : "text-gray-400"} poppins cursor-pointer`} onClick={()=>setActive(link.title)}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>

            <div className='sm:hidden flex justify-end items-center '>
                <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
                    onClick={() => setToggle(!toggle)} />


                <div className={`${!toggle ? "hidden" : "flex"} bg-gradient-to-b from-black to-gray-900   min-w-[140px] rounded-xl  sidebar absolute top-20 right-0 mx-4 my-2 `}>
                    <ul className='flex flex-1 flex-col justify-end items-center '>
                        {navLinks.map((link, index) => (
                               <li key={index}
                               className={`py-[15px] text-[16px] font-normal ${active === link.title ? "text-white" : "text-gray-400"} poppins cursor-pointer`} onClick={()=>setActive(link.title)}>
                               <a href={`#${link.id}`}>{link.title}</a>
                           </li>
                        ))}
                    </ul>
                </div>


            </div>
        </nav>
    )
}

export default Navbar