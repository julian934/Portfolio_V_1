import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Home from '../../images/homeicon.png'
import Projects from '../../images/icons8-projects-50.png'
import Resume from '../../images/icons8-resume-48.png'
import Contact from '../../images/icons8-contact-100.png'

const AboutNav = () => {
  return (
    <div className=' max-sm:flex max-sm:flex-row max-sm:w-full max-sm:justify-around md:flex md:flex-row  md:justify-around  md:w-full md:self-start z-50' >
      <div className='md:flex  md:w-full ' >
        <Link className='' href='' > 
           <Image className=' max-sm:w-12 max-sm:rounded-lg md:flex  md:w-full  bg-amber-500  md:h-1/2 md:rounded-lg hover:bg-white ' src={Home} alt='Home' />
        </Link>
      </div>
      <div className='md:flex md:w-full' >
        <Link className='' href='' > 
           <Image className=' max-sm:w-12 max-sm:rounded-lg md:flex md:w-full bg-amber-500  md:h-1/2 md:rounded-lg hover:bg-white ' src={Projects} alt='Projects' />
        </Link>
      </div>
      <div className='md:flex md:w-full' >
        <Link className='' href='' > 
           <Image className=' max-sm:w-12 max-sm:rounded-lg md:flex md:w-full bg-amber-500 md:w-3/4 md:h-1/2 md:rounded-lg hover:bg-white ' src={Resume} alt='Resume' />
        </Link>
      </div>
      <div className='md:flex md:w-full' >
        <Link className='' href='' > 
           <Image className=' max-sm:w-12 max-sm:rounded-lg md:flex md:w-full bg-amber-500 md:w-3/4 md:h-1/2 md:rounded-lg hover:bg-white ' src={Contact} alt='Contact' />
        </Link>
      </div>
    </div>
  )
}
//Include mobile navbar options.

export default AboutNav