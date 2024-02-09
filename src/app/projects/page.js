/*'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useState,useEffect} from 'react'

import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'


import imageUrlBuilder from '@sanity/image-url'

import WIP from '../images/work_in_progress.jpg'
import NavBar from '../components/projNav/page'
import Footer from '../components/projFooter/page'

//Connect to the DB and render the information here.

const imageBuilder=imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
})

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}

const Projects = ({devProjects, designProjects}) => {
  const [designData,setDesignData]=useState([])
  const [developmentData,setDevelopmentData]=useState([])
  

  

  const client=createClient({
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion:"2023-12-03",
    useCdn:false
  })

  const connectDesign=async()=>{
    const setDesign='*[_type=="design"]' 
    const designQuery=await client.fetch(setDesign)
    
    await setDesignData(designQuery)
    
  }
  const connectDevelopment=async()=>{
    const setDevelopment='*[_type=="development"]'
    const devQuery=await client.fetch(setDevelopment)
    await setDevelopmentData(devQuery)
  }
  const dev1=developmentData.filter(item=> item.name=="NuThread Ecommerce Site")
  const dev2=developmentData.filter(item=> item.name=="Stock Market Metrics Dashboard" )
  const des1=designData.filter(item=> item.name=="Lamborghini Terzo Millennio")
  const des2=designData.filter(item=> item.name=="V8 Engine Rendering")
  const des3=designData.filter(item=> item.name=="Sade' Portrait")
  console.log(dev1)
  console.log(dev2)
  useEffect(()=>{
    connectDesign()
    connectDevelopment()
  },[])
  //consider splitting divs and conditionally rendering based on project name, and consider decreasing divs. Might be shrinking available room.
  //experiment with not defining an end to the row or column.
  //add loading state for the page with loading spinner.
  //Width & Height mandatory for images? Check Nextjs implementation & sanity implementation
  //Create and finish organic look with rectangular soft boxes with lowered opacity (goldenrod) on black background.
  return (
    <section className=" flex max-sm:grid max-sm:grid-cols-6 max-sm:grid-rows-8 md:flex md:grid md:grid-cols-6 md:grid-rows-8 bg-slate-200  " id="Projects" >
            <NavBar/>
            
            
            <div className="  flex max-sm:row-start-1 max-sm:col-start-1 max-sm:col-span-6 max-sm:justify-center self-center text-center  md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 md:flex  md:self-center md:justify-self-center md:text-5xl md:z-10 md:mt-48" >
            <h1 className=" md:justify-self-center content-center mt-72 text-5xl text-center md:ml-72  " >Projects</h1>
            </div>
            
            <div className=" ml-16 max-sm:row-start-2 flex  max-sm:col-start-1 max-sm:col-span-6 text-center   md:flex md:row-start-2  md:col-start-2 md:col-span-4 md:ml-20  md:text-3xl md:mt-32 "  >
                <h1 className=" md:flex md:justify-self-center text-center justify-self-center text-2xl md:text-center md:text-4xl  md:border-amber-400   " >Development Projects</h1>
              </div>

            <div className=' max-sm:row-start-3 col-start-1 col-span-6 content-between justify-center  p-4 max-sm:grid max-sm:grid-cols-6 max-sm:grid-rows-1  md:grid md:grid-cols-6 md:grid-rows-6 md:justify-center md:row-start-2 md:row-end-4 md:col-start-1 md:col-span-6 md:content-around content-between  ' >
              <Image className=" max-sm:w-12 max-sm:col-start-1 max-sm:col-span-6  max-sm:rounded-md   " src={des1.image} alt={des1.name}  />
              <div className=" max-sm:col-start-1  max-sm:col-span-6  md:flex md:justify-center  md:col-start-2 md:col-span-3 row-start-1 max-sm:pb-12  md:px-12 "  >
               {dev1.map((item)=>(<div className=" max-sm:text-center  md:text-ceter  md:flex  md:flex-col md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3 md:mt-48 md:border md:border-opacity-50 md:rounded-2xl "   key={item._id}  >
                <h1 className=" md:flex  max-sm:text-xl md:col-start-3   md:text-2xl md:text-center "  key={item._id} >{item.name}</h1>
                <Image className=" max-sm:w-full  md:w-2/3 max-sm:rounded-md md:rounded-md  md:object-fill  " key={item._id} width={10} height={10} src={WIP} alt={item.name}  />
                <p  className="  md:col-start-3 md:col-end-6 md:row-start-5 md:row-end-6 md:justify-self-center md:text-start md:w-3/5 "  key={item._id} >{item.description}</p>
               </div>))}
              </div>
              <div className=" max-sm:row-start-2 max-sm:col-start-1 max-sm:col-span-6  md:row-start-1 md:col-start-4 col-span-3 md:px-12 " >
               {dev2.map((item)=>(<div className=" max-sm:text-center md:text-center   md:flex md:flex-col md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-3 md:mt-48 md:border md:border-opacity-50  md:rounded-2xl "   key={item._id}  >
                <h1 className=" flex text-xl max-sm:text-center md:col-start-1 md:row-start-2 md:row-end-3 md:text-2xl md:text-center"  key={item._id} >{item.name}</h1>
                <Image className=" max-sm:w-full  md:w-2/3 max-sm:rounded-md md:col-start-1 md:col-end-6 md:row-start-3 md:row-end-4 md:rounded-md  " key={item._id} width={10} height={20}  src={WIP} alt={item.name}  />
                <p  className="  md:col-start-1 md:col-end-6 md:row-start-5 md:row-end-6 md:text-start md:w-3/5 "  key={item._id} >{item.description}</p>
               </div>))}
              </div>
               
            </div>
            <div className="flex max-sm:mt-4 max-sm:ml-28 max-sm:row-start-4 max-sm:col-start-1 max-sm:col-end-6 md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-4  md:text-3xl md:grid md:grid-cols-3 md:grid-rows-3 md:-mt-36 "  >
               <h1 className=" md:flex md:row-start-2  md:row-span-2 md:col-start-1 md:col-end-6 max-sm:text-2xl md:text-4xl  " >Design Projects</h1>
               </div>
              <div className=" max-sm:row-start-5 max-sm:col-start-1 max-sm:col-span-6  max-sm:mt-8 max-sm:px-8   md:-mt-48  md:z-20 md:grid md:grid-cols-3 md:grid-rows-4  md:col-start-2 md:col-span-6 md:row-start-1 md:row-end-4 "  >
               <div className=" flex max-sm:row-start-4 max-sm:col-start-1 max-sm:col-span-6 max-sm:text-center    md:col-start-1 md:col-span-3 md:row-start-3 content-center "  >
               {des1.map((item)=>(<div className='max-sm:text-center  md:mb-16 md:mr-12 ' key={item._id} >
                     <h1 className=" max-sm:text-center w-full md:text-center md:text-xl text-xl" key={item._id} >{item.name}</h1>
                     <Image className="max-sm:w-full max-sm:rounded-md md:w-full md:object-cover md:rounded-md md:h-4/6  " width={20} height={10}   src={urlForImage(item.image).width(25).url()} alt={item.name} />
                     <p className=" md:text-start md:text-lg " >{item.description}</p>
                  </div>))}
               </div>
              </div>
            <div className="   max-sm:row-start-5 max-sm:col-start-1 max-sm:col-span-6 max-sm:mt-44 md:mt-0 max-sm:px-8 max-sm:pt-8   md:z-30 md:grid md:grid-cols-3 md:grid-rows-4 md:col-start-1 md:col-end-5 md:row-start-3 md:row-end-4 md:mr-16 md:justify-start  " >
                <div className="  max-sm:row-start-2 max-sm:mt-20  md:col-start-2 md:col-span-4 mt-4 md:row-start-3 max-sm:ml-8 md:-ml-24  "   >
               {des2.map((item)=>(<div className=" max-sm:text-center max-sm:mt-20 md:mt-0 max-sm:ml-12  " key={item._id} >
                    <h1  className=" md:text-xl md:text-center md:mr-12 text-xl max-sm:text-center max-sm:ml-8 "   key={item._id} >{item.name}</h1>
                    <Image className=" max-sm:w-full max-sm:rounded-md md:w-full md:rounded-md  " width={10} height={10} src={urlForImage(item.image).width(25).url()} alt={item.name} />
                    <p className=" md:text-center md:w-3/4 md:mr-12 "  >{item.description}</p>
                  </div>))}
               </div>

               </div>
            
               <div className=" max-sm:mt-96 max-sm:row-start-5 max-sm:col-start-1 max-sm:col-end-6 max-sm:mt-60 max-sm:md:mt-0 md:ml-72  pt-12 md:pt-8 pb-12 md:pb-0 md:ml-12  md:z-30 md:grid md:grid-cols-3 md:grid-rows-4 md:col-start-4 md:col-span-2 md:row-start-3 md:row-end-4 md:justify-start  " >
               <div className=" text-center max-sm:mt-48 max-sm:ml-8 md:col-start-1 md:col-span-3 max-sm:mt-8  md:row-start-3 md:row-end-4  "  >
                {des3.map((item)=>(<div className="  " key={item._id}  >
                  <h1 key={item._id} className=" md:text-center md:text-xl max-sm:text-2xl max-sm:text-center max-sm:mb-2 " >{item.name}</h1>
                  <Image className="max-sm:w-full max-sm:rounded-md max-sm:ml-4 md:w-full md:rounded-md md:h-full " width={10} height={10} src={urlForImage(item.image).width(25).url()} alt={item.name}  />
                  <p className=" md:text-center max-sm:text-center max-sm:mt-2  "  >{item.description}</p>
                </div>))}
               </div>
               </div>
            
            <Footer/>
        </section>
  )
}

export default Projects*/