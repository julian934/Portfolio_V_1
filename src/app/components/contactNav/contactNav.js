import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Home from '../../images/homeicon.png'
import About from '../../images/icons8-about-me-50.png'
import Projects from '../../images/icons8-projects-50.png'
import Resume from '../../images/icons8-resume-48.png'

const ContactNav = () => {
  return (
    <div className=" md:flex max-sm:flex max-sm:flex-row max-sm:justify-around  md:self-end md:justify-around " >
      <div className=" md:flex md:flex-col max-sm:flex-row  flex group-hover:stroke-white" >
      <Link className="  " href='/' >
         <Image className=" bg-amber-500  hover:bg-white md:rounded-2xl max-sm:rounded-2xl " src={Home} alt='Home'  />
      </Link>
      </div>
      <div className=" md:flex md:flex-col group-hover:stroke-white" >
      <Link className=" " href='/' >
         <Image className=" bg-amber-500 hover:bg-white md:rounded-2xl max-sm:rounded-2xl  " src={About} alt='About' />
      </Link>
      </div>
      <div className="md:flex md:flex-col group-hover:stroke-white " >
      <Link className=" " href='/' >
         <Image className=" bg-amber-500 hover:bg-white md:rounded-2xl max-sm:rounded-2xl  " src={Projects} alt='Projects' /> 
      </Link>
      </div>
      <div className=" md:flex md:flex-col group-hover:stroke-white " >
      <Link className=" " href='/' >
         <Image className=" bg-amber-500 hover:bg-white  md:rounded-2xl max-sm:rounded-2xl  " src={Resume} alt='Resume' /> 
        </Link>
      </div>
        
        
    </div>
  )
}

export default ContactNav