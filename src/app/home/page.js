'use client'
import React from 'react'
import NavBar from '../components/navigation/page'
//import Footer from '../components/footer/page'
import HomeFooter from '../components/homeFooter/homefooter'
import Projects from '../projects/page'
import Image from 'next/image'
import Link from 'next/link'

import Title from '../components/title/page'
import { createClient } from 'next-sanity'
import {useEffect,useState} from 'react'
import { urlForImage } from '../../../sanity/lib/image'
import Logo from '../images/Julian_Borner_Logo.png'
import expert1 from '../images/next-logo.jpg'
import expert2 from '../images/react-logo.png'
import HomeNav from '../components/homeNav/homenav'
import proj1 from '../images/Julian_Borner_Logo.png'
import Home from '../page'


const Index = () => {
  
  const [designData,setDesignData]=useState([])
  const [developmentData,setDevelopmentData]=useState([])
  const [accreditation,setAccreditation]=useState([])

  
  /*const creds=async()=>{
    const setCreds='*[_type=="accreditation"]'
    const devQuery=await client.fetch(setCreds)
   
  }*/

   



//Second subtext on Title is the real one.
//Customize Home Page footer for different page sizes.
//Images can be switched by placing one on top of the other, with a higher z-index and making it transparent on hover.
//Fix Page Deformations
//Add symbols for about,project,contact & resume
  return (
    <div className=" max-sm:grid max-sm:grid-cols-4 max-sm:grid-rows-4 max-sm:h-screen
    md:grid  md:grid-cols-6 md:grid-rows-8 h-100vh bg-black max-sm:w-full md:bg-black md:h-screen  " >
    
    {/*<div className=" max-sm:flex max-sm:row-start-1  max-sm:justify-around max-sm:col-start-1 max-sm:col-end-5 grid max-sm:grid-cols-6  md:flex md:grid md:col-start-3 md:col-span-3 md:row-start-1 md:row-end-2 md:grid-cols-4 md:content-center md:space-between md:pt-10 text-yellow-500    " >
    <Link  className=" max-sm:col-start-1  text-2xl md:text-lg md:text-2xl col-start-1 col-end-2  justify-self-center "  href="/Home" >Home</Link>
        <Link className=" max-sm:col-start-3 text-2xl md:text-lg md:text-2xl   col-start-2 col-end-3  justify-self-center "  href="/expertise" >Expertise </Link>
        <Link className=" max-sm:col-start-5   text-2xl md:text-lg   md:text-2xl col-start-3 col-end-4 justify-self-center  "  href="" >Projects</Link>
        <Link className=" max-sm:col-start-7   text-2xl  md:text-lg  col-start-4  md:text-2xl"   href="" >Contact</Link>
  </div>*/}
  {/* Get better images & icons */}
  
    <div className=" max-sm:flex  max-sm:col-start-1 max-sm:col-span-5 max-sm:row-start-1 max-sm:row-span-3 max-sm:mr-4 max-sm:z-30  max-sm:self-center 
     max-sm:w-full max-sm:h-5/6 max-sm:mr-12
     md:flex md:col-start-1 md:col-span-4 md:row-start-2 md:row-span-2 md:z-10  md:self-start  " >
                <Image className=" max-sm:object-cover max-sm:w-full max-sm:h-full max-sm:z-40 max-sm:pr-8  md:scale-150 md:w-full md:h-full md:w-fit md:self-start   "  src={Logo} alt="Julian's logo" />
            </div>
            <div className=" flex max-sm:col-start-1 max-sm:row-start-2 
             md:flex  md:col-start-4 md:col-span-2   md:row-start-3 md:row-end-4 md:z-60 md:mr-24 md:mt-48 
             md:w-96  md:space-between md:self-start "  >
            <hr className="  md:bg-yellow-400  md:w-full   md:w-fit md:origin-center md:rotate-90 md:self-center md:mb-96 md:mr-8 md:justify-self-center " />
          </div>
          <div className=" max-sm:row-start-1 max-sm:col-start-1 max-sm:col-span-4 max-sm:pt-20 max-sm:w-full
                md:flex  md:col-start-5 md:h-3/4  md:row-start-3 " >
            <HomeNav/>
          </div>
         {/* <div className=" max-sm:row-start-2 max-sm:col-start-1 max-sm:col-end-5 max-sm:mt-12 max-sm:pl-8 max-sm:pr-8  text-center
           md:flex  md:col-start-4 md:col-end-6 md:row-start-3 md:ml-48 md:row-end-4 md:z-20 md:self-center md:mt-36 md:text-4xl   " >
              <h2 className=" text-amber-400 text-xl   md:justify-self-end md:self-center md:mb-80 md:text-amber-400  " >
                Full-Stack Software Engineer, App Developer & Designer
              </h2>
  </div>*/}
      <div className=" flex max-sm:col-start-1 max-sm:col-end-6 max-sm:grid max-sm:grid-cols-6 max-sm:grid-rows-4 max-sm:mb-12 max-sm:ml-12  md:flex md:col-start-1 md:col-end-6 md:row-start-5-row-end-7 md:grid md:grid-cols-6 md:grid-rows-4   " >
        <div className="  md:flex md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-4 md:z-10 md:justify-center md:self-center md:ml-40 " >
         
           </div>
       
            
           
      </div>

     <div className=" flex max-sm:col-start-1 max-sm:col-span-4 max-sm:row-start-4  md:flex md:col-start-3 md:col-span-4   md:row-start-5 "  >
              {/*<Footer/>*/}
               <HomeFooter/>
      </div>
       
      
    </div>
  )
}

export default Index