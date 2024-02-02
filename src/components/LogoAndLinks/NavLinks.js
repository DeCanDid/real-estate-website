import React, { useState } from 'react'
// import {NavLink} from 'react-router-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Menu, X} from 'lucide-react'

const Nav = () => {
  return (
    <>
      <div className='h hover:bg-blue-500 hover:rounded cursor-pointer p-2 text-center'><Link to="/abt">Residence</Link></div>
      <div className='hover:bg-blue-500 hover:rounded cursor-pointer p-2 text-center'><Link to="/values">Our Values</Link></div>
      <div className='hover:bg-blue-500 hover:rounded cursor-pointer p-2 text-center'><Link to="/contactus">Contact Us</Link></div>
      <div className='hover:bg-blue-500 hover:rounded cucrsor-pointer p-2 text-center'><Link to="/getstart">Get Started</Link></div>
      <button className='button'><Link to="/residence">Contact</Link></button>


    </>
  )
}


const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    console.log("toggleNavbar")
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className="flex justify-end">
        <div></div>
        <div className="hidden w-full  justify-between gap-14 md:flex">
          <Nav />
        </div>
        <div className=' md:hidden'>
          <button onClick={toggleNavbar}>
            {
              isOpen ? <X /> : <Menu/>
            }
          </button>
        </div>
      </nav>

      {
        isOpen && (
          <div className='flex flex-col items-center gap-3 basis-full w-[300px] bg-opacity-50 bg-slate-600 backdrop-blur p-2  text-white'>
            <Nav/>
          </div>
        )
      }

    </>
  )
}


export default NavLinks