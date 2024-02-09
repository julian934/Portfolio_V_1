import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Instagram from '../../images/icons8-instagram-50.png'
import GitHub from '../../images/icons8-github-48.png'
import LinkedIn from '../../images/icons8-linkedin-logo-50.png'
import Email from '../../images/icons8-email-50.png'


//Use socials components
const Socials = () => {
  return (
    <div className=" z-50 max-sm:flex max-sm:justify-self-center max-sm:w-full max-sm:justify-around md:flex md:justify-center md:text-center md:flex-row md:justify-around "  >
      <div className='max-sm:flex' >
        <Link className='' href='' >
           <Image className='bg-amber-500 hover:bg-white max-sm:rounded-xl md:rounded-xl ' src={Instagram} alt='Instagram' />
        </Link>
      </div>
      <div className='' >
        <Link className='' href='https://github.com/julian934' >
           <Image className='bg-amber-500 hover:bg-white max-sm:rounded-xl  md:rounded-xl' src={GitHub} alt='GitHub' />
        </Link>
      </div>
      <div className='' >
        <Link className='' href='https://www.linkedin.com/in/julian-borner-709b91b7/' >
           <Image className='bg-amber-500 hover:bg-white max-sm:rounded-xl  md:rounded-xl ' src={LinkedIn} alt='LinkedIn' />
        </Link>
      </div>
      <div className='' >
        <Link className='' href='/contact' >
           <Image className='bg-amber-500 hover:bg-white max-sm:rounded-xl  md:rounded-xl ' src={Email} alt='Email' />
        </Link>
      </div>
      </div>
  )
}

export default Socials