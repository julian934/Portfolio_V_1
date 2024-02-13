'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Instagram from '../../images/icons8-instagram-50.png'
import LinkedIn from '../../images/icons8-linkedin-logo-50.png'
import Github from '../../images/icons8-github-48.png'
import Email from '../../images/icons8-email-50.png'

const HomeFooter = () => {
    {/*Make sure you add links to your social media. */}
  return (
    <div className='flex max-sm:w-full max-sm:justify-around max-sm:items-start  max-sm:h-full
      md:w-3/5 md:h-full md:flex md:flex-row md:justify-around md:items-end ' >
        <div className=' md:flex   group-hover:stroke-white md:justify-around md:w-3/4 md:h-full' >
            <Link className=' md:flex md:w-1/3 md:h-2/5 ' href='https://www.instagram.com/jbthedev' >
                <Image className='bg-amber-500 hover:bg-white md:w-full border-2 border-white md:h-full md:rounded-xl 
                max-sm:rounded-xl   ' src={Instagram} alt='Instagram' />
                </Link>
        </div>
        <div className=' md:flex  group-hover:stroke-white md:justify-around md:w-3/4 md:h-full  ' >
            <Link className='group-hover:stroke-white md:flex md:w-1/3 md:h-2/5  ' href='https://www.linkedin.com/in/julian-borner-709b91b7/'  >
                <Image className='bg-amber-500 hover:bg-white md:w-full border-2 border-white md:rounded-xl max-sm:rounded-xl ' src={LinkedIn} alt='LinkedIn' />
                </Link>
        </div>
        <div className=' md:flex  group-hover:stroke-white md:justify-around md:w-3/4 md:h-full   ' >
            <Link className='md:flex md:w-1/3 md:h-2/5  ' href='https://github.com/julian934' >
                <Image className='bg-amber-500 hover:bg-white md:w-full border-2 border-white md:rounded-xl max-sm:rounded-xl ' src={Github} alt='Github' />
                </Link>
        </div>
        <div className=' md:flex    group-hover:stroke-white md:justify-around md:w-3/4 md:h-full  ' >
            <Link className='md:flex md:w-1/3 md:h-2/5 ' href='/contact' >
                <Image className='bg-amber-500  hover:bg-white md:w-full border-2 border-white md:rounded-xl max-sm:rounded-xl ' src={Email} alt='Email' />
                </Link>
        </div>
    </div>
  )
}

export default HomeFooter