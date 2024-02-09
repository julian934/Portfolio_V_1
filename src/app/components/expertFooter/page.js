import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import email from '../../images/icons8-email-50.png'
import instagram from '../../images/icons8-instagram-50.png'
import github from '../../images/icons8-github-48.png'
import linkedin from '../../images/icons8-linkedin-logo-50.png'
const Footer = () => {
  

  //Customize Home Page Grids
  //Replace words with icons
  return (
    <section  className=" max-sm:mb-20  md:mb-28 row-start-5 md:row-start-5 md: col-start-2 col-span-4 justify-between md:mt-8  " >
      <div  className="flex justify-between"  >
      <Link className="  "   href='' ><Image src={instagram} alt='instagram'  /></Link>
       <Link className="   "   href='' ><Image src={linkedin} alt='linkedin' /></Link>
       <Link className="    "   href='' ><Image src={github} alt='github'  /></Link>
       <Link className=" "   href='' ><Image src={email} alt='email' /></Link>

      </div>
      
    </section>
  )
}

export default Footer