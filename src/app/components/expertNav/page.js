'use client'
import React from 'react'
import Link from 'next/link'
import Logo from '../../images/Julian_Borner_Logo.png'
import Image from 'next/image'

const NavBar = () => {
    //Replace with Icons?
    //Incorporate image placement
  return (
    <div className=" flex row-start-1 col-start-1 col-span-6 md:col-start-2 md:col-span-6 md:justify-center max-sm:grid md:grid md:grid-rows-2 max-sm:grid-rows-1 md:content-center  grid-cols-6 z-40 pt-8  " >
        <div className=" flex   md:col-start-2 md:row-start-1 max-sm:col-start-1 md:mt-20 ml-8 "  >
           <Link  className=" text-md md:text-xl text-xl  "  href="/home" >Home</Link>
        </div>
        <div className=" md:col-start-3  max-sm:col-start-2 ml-8 md:mt-20 md:ml-0" >
           <Link className=" text-md md:text-xl text-xl     "  href="/expertise" >Expertise</Link>
        </div>
        <div className=" md:col-start-4 max-sm:col-start-4 mr-4 md:mr-0 md:mt-20 " >
           <Link className="  text-md md:text-xl text-xl   "  href="" >Projects</Link>
        </div>
        <div className=" max-sm:col-start-5 md:col-start-5  ml-4  md:ml-0 md:mt-20  "  >
            <Link className="   text-md md:text-xl text-xl "   href="" >Contact</Link>
        </div>
        
        
        <div className="flex  self-start row-start-2 row-end-2 max-sm:mb-60  max-sm:col-start-1 max-sm:col-span-6  md:row-start-1  md:col-start-1 md:col-end-2 md:mb-20 max-sm:mb-24  pb-8  " >
        <Image className=" w-full scale-150  object-cover" src={Logo} alt="logo" />
      </div>
        </div>
  )
}

export default NavBar