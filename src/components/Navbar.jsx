/* eslint-disable no-unused-vars */
import React from 'react'
import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {HashLink as Link} from 'react-router-hash-link'


const Navbar = () => {
  return (
      <nav className='w-full lg:w-1/2bg-black-900 mb-5 flex items-center justify-between py-8'>
          <div className="flex flex-shrink-0 items-center w-20">
              <img className="mx-2 w-14" src={logo} alt="KVB"/>
              <div className="flex justify-center ml-3 text-sx gap-3">
                <Link to='#about' className="cursor-pointer">About</Link>
                <Link to='#technologies' className="cursor-pointer">Technologies</Link>
                <Link to='#experience' className="cursor-pointer">Experience</Link>
                <Link to='#projects' className="cursor-pointer">Projects</Link>
              </div>
          </div>
          <div className='m-2 w-50 flex flex-wrap items-center justify-center gap-4 text-4x'>
              <a href="https://www.linkedin.com/in/kona-venkata-bhagnesh-592253172/" target='_blank'><FaLinkedin className='size-6'></FaLinkedin></a>
              <a href="https://github.com/bhagnesh-venkat?tab=repositories" target='_blank'><FaGithub className='size-6'></FaGithub></a>
              <Link to='#contact' className="cursor-pointer">Contact Me</Link>
          </div>
      </nav>
  )
}

export default Navbar