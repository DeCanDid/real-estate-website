import React, { useState } from 'react'
import './Header.css'
import Logo from '../LogoAndLinks/Logo';
import { BiMenuAltRight } from "react-icons/bi";
import NavLinks from '../LogoAndLinks/NavLinks';
import { FaBars } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';




const Header = () => {



    return (
        <BrowserRouter>
            <header className=" bg-transparent sticky top-0 z-[20] mx-auto flex-wrap flex w-full items-center justify-between  text-white  p-2">
                <Logo /> 
                <NavLinks/>
                

            </header>
        </BrowserRouter>
    )
}

export default Header



{/* <div>
                <Link to="/residence">Residence</Link>
                <Link to="/values">Our Values</Link>
                <Link to="/contactus">Contact Us</Link>
                <Link to="/getstart">Get Started</Link>
                <button className='button'><Link to="/residence">Contact</Link></button>
            </div> */}
{/* <NavLinks /> */ }