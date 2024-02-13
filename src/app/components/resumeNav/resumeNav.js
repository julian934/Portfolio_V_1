import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Home from '../../images/icons8-home-96.png'
import About from '../../images/icons8-about-me-100.png'
import Resume from '../../images/icons8-resume-100.png'
import Projects from '../../images/icons8-experience-100.png'
import Contact from '../../images/icons8-contact-100.png'

const ResumeNav = () => {
  return (
    <div className=" max-sm:row-start-1 max-sm:col-start-3 max-sm:flex max-sm:flex-row max-sm:justify-around max-sm: h-full
    max-sm:self-start  max-sm:w-full  max-sm:z-30 max-sm:self-center max-sm:space-y-4
     md:row-start-1 md:h-38 md:col-start-2  md:flex md:flex-row md:space-x-4 md:space-around md:self-end " >
      {/* Include both mobile and FUll-SIze Nav */} {/* div assignmen in parent element may have rendered current row and col assignments irrelevant. Confirm? */}
      {/* Define max-width and max-height for each icon. */}
         <div className='md:flex md:flex-col group-hover:stroke-white max-sm:flex max-sm:h-full max-sm:z-50 ' >
          <Link className=''  href='/' >
          <Image className='bg-amber-500 hover:bg-white md:rounded-xl max-sm:rounded-lg  max-sm:w-12 max-sm:h-12 max-sm:mt-4
                            md:w-4/5  ' src={Home} alt='' />
          </Link>
         </div>
         <div className='md:flex md:flex-col group-hover:stroke-white  max-sm:z-50  ' >
          <Link className=''  href='/about' >
          <Image className='bg-amber-500 hover:bg-white md:rounded-xl max-sm:rounded-lg  max-sm:w-12 max-sm:h-12
                            md:w-4/5  ' src={About} alt='' />
          </Link>
         </div>
         <div className='md:flex md:flex-col group-hover:stroke-white max-sm:z-50  ' >
          <Link className=''  href='/newProjects' >
          <Image className='bg-amber-500 hover:bg-white md:rounded-lg max-sm:rounded-lg max-sm:w-12 max-sm:h-12 
                            md:w-4/5  ' src={Projects} alt='' />
          </Link>
         </div>
         <div className='md:flex md:flex-col group-hover:stroke-white max-sm:z-50  ' >
          <Link className=''  href='/contact' >
          <Image className='bg-amber-500 hover:bg-white md:rounded-lg max-sm:rounded-lg max-sm:w-12 max-sm:h-12 
                             md:w-4/5 ' src={Contact} alt='' />
          </Link>
         </div>
        </div>
  )
}

//Double check the 

export default ResumeNav