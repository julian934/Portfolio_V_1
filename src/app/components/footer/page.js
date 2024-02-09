import React from 'react'
import Link from 'next/link'
import Instagram from '../../images/icons8-instagram-50.png'
import linkedin from '../../images/icons8-linkedin-logo-50.png'
import github from '../../images/icons8-github-48.png'
import email from '../../images/icons8-email-50.png'
import Image from 'next/image'
const Footer = () => {
  

  //Customize Home Page Grids
  //Replace words with icons
  return (
    <section  className=" flex justify-between col-start-1 col-end-5   md:flex md:grid md:grid-cols-6
     md:grid-rows-6 md:col-start-1 
     md:col-end-6 md:col-end-4 md:row-start-5 md:row-end-8 md:space-between  h-full w-full" >
      
       <div className=" flex justify-between grid grid-cols-6 grid-rows-2 ml-8   md:flex md:grid md:grid-cols-6 md:grid-rows-2   md:col-start-3 md:col-end-6   md:row-start-1 md:row-end-6  md:justify-around "  >
       <Link className="  col-start-1   md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2  text-2xl md:justify-center "   href='' ><Image className=" bg-amber-500 rounded-md   "  src={Instagram} alt=" Instagram" /></Link>
       <Link className="  col-start-3  md:col-start-3 md:col-end-4  text-2xl md:row-start-1 md:row-end-2  "   href='' ><Image className=" bg-amber-500 rounded-md " src={linkedin} alt='linkedin' /></Link>
       <Link className="  col-start-5 md:col-start-4 md:col-end-5   text-2xl md:row-start-1 md:row-end-2    "   href='' ><Image className=" bg-amber-500 rounded-md " src={github} alt=" github " /></Link>
       <Link className="  col-start-7  md:col-start-5  md:col-end-6 text-2xl  md:row-start-1 md:row-end-2 "   href='' ><Image className=" bg-amber-500 rounded-md   " src={email} alt=" email " /></Link>
       </div>
    </section>
  )
}

export default Footer