'use client'
import React from 'react'
import Link from 'next/link'
import Logo from '../../images/Julian_Borner_Logo.png'
import Image from 'next/image'

const NavBar = () => {
    //Replace with Icons?
    //Incorporate image placement
  return (
    <div className=" flex row-start-1 col-start-1 col-span-6 md:col-start-2 md:col-span-6 md:justify-center grid grid-rows-1 grid-cols-6  pt-8  " >
        <div className=" flex   md:col-start-2 col-start-1 ml-8 "  >
           <Link  className="  text-md md:text-xl text-xl md:border-solid md:border-black  md:rounded-2xl md:px-2 md:border  "  href="/Home" >Home</Link>
        </div>
        <div className=" md:col-start-3  col-start-2 " >
           <Link className=" text-md md:text-xl text-xl  md:border-solid md:border-black   md:border md:px-2 md:rounded-2xl  "  href="/expertise" >Expertise</Link>
        </div>
        <div className=" md:col-start-4 col-start-3  " >
           <Link className="  text-md md:text-xl text-xl  md:border-solid md:border-black  md:border md:px-2 md:rounded-2xl "  href="/projects" >Projects</Link>
        </div>
        <div className=" col-start-5  col-start-4  "  >
            <Link className="   text-md md:text-xl text-xl md:border-solid md:border-black md:border md:px-2  md:rounded-2xl "   href="/contact" >Contact</Link>
        </div>
        
        
        <div className="flex self-center row-start-2  col-start-1 col-span-5  md:row-start-2 md:col-start-2 md:mb-20 mb-24 md:ml-32  pb-8  " >
        <Image className=" w-96 scale-150  object cover" src={Logo} alt="logo" />
      </div>
        </div>
  )
}

export default NavBar