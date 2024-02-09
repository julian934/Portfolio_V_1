import React from 'react'
import Image from 'next/image'
import Logo from '../../images/Julian_Borner_Logo.png'

//Replace text with logo
//Note: Nested grids can be created based off remaining space.
//For the time being, go around broken text. White it out, or even replace with a span.
//fix page stretch
const Title = () => {
  return (
    <section className=" flex grid col-start-1 col-end-6   row-start-1 row-end-3 w-full    " id="Home" >
            <div className=" flex col-start-2 col-end-5 row-start-1 row-end-3 pb-10   w-full " >
                <Image className="  scale-150  w-full h-1/2 w-fit self-center   "  src={Logo} alt="Julian's logo" />
            </div>
            <div className=" col-start-4 col-end-4  row-start-2 row-end-3  " >
            <hr className=" bg-yellow-800  w-full  origin-center rotate-90  " />
            </div>
            <div className=" grid flex col-start-4 col-end-5 row-start-2 row-end-3 grid-cols-3 grid-rows-3  pl-20 z-10  "  >
            <h3 className="text-xl w-full  pl-10 col-start-1 col-end-3 row-start-1 row-end-2 self-start justify-self-end ml-20 text-transparent " >Full-Stack Software Engineer, App Developer & Designer</h3>
            </div>
            <div className=" flex  col-start-5 col-end-5 row-start-2 row-end-3 z-20  text-3xl " >
              <h2 className=" flex  " >
                Full-Stack Software Engineer, App Developer & Designer
              </h2>

            </div>
             
        </section  >
  )
}

export default Title