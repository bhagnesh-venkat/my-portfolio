/* eslint-disable no-unused-vars */
import React from 'react'
import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {HashLink as Link} from 'react-router-hash-link'


const Navbar = () => {
  return (
    <nav className='w-full bg-black-900 mb-5 flex flex-wrap items-center justify-between py-8'>
    <div className="flex items-center w-full lg:w-auto">
        <img className="mx-2 w-14" src={logo} alt="KVB"/>
        <div className="flex flex-wrap justify-center ml-3 text-sm gap-3 w-full lg:w-auto">
            <Link to='#about' className="cursor-pointer">About</Link>
            <Link to='#technologies' className="cursor-pointer">Technologies</Link>
            <Link to='#experience' className="cursor-pointer">Experience</Link>
            <Link to='#projects' className="cursor-pointer">Projects</Link>
            <Link to='#contact' className="cursor-pointer">Contact</Link>
        </div>
    </div>
</nav>
  )
}

export default Navbar