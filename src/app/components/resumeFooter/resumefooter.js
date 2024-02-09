import React from 'react'
import Image from 'next/image'
import copyright from '../../images/icons8-copyright-30.png'

const ResumeFooter = () => {
  return (
    <div className=" max-sm:text-white max-sm:flex max-sm:flex-row max-sm:space-x-2 max-sm:w-full md:flex md:flex-row md:w-full " ><Image className=" max-sm:justify-end bg-white rounded-3xl md:justify-start " src={copyright} alt='copyright' /><h3>All Rights Reserved By Julian Borner</h3></div>
  )
}

export default ResumeFooter