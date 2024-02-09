'use client'
import React from 'react'
import Image from 'next/image'
import Logo from '../../images/Julian_Borner_Logo.png'

const ImageItem = () => {
  return (
    <div className="flex self-center row-start-2 " >
        <Image className=" w-96 " src={Logo} alt="logo" />
      </div>
  )
}

export default ImageItem