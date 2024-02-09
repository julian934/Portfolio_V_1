/*'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import { createClient } from 'next-sanity'
import Image from 'next/image'

import NavBar from '../components/expertNav/page'
import Footer from '../components/expertFooter/page'
import Logo from '../images/Julian_Borner_Logo.png'
import ImageItem from '../components/imageItem/page'
import imageUrlBuilder from '@sanity/image-url'
import html from '../images/html.png'
import css from '../images/css2.png'
import javascript from '../images/javascript.webp'
import next from '../images/nextjs.webp'
import node from '../images/node.png'
import react from '../images/react.png'
import tailwind from '../images/tailwind.png'
import typescript from '../images/typescript2.png'
import UH from '../images/uhlogo.png'
import jsinstitute from '../images/js-institute-logo.jpeg'
import jse from '../images/Jse-40-01.png'

//Add personal icon in the gap between Expertise and the navbar
//Borders for elements cover up Expertise and Projects on Navbar. Fix immediately!
async function getItems(){
    
      
  
}

const imageBuilder=imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
})

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}



const Expertise = ({expertData,creds}) => {
     const [queryData,setQueryData]=useState([])
     const [expertiseData,setExpertiseData]=useState([]);
     const [accreditation,setAccreditation]=useState([]);
     
     console.log(expertData)
     console.log(creds)

     const client=createClient({
      projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
      apiVersion:"2023-12-03",
      useCdn:false
    })

     const connect=async()=>{
        //const connectExpertise=getItems()
        //console.log(connectExpertise)
        const expertQuery=await client.fetch(`*[_type=="expertise"]{
          _id,language,image
        }`) 

        return expertQuery
     }
     const connectExpertise=async()=>{
      const expertQuery=await client.fetch(`*[_type=="expertise"]{
        _id,language,image
      }`) 
      const setCreds='*[_type=="accreditation"]'
      const credQuery=await client.fetch(`*[_type=="accreditation"]{
        _id, school,degree,description,certification
      }`)
      setExpertiseData(expertQuery)
      setAccreditation(credQuery)
      console.log(expertQuery)
      console.log(accreditation)
    }
     const uhData=accreditation.filter((item)=>item.school=="University of Houston")
     const javaData=accreditation.filter((item)=>item.school=="JS Institute")
    
     
        //FETCH DATA FROM BACKEND VIA API ROUTE

     useEffect(()=>{
          connect()
          connectExpertise()
     },[])

 
//Add additional filters for data
//Cover languages in depth first.
  return (
    <div className="     flex flex-wrap flex-col grid grid-cols-6  max-sm:grid-rows-4  md:grid-rows-3 justify-center  w-full bg-slate-200   " id="Expertise & Accreditation" >
      <NavBar/>
      
      
      <div className="   max-sm:flex max-sm:p-5 max-sm:justify-center max-sm:row-start-1 max-sm:col-start-1 max-sm:col-span-6  md:row-start-1 
                         md:col-start-3  md:col-span-3 md:flex md:mt-96  " >
                <h1 className="  max-sm:self-end max-sm:text-3xl max-sm:ml-0 md:text-6xl max-sm:text-amber-300 md:text-3xl md:justify-center md:content-start md:flex "  >Expertise & Accreditation</h1>
            </div>
        <div className="flex max-sm:flex-wrap  max-sm:row-start-2 max-sm:row-end-3 max-sm:flex-col  md:flex-row md:flex-wrap md:text-xl md:mt-4 md:row-start-2  col-span-6 md:col-start-2 md:col-span-5 md:justify-center  "  >
            <div className=" max-sm:flex max-sm:p-6 max-sm:space-x-2 max-sm:space-y-2 max-sm:mt-12  max-sm:row-start-2 max-sm:row-end-3 max-sm:col-start-1 max-sm:col-span-6  max-sm:grid max-sm:grid-cols-4 max-sm:grid-rows-3 
                            md:flex md:row-start-2 md:row-end-3 md:col-start-1 md:col-span-6 md:grid md:grid-cols-4 md:grid-rows-3  md:space-y-6 md:justify-center  md:-mt-12 "  >
              <div className=" max-sm:col-start-1 md:col-start-1 md:col-end-2 md:row-start-1  " >
                <Image className=" max-sm:rounded-md max-sm:w-full md:w-1/2 md:rounded-md  " src={html} alt="html" />
              </div>
              <div className=" max-sm:col-start-2 md:col-start-2 md:row-start-1 " >
                <Image className=" max-sm:w-full md:w-1/2 " src={css} alt="css" />
              </div>
              <div className=" max-sm:col-start-3 md:col-start-3 md:row-start-1 " >
                <Image className="  max-sm:rounded-md max-sm:w-full md:w-1/2  md:rounded-md " src={javascript} alt="javascript" />
              </div>
              <div className=" max-sm:col-start-4 md:col-start-4 md:row-start-1 " >
                <Image className=" max-sm:w-full md:w-1/2 " src={next} alt="nextjs" />
              </div>
              <div className=" max-sm:col-start-1 max-sm:row-start-2 md:col-start-1 md:row-start-2 " >
                <Image className=" max-sm:w-full md:w-1/2 " src={node} alt="node"  />
              </div>
              <div className=" max-sm:col-start-2 max-sm:row-start-2 md:col-start-2 md:row-start-2 " >
                <Image className=" max-sm:w-full md:w-1/2 " src={react} alt="react " />
              </div>
              <div className=" max-sm:col-start-3 max-sm:row-start-2 md:col-start-3 md:row-start-2 " >
                <Image className="   max-sm:rounded-md max-sm:w-full md:w-1/2 md:rounded-md " src={tailwind} alt="tailwind" />
              </div>
              <div className=" max-sm:col-start-4 max-sm:row-start-2 md:row-start-2 md:col-start-4  " >
                <Image className=" max-sm:w-full md:w-1/2 " src={typescript} alt="typescript" />
              </div>

            </div>
             
            <p className=" max-sm:flex max-sm:justify-self-center max-sm:text-center max-sm:text-md max-sm:pl-6 max-sm:pr-6 max-sm:pt-0 md:text-center md:col-start-1 md:w-4/6 md:mt-0 md:text-2xl md:mr-48 md:-mt-12 " >Julian has nearly three years of experience coding in the JavaScript programming language and building
              both front-end user interfaces and full-stack MERN applications utilizing the React & Next.js frameworks with the 
              TypeScript extension. 
            </p>
        </div>
      <div className=" flex max-sm:row-start-3 max-sm:row-end-3 md:row-start-3  md:col-start-1  md:col-span-3 col-span-6 md:content-center  md:mt-16 md:justify-center "  >
        {uhData.map((item)=>(
          <div className=" flex flex-col md:w-3/4 max-sm:space-y-4 md:text-center md:space-y-4  md:justify-center "   >
              <Image className=" max-sm:object-contain max-sm:justify-self-center max-sm:w-4/5 max-sm:ml-8  md:object-cover md:w-full md:justify-center  " width={40} height={40} src={UH} alt={item.school}    />
              <h2 className="max-sm:text-center max-sm:mt-4 max-sm:text-2xl  md:text-2xl    " >{item.school}</h2>
              <p className='text-center md:text-lg '  >{item.description}</p>

          </div>
        ))}
      </div>
      <div className=" max-sm:flex max-sm:row-start-4  max-sm:col-span-6 max-sm:mb-8 md:flex  md:row-start-3 md:col-start-4 md:col-span-3 md:justify-center md:mt-24   "  >
        {javaData.map((item)=>(
          <div className=" flex flex-col max-sm:space-y-10 md:text-center md:space-y-4 md:w-3/4"  >
           
            <Image className=" max-sm:w-3/4 max-sm:ml-12 md:w-1/2  md:justify-end md:rounded-md  md:right-0 md:top-0 md:ml-56 md:object-contain  "  width={40} height={40} src={jse}  alt="Cert"  />
            <h2 className=" max-sm:text-center max-sm:text-2xl max-sm:text-2xl md:text-2xl  " >{item.school}</h2>
            <p className="  text-center  md:text-xl "  >{item.description}</p>
          </div>
        ))}

      </div>
      <Footer/>
        </div>
  )
}

export default Expertise */