import React from 'react'
import NewProjectNav from '../components/newProjectNav/newprojectnav'
import PortfolioFilter from '../components/portfolioFilter/portfoliofilter'
import Image from 'next/image'
import NewProjectFooter from '../components/newProjectFooter/newprojectfooter'
//import Lamborghini from '../images/Lamborghini_Terzo_Milleniojpg'
import Legendary_Studios from '../images/Legendary_Studios.jpg'
import Sade from '../images/Sade.jpg'

import workInProgress from '../images/work_in_progress.jpg'
import Lamborghini from '../images/Lamborghini_Terzo_Millenio.jpg'
import Link from 'next/link'




const NewProjects = () => {
  return (
    <div className=" grid flex max-sm:grid-cols-3  max-sm:h-full md:bg-stone-900 max-sm:bg-zinc-900
    md:h-full max-sm:space-y-16 md:grid-cols-5 md:grid-rows-5 md:items-center md:space-y-20 "  >
    {/* NavBar*/}
       
        <div className=" max-sm:row-start-1 max-sm:flex-row max-sm:col-start-1 max-sm:col-span-3  max-sm:-py-4 max-sm:relative max-sm:top-2 
                         md:row-start-1 md:row-span-2  md:col-start-3 md:col-span-2 md:flex md:pt-20 md:justify-around md:self-center 
                          " >
        <NewProjectNav/>
        </div>
        {/* Portfolio Body */}
        {/* Remove padding throughout body for responsiveness */}
        {/*Troubleshoot for responsiveness */}
        <div className=" max-sm:border-2 max-sm:border-amber-500 max-sm:rounded-xl 
                         max-sm:row-start-1 max-sm:col-start-1 max-sm:col-span-3 
                         md:flex md:flex-col md:row-start-1 md:row-span-4 md:col-start-2 md:col-span-3  md:border-amber-500  md:border-2 md:rounded-xl 
                             md:justify-between md:overflow-hidden
                         md:w-full md:h-full" >
           <div className=" max-sm:flex max-sm:group max-sm:flex-row max-sm:px-4  
                            md:flex md:flex-row md:z-20 md:pl-10 md:row-start-1 md:space-x-8 md:border-2 md:border-black md:h-1/4 md:bg-black  " >
            <h1 className=" max-sm:text-4xl max-sm:text-amber-500  md:text-5xl md:self-center md:text-amber-500 " >Portfolio</h1>
            <hr className=" max-sm:border-2 max-sm:self-center max-sm:border-amber-500 max-sm:w-1/2 
             md:border-2 md:w-1/4 md:self-center md:border-amber-500    " />
           </div>
           <div className="max-sm:row-start-2 max-sm:row-span-2 max-sm:space-y-12 
                           md:row-start-2 md:row-span-2 md:space-y-8 md:col-start-2 md:col-span-3 md:flex md:flex-row md:space-x-4 md:self-start md:flex-col md:bg-white
                             " > {/* responsiveness prblem lies here*/} {/* Responsiveness issue is in Grid declaration.*/} 
                           {/* Restructure page to handle responsiveness */}
                     {/*<div className=" md:flex md:justify-center md:w-1/2 md:self-center " >
                     <PortfolioFilter/> 
  </div>*/}
              
              {/* Find out how many projects you have */}
              <div className=" md:flex md:flex-row md:w-full md:h-full 
                               md:grid md:grid-cols-3 md:grid-rows-2 md:space-x-10  " >
              <div className=" max-sm:px-8 max-sm:flex max-sm:flex-col max-sm:space-y-2 
                               md:flex md:flex-col md:space-y-2 md:border-2 md:border-amber-500 md:rounded-xl md:space-x-4 
                               md:col-start-1 md:row-start-1 md:h-3/4 md:bg-black  " >
                 <Image className=' max-sm:rounded-xl md:rounded-xl   '  src={workInProgress} alt='WIP Image'  />
                 <h2 className=" max-sm:text-2xl text-white md:text-2xl md:text-amber-500 " >Nuthread Web Shop</h2>
                 <p className=" md:w-5/6 md:text-left md:text-white text-white " >This is a freelance Ecommerce Web Shop project created utilizing Next.js, Stripe.js & the Sanity Database.
                                   This project is currently under construction. </p>
                                   <Link href=' ' className=' max-sm:justify-around md:justify-around md:text-white ' >GitHub</Link>    
              </div>
              <div className=" max-sm:px-8 max-sm:flex max-sm:flex-col max-sm:space-y-2
                               md:flex md:flex-col md:space-y-2 md:border-2  md:rounded-xl md:border-amber-500 
                               md:col-start-2 md:row-start-1 md:h-3/4 md:space-x-4 md:bg-black " >
                 <Image className=' max-sm:rounded-xl md:rounded-xl    '  src={workInProgress} alt='WIP Image'  />
                 <h2 className=" max-sm:text-2xl max-sm:text-white md:text-2xl md:text-amber-500 " >MarketStack Dashboard</h2>
                 <p className=" max-sm:text-white md:w-5/6 md:text-white " >This is a freelance Ecommerce Web Shop project created utilizing Next.js, Stripe.js & the Sanity Database.
                                   This project is currently under construction. </p>
                  <Link href=' ' className='md:text-white' >GitHub</Link>                 
              </div>
              {/* Include your awards for these projects. */}
              <div className=" max-sm:px-8 max-sm:flex max-sm:flex-col max-sm:space-y-2 
                               md:flex md:flex-col md:space-y-2  md:border-2 md:rounded-xl md:overflow-hidden md:border-amber-500 
                               md:col-start-3 md:row-start-1  md:h-3/4 md:space-x-8 md:bg-black " >
                 <Image className=' max-sm:rounded-xl  md:rounded-2xl  md:border-amber-500   md:border-2 md:pr-4 '  src={Lamborghini} alt='Lamborghini'  />
                 <h2 className=" max-sm:text-2xl text-white md:text-2xl  md:text-amber-500 " >Lamborghini Terzo Millennio</h2>
                 <p className="  text-white " >This is a freelance design project created in Adobe Illustrator, utilizing gradient mesh. It won the 2020 award for best graphic illustration in 2020. </p>
                            
              </div>
              <div className=" max-sm:px-8 max-sm:flex max-sm:flex-col max-sm:space-y-2
                                md:flex md:flex-col md:space-y-2  md:border-2 md:rounded-xl md:overflow-hidden md:border-amber-500 
                                md:col-start-1 md:row-start-2 md:h-5/6 md:space-x-4 md:bg-black " >
                 <Image className=" max-sm:rounded-xl max-sm:mr-4 md:rounded-2xl  md:border-amber-500  md:border-black md:border-2 "  src={Sade} alt='Sade'  />
                 <h2 className=" max-sm:text-2xl text-white max-sm:margin-right md:text-2xl md:text-amber-500 " >Sade</h2>
                 <p className=" text-white" >A rendering of Sade&apos; that I created during my time at the University of Houston. </p>
                               
              </div>
              <div className=" max-sm:px-8 max-sm:flex max-sm:flex-col max-sm:space-y-2 
                                md:flex md:flex-col md:space-y-2  md:border-2  md:rounded-xl md:overflow-hidden md:border-amber-500 
                                md:col-start-2 md:row-start-2 md:space-x-4  md:bg-black " >
                 <Image className=' max-sm:rounded-xl max-sm:mr-4  md:border-amber-500  md:border-2 md:rounded-2xl '  src={Legendary_Studios} alt='Legendary Studios'  />
                 <h2 className=" max-sm:text-2xl max-sm:margin-right text-white md:text-2xl  md:text-amber-500 " >Legendary Studios</h2>
                 <p className="  text-white " >This is a freelance design project for a company logo. </p>
                               
              </div>
              </div>
           </div>
           
        </div>
      <div className=" max-sm:row-start-2 max-sm:col-start-1 max-sm:col-span-3 max-sm:justify-around md:flex
                         md:row-start-4 md:col-start-4 md:col-span-3 md:justify-start  md:self-end md:pl-10 md:w-full  " >
            <NewProjectFooter/>
        </div>

    </div>
  )
}

export default NewProjects