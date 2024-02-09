import React from 'react'
import Image from 'next/image'
import copyright from '../../images/icons8-copyright-30.png'

const AboutFooter = () => {
  return (
    <div className="max-sm:flex max-sm:flex-row max-sm:space-around max-sm:max-sm:place-self-center max-sm:grid max-sm:grid-cols-2
     max-sm:grid max-sm:content-center max-sm:w-full 
     max-sm:grid-cols-2 md:flex md:flex-row md:space-around md:justify-start  md:self-center
      " ><Image className='max-sm:col-start-1 max-sm:justify-self-center max-sm:col-start-1 max-sm:ml-6
      md:col-start-1 md:justify-self-end  ' src={copyright} alt='Copyright' /> 
     <p className=" max-sm:col-start-2 max-sm:justify-start max-sm:-ml-16 max-sm:w-full max-sm:col-start-2 max-sm:justify-self-start max-sm:text-sm md:justify-self-start " >All Rights Reserved by Julian Borner.</p></div>
  )
}

export default AboutFooter