import React from 'react'
import ResumeNav from '../components/resumeNav/resumeNav'
import ResumeFooter from '../components/resumeFooter/resumefooter'
import Personal_Logo from '../images/Julian_Borner_Logo.png'
import Image from 'next/image'
import Awards from '../images/icons8-awards-96.png'
import Education from '../images/icons8-education-100.png'
import Experience from '../images/icons8-experience-100.png'
import Certification from '../images/Jse-40-01.png'

//Add Sticky Nav for mobile
//For mobile, make flex row vertical for ease of use.
//Modify Text like example.
const Resume = () => {
  return (
    <div className=" grid flex max-sm:grid-cols-3 max-sm:grid-rows-1 max-sm:space-y-20 max-sm:self-start bg-zinc-900
                     md:grid-cols-6 md:grid-rows-6  md:flex-col md:flex-wrap md:h-screen md:space-y-32 md:space-x-12 bg-black "  >
                      {/* Test out design, customize Nav */}
          
               <div className=" max-sm:flex max-sm:flex-row max-sm:w-full max-sm:h-full max-sm:row-start-1 max-sm:col-start-1 max-sm:col-span-3 max-sm:justify-around max-sm:z-30 max-sm:self-center
                      md:flex md:col-start-5   md:row-start-2 md:self-end md:content-around md:place-items-center   md:h-3/4    " >
                    <ResumeNav/>
                 </div>
       <div className=" max-sm:place-content-between max-sm:row-start-1 max-sm:col-start-1 max-sm:col-span-3  max-sm:border-2 max-sm:border-amber-500 max-sm:rounded-xl max-sm:space-x-2 max-sm:space-y-4 bg-white 
                        md:row-start-2 md:row-span-4 md:col-start-2 md:col-span-4 md:flex md:flex-row md:grid md:grid-cols-3 md:grid-rows-3 md:space-x-4 md:-space-y-12
                        md:border-2 md:border-amber-500 md:rounded-xl md:space-x-2 " >{/* Beginning of Resume */}
        <div className=" max-sm:flex max-sm:flex-row max-sm:space-x-2 max-sm:ml-4
                         md:flex md:flex-row md:row-start-1 md:col-start-1  md:col-span-1  md:w-5/6 md:h-1/3  md:self-center m md:justify-around  " >
          <h1 className=" max-sm:text-4xl max-sm:text-amber-500
          md:text-4xl md:self-center md:text-amber-500 md:flex md:justify-start md:ml-6 md:w-2/3 " >Resume</h1>
          <hr className=" max-sm:border-2 max-sm:w-1/3 max-sm:self-center max-sm:border-amber-500
                          md:border-2 md:border-amber-500 md:-ml-16 md:w-1/2  md:self-center md:flex md:justify-self-start  " />
        </div>
         <div className=" max-sm:flex max-sm:flex-col  max-sm:rounded-xl max-sm:place-self-center max-sm:space-y-4
                          md:flex md:flex-col md:rounded-xl md:place-self-center md:row-start-2 md:col-start-1 md:space-y-4 
                          md:self-start  " >{/*Education */}
            <div className=" max-sm:flex max-sm:flex-row max-sm:space-x-2 max-sm:-mr-2 
             md:flex md:flex-row 
                             md:pl-2 " >
            <Image className=" max-sm:w-10 max-sm:rounded-3xl md:w-12 md:h-1/6 bg-amber-500 md:rounded-lg md:border-2 md:border-black  "    src={Education} alt=" Education "  />
              <h1 className=" max-sm:self-center max-sm:text-2xl text-amber-500 md:self-center md:text-3xl " >Education</h1>
              <p className="max-sm:text-justify  " >  </p>
            </div>
            <div className=" max-sm:space-x-2 max-sm:border-2 max-sm:rounded-xl max-sm:border-amber-500
                             md:border-2 md:border-black md:rounded-xl md:space-x-2 md:space-y-2 md:z-30 " >
                <h1 className="max-sm:text-xl max-sm:px-2 md:text-xl md:px-2 md:pl-2 text-amber-500 " >University of Houston</h1>
                <p className=" max-sm:text-justify max-sm:px-2  " >I graduated from the University of Houston in 2023. I studied web development, software engineering and digital marketing at the Cullen College of Engineering and graduated with a Bachelor&apos;s of Science in Digital Media. </p>
            </div>
            <div className=" max-sm:space-x-2 max-sm:border-2 max-sm:rounded-xl  max-sm:border-amber-500
                             md:space-x-2 md:border-2 md:border-black md:rounded-xl" >
                
                <h1 className=" max-sm:text-xl  max-sm:space-x- md:px-2 md:pl-2 md:text-xl text-amber-500 " >Lonestar College</h1>
                <p className=" max-sm:text-justify max-sm:px-2 " >I studied my basics at Lone Star College from 2015-2019.</p>
            </div>
         </div>
         <div className=" max-sm:flex max-sm:flex-col max-sm:space-y-4 
                          md:flex md:flex-col md:rounded-xl md:row-start-2 md:col-start-2 md:space-y-2   " >{/* Experience */}
           <div className=" max-sm:flex md:flex max-sm:flex-row max-sm:space-x-2 
            md:flex-row md:space-x-2 " >
           <Image className=' max-sm:w-10 max-sm:self-center max-sm:rounded-lg  
            md:w-14 md:self-center bg-amber-500 md:rounded-lg md:border-2 md:border-black    ' src={Experience} alt='Experience' />
           <h1 className="max-sm:self-center max-sm:text-2xl md:self-center md:text-3xl text-amber-500 "  >Experience</h1>
           </div>
           <div className="max-sm:flex max-sm:flex-col max-sm:border-2 max-sm:border-amber-500 max-sm:rounded-xl max-sm:space-y-4 
                           md:flex md:flex-col md:border-2 md:border-black md:rounded-xl  md:space-y-2 md:space-x-2  " >
             <h1 className=" max-sm:flex max-sm:text-xl text-amber-500  md:flex md:text-xl md:pl-2 " >Freelance</h1>
             <p>I have been a freelancer from November 2023 - Current.</p>
           </div>
           <div className="max-sm:flex max-sm:flex-col max-sm:border-2 max-sm:border-amber-500 max-sm:rounded-xl max-sm:space-y-4 
                           md:flex md:flex-col md:border-2 md:border-black md:rounded-xl md:space-y-2 md:space-x-2  " >
             <h1 className=" max-sm:flex max-sm:text-xl md:text-xl text-amber-500 md:flex md:pl-2 " >NuThread Ecommerce Web-Shop</h1>
             <p className="max-sm:text-justify max-sm:px-2" >I created an Ecommerce WebShop utilizing React, Next.js, Tailwind, Node.js & the Stripe.js API.</p>
           </div>
           <div className="max-sm:flex max-sm:flex-col max-sm:border-2 max-sm:rounded-xl max-sm:space-y-4 max-sm:border-amber-500 
                           md:flex md:flex-col md:border-2 md:border-black md:rounded-xl md:space-y-2 md:space-x-2  " >
             <h1 className=" max-sm:flex max-sm:text-xl text-amber-500  md:text-xl md:flex md:pl-2 " >MarketStack Dashboard</h1>
             <p>I am currently building a MarketStack dashboard that will be able to show the user the stock market highs and lows for that day, up to the last 48 hours.</p>
           </div>

         </div>
         <div className=" max-sm:flex max-sm:flex-col max-sm:space-y-4 
                          md:flex md:flex-col md:rounded-xl md:row-start-2 md:col-start-3 md:pr-2 md:space-y-4  " > {/* Accreditation */}
           <div className=" max-sm:flex max-sm:flex-row max-sm:space-y-4 max-sm:space-x-2
            md:flex md:flex-row md:space-y-4 md:space-x-2 " >
             <Image className="max-sm:w-10 max-sm:rounded-lg max-sm:self-center md:w-12 md:self-center bg-amber-500 md:rounded-lg md:border-2 md:border-white    " src={Awards} alt="  " />
             <h1 className="max-sm:flex max-sm:text-2xl text-amber-500 md:flex md:text-3xl md:self-center " >Accreditation</h1>
           </div>
            <div className=" max-sm:flex  max-sm:flex-col max-sm:border-2 max-sm:border-amber-500 max-sm:rounded-xl max-sm:space-y-4 
                             md:flex md:flex-col md:border-2 md:border-black md:rounded-xl md:space-y-4  " >
              <Image className=" max-sm:w-1/3 max-sm:space-x-4 max-sm:self-center 
               md:w-1/3 md:space-x-4 md:pl-2 md:pt-2 md:self-center "   src={Certification} alt=" " />
              <h3 className=" max-sm:flex max-sm:text-xl  max-sm:self-center text-amber-500
               md:flex md:text-2xl md:pl-2 md:self-center  " >JSE-40-01</h3>
              <p className=" max-sm:text-justify max-sm:px-2 md:text-left md:px-2  " >I received the entry-level JavaScript Programming Certification from OpenEDG in October of 2023.</p>
            </div>
         </div>
         <div className="max-sm:flex max-sm:flex-col max-sm:row-start-2 max-sm:space-y-6 
                         md:flex md:flex-row md:row-start-3 md:col-start-1 md:col-span-3 md:justify-around md:space-y-8 md:space-x-2 " >
          <div className=" max-sm:flex max-sm:flex-col  max-sm:space-y-2 
                           md:flex md:flex-col md:space-y-4 md:self-center "  >
            <h1 className=" max-sm:flex max-sm:flex-col max-sm:text-3xl 
                            md:flex md:flex-col md:text-3xl text-amber-500 " >Working Skills</h1>{/* Include JS, Node, Tailwind, React,Next, HTML & CSS, etc. */}
            <div className=" max-sm:flex max-sm:flex-row max-sm:flex-wrap max-sm:space-x-4 max-sm:space-y-2
             md:flex md:flex-row md:flex-wrap md:w-3/4 md:space-x-4 md:space-y-2  " >
            <div className=" max-sm:border-2 border-amber-500 max-sm:w-1/4 max-sm:rounded-xl max-sm:h-3/4 md:border-2 md:border-black md:rounded-lg " >
              <h1 className=" max-sm:space-x-4  max-sm:text-center   " >JavaScript</h1>
            </div>
            <div className=" max-sm:border-2 border-amber-500 max-sm:w-1/6 max-sm:rounded-xl max-sm:h-3/4
                              md:border-2 md:border-black md:rounded-lg " >
              <h1 className="max-sm:space-x-4 max-sm:text-center  " >HTML </h1>
            </div>
            <div className=" max-sm:border-2 border-amber-500 max-sm:w-1/6 max-sm:rounded-xl max-sm:h-3/4  md:border-2 md:border-black md:rounded-lg " >
              <h1 className="max-sm:space-x-4 max-sm:text-center" >CSS </h1>
            </div>
            <div className="max-sm:border-2 border-amber-500 max-sm:w-1/6 max-sm:rounded-xl max-sm:h-3/4   md:border-2 md:border-black md:rounded-lg " >
              <h1 className="max-sm:space-x-4 max-sm:text-center" >Node.js</h1>
            </div>
            <div className="max-sm:border-2 border-amber-500 max-sm:w-1/4 max-sm:rounded-xl max-sm:h-5/6   md:border-2 md:border-black md:rounded-lg " >
              <h1 className="max-sm:space-x-4 max-sm:text-center" >Tailwind</h1>
            </div>
            <div className="max-sm:border-2 border-amber-500 max-sm:w-1/6 max-sm:rounded-xl max-sm:h-3/4  md:border-2 md:border-black md:rounded-lg " >
              <h1 className="max-sm:space-x-4 max-sm:text-center" >React</h1>
            </div>
            <div className="max-sm:border-2 border-amber-500 max-sm:w-1/6 max-sm:rounded-xl max-sm:h-3/4  md:border-2 md:border-black md:rounded-lg " >
              <h1 className="max-sm:space-x-4 max-sm:text-center" >Next</h1>
            </div>
            </div>
          </div>
          <div className=" max-sm:flex max-sm:flex-row max-sm:flex-wrap  max-sm:space-y-4 max-sm:space-x-4 md:flex md:flex-col md:justify-center md:row-start-3 md:col-start-3 md:self-center md:space-y-4 " >
            <h1 className="max-sm:text-3xl max-sm:w-full max-sm:flex 
             md:text-3xl md:flex text-amber-500  " >Knowledge</h1>
            <div className=" max-sm:justify-center max-sm:border-2 border-amber-500 max-sm:w-1/2 max-sm:rounded-lg " >
            <p className=" max-sm:text-center   md:border-2 md:border-black md:rounded-lg" >Front-end Development</p>
            </div>
            <div className=" max-sm:border-2 border-amber-500 max-sm:w-1/2 max-sm:rounded-lg  " >
            <p className='max-sm:text-center md:border-2 md:border-black md:rounded-lg md:text-center md:w-3/4 ' >Web Design</p>
            </div>
            <div className=" max-sm:border-2 border-amber-500 max-sm:w-1/2 max-sm:rounded-lg " >
            <p className="max-sm:text-center md:border-2 md:border-black md:rounded-lg md:text-center " >Full-Stack Development</p>
            </div>
            <div className=" max-sm:border-2 border-amber-500 max-sm:w-1/2  max-sm:rounded-lg " >
            <p className="max-sm:text-center md:border-2 md:border-black md:rounded-lg md:text-center md:w-5/6 " >Digital Marketing</p>
            </div>
            
            
          </div>
       </div>
       </div>
       
       
       
       <div className="max-sm:row-start-5 max-sm:col-start-1 max-sm:col-span-3  md:row-start-5 md:col-start-3 md:col-span-2 md:flex md:justify-center  md:pt-20 md:pl-20 " >
       <ResumeFooter/>
       </div>    
       
    </div>
  )
}

export default Resume