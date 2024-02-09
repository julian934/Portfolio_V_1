'use client'
import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className=" grid flex col-start-1 col-end-6 row-start-1 row-end-2 w-full grid-cols-6 grid-rows-3 justify-items-center space-x-10  p-14  " >
       
        <Link  className=" col-start-2 col-end-3 row-start-1 row-end-2 justify-self-end text-lg  "  href="/Home" >Home</Link>
        <Link className=" col-start-3 col-end-4 justify-self-center  row-start-1 row-end-2 text-lg "  href="/expertise" >Expertise & Accreditation</Link>
        <Link className=" col-start-4 col-end-4 justify-self-start    row-start-1 row-end-2  text-lg   "  href="" >Projects</Link>
        <Link className=" col-start-4 col-end-5 justify-self-end row-start-1 row-end-2  text-lg"   href="" >Contact</Link>
         
        </div>
  )
}

export default NavBar