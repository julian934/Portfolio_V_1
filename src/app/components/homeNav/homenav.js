'use client'
import React from 'react'
import Image from 'next/image'
import About from '../../images/icons8-about-me-100.png'
import Resume from '../../images/icons8-resume-48.png'
import Projects from '../../images/icons8-projects-50.png'
import Contact from '../../images/icons8-contact-100.png'
import Link from 'next/link'

const HomeNav = () => {
  return (
    <div className='md:flex md:flex-col max-sm:flex max-sm:flex-row  max-sm:h-full
     md:justify-between md:-mt-20 md:z-50 max-sm:w-full max-sm:justify-around max-sm:items-center  ' >
        <div className=' max-sm:flex md:w-2/3 group-hover:stroke-white   max-sm:z-50  ' >
            <Link className="  "  href='/about'  >
               <Image  className=' max-sm:w-12
                bg-amber-500 hover:bg-white max-sm:rounded-xl  border-2 border-white md:w-full md:h-full md:rounded-xl' src={About} alt='About me' />
            </Link>
        </div>
        <div className=" max-sm:flex  md:w-2/3 group-hover:stroke-white  max-sm:z-50 " > 
           <Link className="  " href="/resume"  >
               <Image  className='max-sm:w-12
               bg-amber-500 hover:bg-white max-sm:rounded-xl border-2 border-white md:w-full md:rounded-xl ' src={Resume} alt='Resume' />
            </Link> 
        </div>
        <div className="   max-sm:flex md:w-2/3 group-hover:stroke-white max-sm:z-50 " >
            <Link className="  " href="/newProjects"  >
               <Image  className='max-sm:w-12
               bg-amber-500 hover:bg-white max-sm:rounded-xl border-2 border-white md:w-full md:rounded-xl ' src={Projects} alt='Projects' />
            </Link>
        </div>
        <div className="  max-sm:flex  md:w-2/3 group-hover:stroke-white max-sm:z-50 " >
            <Link className="  " href="/contact" >
               <Image  className='max-sm:w-12
               bg-amber-500  hover:bg-white max-sm:rounded-xl border-2 border-white md:rounded-xl ' src={Contact} alt='Contact' />
            </Link>
        </div>
    </div>
  )
}

export default HomeNav