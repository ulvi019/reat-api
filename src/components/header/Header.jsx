import React from 'react'
import logo from '../../images/compar.png'
import './header.scss'
import {  NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className="header">
     <div className="container w-full px-5 md:w-4/5 md:m-auto ">
          <div className="boxes w-full flex justify-between  items-center">
               <div className="logo">
                    <img className='w-full' src={logo} alt="" />
               </div>
               <div className="nav-bar hidden lg:block">
                    <ul className='flex font-bold text-sm lg:text-lg'>
                         <li><NavLink to={"/"}>Home</NavLink>  </li>
                         <li><NavLink to={"/about"}>About</NavLink>  </li>
                         <li><NavLink to={"/contact"}>Contact</NavLink>  </li>
                        
                    </ul>
               </div>
               <div className="icon text-2xl block lg:hidden"><i class="fa-solid fa-bars"></i></div>
          </div>
     </div>
    </div>
    </>
  )
}

export default Header