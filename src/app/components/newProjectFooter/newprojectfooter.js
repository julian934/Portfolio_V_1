import React from 'react'
import copyright from '../../images/icons8-copyright-30.png'
import Image from 'next/image'

const NewProjectFooter = () => {
  return (
    <div className="max-sm:flex max-sm:flex-row max-sm:justify-around md:flex md:flex-row  md:justify-around md:space-x-4 " >
      <Image className="max-sm:justify-end bg-white rounded-3xl md:justify-start   " src={copyright} alt='copyright' /><h3 className=" text-white " >All Rights Reserved By Julian Borner.</h3>
      </div>
  )
}

export default NewProjectFooter