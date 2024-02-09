"use client"
import React from 'react'

import AboutNav from '../components/aboutNav/about'
import AboutFooter from '../components/aboutFooter/aboutfooter'
import Socials from '../components/socials/socials'
import Image from 'next/image'
import Headshot from '../images/Julian_Borner_Headshot.jpg'
import Logo from '../images/Julian_Borner_Logo.png'
import Phone from '../images/icons8-phone-100.png'
import Email from '../images/email_icon.png'
import Birthday from '../images/icons8-calendar-100.png'
import Location from '../images/icons8-location-100.png'
import Css from '../images/icons8-css-100.png'
import Html from '../images/icons8-html-100.png'
import Javascript from '../images/icons8-javascript-100.png'
import Express from '../images/icons8-express-js-100.png'
import ReactJS from '../images/icons8-react-a-javascript-library-for-building-user-interfaces-96.png'
import Tailwind from '../images/icons8-tailwind-css-100.png'
import Coding from '../images/icons8-coding-50.png'
import Seo from '../images/icons8-seo-50.png'
import UX from '../images/icons8-user-experience-64.png'
import Resume from '../images/Julian_Borner_Resume.png'

//About Footer causes JSON input error.
//Double-check page setup
//Get Social Media 

const About = () => {
  return (
    <div className=" grid max-sm:flex  max-sm:grid-rows-4 max-sm:grid-cols-4 max-sm:space-y-8 max-sm:flex-col max-sm:justify-items-stretch  bg-zinc-900
                     md:flex md:grid-rows-3 md:grid-cols-6 md:flex-col md:space-y-8  md:h-screen "  >
                      {/* MD and up, you need to center about me photo,socials and personal info. Minimalist design, even spacing. */}
                      {/*Introduce grids to about me section and move body copy text up by any means necessary */}
                      {/* Enlarge About Me to encapsulate most of the page and have the second grid of items exist within on a higher z-index. */}
                      {/* New Idea: Turn Title Card on its side and have it act as its own block with image on left and text/links on right. */}
                      {/* Add sticky nav*/}
                      {/* Add credentials and degree information.  */}
                      {/* Stick wih arbitrary units and fractional values to keep the layout the same throughout sizes. */}
              
    <div className=' max-sm:justify-center max-sm:row-start-3 max-sm:col-start-1 col-span-5 max-sm:flex max-sm:place-self-center
                        max-sm:border-2 max-sm:border-black max-sm:rounded-md max-sm:flex-col
                        md:flex md:flex-row  md:row-start-1 md:row-span-3  z-index:20  md:col-start-2  md:border-2 md:border-black md:w-5/6 
                        md:place-self-center  md:rounded-xl  md:grid md:grid-cols-6 md:grid-rows-4  md:space-y-2 md:px-4  md:space-x-2 bg-white '  >
      <div className=" max-sm:row-start-1 max-sm:flex max-sm:pt-4 
              md:flex md:flex-row md:row-start-1 md:col-start-4 md:col-span-2 md:mt-4 md:ml-10  md:justify-start md:self-start md:w-full md:h-full md:flex-row md:z-50 " >
                  <AboutNav/>
                </div>
      <div className=' max-sm:flex max-sm:flex-col max-sm:row-start-2 max-sm:col-start-1 max-sm:col-span-5 
       max-sm:w-full max-sm:h-1/3 max-sm:space-y-20 max-sm:h-full max-sm:justify-center
        md:flex md:flex-row md:row-start-1 md:row-end-4 md:col-start-1 md:col-end-6  md:rounded-lg 
          md:space-y-8 md:place-self-start md:md:self-center md:grid-rows-2 md:grid md:grid-cols-5 md:w-full md:h-full  '  >
               
               
            <div className=" max-sm:w-full max-sm:flex max-sm:flex-row max-sm:w-full
            md:w-full  md:col-start-2 md:col-span-2 md:row-start-1 md:flex-row md:flex md:justify-center
               md:space-x-4 md:border-black md:h-1/6 md:-mt-2  "  >
              
              <div className=" max-sm:flex max-sm:w-full max-sm:self-center max-sm:flex-row max-sm:border-2 md:col-start-1 md:self-start md:flex md:w-2/3 md:pt-2 md:pl-2 md:h-1/4 md:justify-start md:flex-row  " >
              <h1 className=" max-sm:text-4xl max-sm:text-center   md:text-4xl  md:w-full md:self-start md:pl-8 text-amber-500  md:row-start-1 md:justify-self-end   " >About Me</h1>
              <hr className=" max-sm:w-1/2 max-sm:ml-2 max-sm:self-center  max-sm:border-amber-500 max-sm:border-2 md:w-2/3 md:mt-4 md:border-amber-500 md:border-2 md:self-center md:justify-start " />
              </div>
              
            </div>
        
        <div className="max-sm:h-full max-sm:w-full max-sm:items-stretch max-sm:grid max-sm:space-y-4
        md:col-start-2 md:col-span-3 md:space-y-2 md:mt-4
                        md:row-start-1   md:place-self-start md:flex md:flex-col md:h-full    " >
        <Image className=" max-sm:w-4/5 max-sm:rounded-2xl max-sm:justify-self-center md:justify-self-center md:self-center border-2 border-amber-500
         md:rounded-2xl md:w-4/5 md:mt-4 " src={Headshot} alt='Julian'  />
        <h1 className=" max-sm:justify-self-center max-sm:self-center max-sm:text-3xl
         md:place-self-center md:text-3xl "  >Julian Borner</h1>
        <h3 className=" max-sm:justify-self-center max-sm:text-lg
          md:md:place-self-center md:text-xl " >Front-end Developer</h3>
        <Socials/>
        {/*<div className=" max-sm:flex max-sm:place-content-center  max-sm:w-full max-sm:h-full max-sm:justify-center
                       md:flex md:row-start-2 md:col-start-1  md:grid md:rounded-lg md:bg-amber-500  " >
        <a className=" max-sm:rounded-xl max-sm:w-3/4 max-sm:h-full max-sm:text-center max-sm:self-center max-sm:bg-amber-500 max-sm:text-white
                       md:text-xl md:place-self-center  " download href="/images/Julian_Borner_Resume.png"  >Download Resume</a>
  </div>*/}
        </div>
        
        {/* place-self-center centers items.*/}
        {/* Opening for restructuring? Place WHo am I statement above Phone, Email, Location & Birthday. Shrink icons.  */}
        <div className=" flex max-sm:grid max-sm:grid-cols-2 max-sm:grid-rows-3 md:w-full md:h-1/2 md:col-start-3 md:space-x-12 md:col-span-3 md:justify-center   md:row-start-1 md:row-span-2 md:flex-col md:ml-16 " >
            
        <div className=" max-sm:flex max-sm:w-full max-sm:flex-col  max-sm:w-full max-sm:row-start-1 max-sm:col-start-1 max-sm:col-span-2
                         md:flex md:group md:col-start-2 md:col-span-3 md:row-start-2 md:self-start 
                         md:self-end  md:flex-col md:space-y-2 md:w-5/6    md:-pt-4 " >
                      <div className=" flex flex-row max-sm:w-full md:space-x-4 "  >
                      <h1 className=" max-sm:flex max-sm:h-full max-sm:w-full max-sm:py-4 max-sm:px-4 max-sm:text-3xl text-amber-500 
           md:text-3xl md:flex md:col-start-1 md:row-start-1 md:text-amber-500 " >Who am I?</h1>
          <hr className=" max-sm:border-black  max-sm:w-full self-center 
           md:row-start-1 md:border-2 md:border-amber-500 md:w-1/5    " />
                        </div>    
          <p className=" max-sm:h-full max-sm:px-4 max-sm:w-full md:row-start-2 
           md:border-2 md:border-amber-500 md:rounded-xl md:px-4 md:py-2 md:text-xl md:text-justify " >I’m a full-stack JavaScript Developer from Houston, Texas, working in web development and Digital Marketing. 
            I enjoy creating intuitive and engaging user experiences and designs.
            My aim is to bring you a functional application with a clean, intuitive interface that delivers a quality experience to
             your customers and represents your brand the way you want it to!
          </p>
        </div>
        
      <div className=" max-sm:justify-center  max-sm:flex max-sm:flex- max-sm:justify-self-center  max-sm:row-start-2 max-sm:col-start-1 max-sm:col-span-2
        max-sm:h-full max-sm:border-2 max-sm:border-amber-500 max-sm:rounded-2xl  max-sm:w-5/6 max-sm:flex-col max-sm:grid max-sm:place-self-center max-sm:space-y-4
        md:row-start-1  md:col-start-4 md:col-span-2  md:self-center  md:flex md:flex-col md:flex-wrap  
        md:place-items-center md:w-1/2 md:h-1/3 md:group md:place-self-center  md:justify-around "  >
          {/* Modify layout items & add title card. */}
          <div className=" max-sm:flex max-sm:col-start-2 col-span-2 max-sm:justify-self-center max-sm:flex-col max-sm:items-stretch 
                          max-sm:grid max-sm:grid-cols-2  max-sm:h-1/4 
                          md:flex md:flex-row md:row-start-1 md:col-start-1 "  >
            <div className=" max-sm:justify-self-center max-sm:w-1/2 max-sm:h-full max-sm:self-stretch max-sm:col-start-1 
             md:flex md:justify-around  " >
            <Image className=" max-sm:h-full max-sm:w-2/3 max-sm:justify-self-start max-sm:self-end  max-sm:rounded-xl
            md:justify-center md:w-2/3 bg-amber-500 hover:bg-white md:rounded-xl "   src={Phone}   alt='Phone Icon' />
            </div>
           
            <div className=" max-sm:flex max-sm:h-full max-sm:w-full max-sm:self-stretch max-sm:col-start-2 max-sm:flex-wrap
                              md:flex md:flex-col  md:justify-center   "  >
              <h3 className=" max-sm:justify-self-start max-sm:w-full  max-sm:self-start max-sm:text-2xl
              md:text-center md:text-xl text-amber-500  "  >Phone</h3>
              <p className=" max-sm:justify-self-start  max-sm:w-full max-sm:text-base max-sm:self-center 
              md:place-self-center md:text-lg  " >832-270-3292</p>
            </div>
            
          </div>
          
          <div className=" max-sm:flex max-sm:col-start-2 col-span-2 max-sm:justify-self-center max-sm:flex-col max-sm:items-stretch  max-sm:rounded-xl
                          max-sm:grid max-sm:grid-cols-2  max-sm:h-1/4 
                           md:group md:row-start-2 md:col-start-2 md:col-span-2 md:flex md:flex-row   "  >
            <div className=" max-sm:justify-self-center max-sm:w-1/2 max-sm:h-full max-sm:self-stretch max-sm:col-start-1  
             md:flex md:justify-around   " >
            <Image className=" max-sm:h-full max-sm:w-2/3 max-sm:justify-self-start max-sm:self-end max-sm:rounded-xl 
            md:w-2/3  bg-amber-500 hover:bg-white md:rounded-xl "   src={Location}   alt='Location' />
            </div>
           
            <div className=" max-sm:flex max-sm:h-full max-sm:w-full max-sm:self-stretch max-sm:col-start-2 max-sm:flex-wrap md:flex md:flex-col   "  >
              <h3 className=" max-sm:justify-self-start max-sm:w-full  max-sm:self-start max-sm:text-2xl
              md:text-center md:text-xl text-amber-500 "  >Location</h3>
              <p className=" max-sm:justify-self-start  max-sm:w-full max-sm:text-base max-sm:self-center md:place-self-center md:text-lg  " >Houston, Texas</p>
            </div>
            
          </div>
          <div className=" max-sm:flex max-sm:col-start-2 col-span-2 max-sm:justify-self-center max-sm:flex-col max-sm:items-stretch 
                          max-sm:grid max-sm:grid-cols-2  max-sm:h-1/4 md:flex md:flex-row md:row-start-2 md:col-start-2   "  >
            <div className=" max-sm:justify-self-center max-sm:w-1/2 max-sm:h-full max-sm:self-stretch max-sm:col-start-1
             md:flex md:justify-around  " >
            <Image className=" max-sm:h-full max-sm:w-2/3 max-sm:justify-self-start max-sm:self-end  max-sm:rounded-xl
             md:w-2/3 md:rounded-xl
                               md:place-self-center bg-amber-500 hover:bg-white md:rounded-xl  "   src={Email}   alt='Phone Icon' />
            </div>
           
            <div className=" max-sm:flex max-sm:h-full max-sm:w-full max-sm:self-stretch max-sm:col-start-2 max-sm:flex-wrap
                             md:flex md:flex-col md:justify-around"  >
              <h3 className=" max-sm:justify-self-start max-sm:w-full  max-sm:self-start max-sm:text-2xl
               md:text-center md:text-xl text-amber-500 "  >Email</h3>
              <p className=" max-sm:justify-self-start  max-sm:w-full max-sm:text-base max-sm:self-center max-sm:text-sm
                             md:justify-center md:text-lg md:text-center  " >jborner111@gmail.com</p>
            </div>
            
          </div>
          <div className=" max-sm:flex max-sm:col-start-2 col-span-2 max-sm:justify-self-center max-sm:flex-col max-sm:items-stretch 
                          max-sm:grid max-sm:grid-cols-2  max-sm:h-1/4 md:row-start-2 md:col-start-2  md:flex md:self-start md:flex-row md:row-start-2  "  >
            <div className=" max-sm:justify-self-center max-sm:w-1/2 max-sm:h-full max-sm:self-stretch max-sm:col-start-1 
            md:flex md:justify-around md:place-items-start " >
            <Image className=" max-sm:h-full max-sm:w-2/3 max-sm:justify-self-start max-sm:self-end   max-sm:rounded-xl
                              md:w-2/3 bg-amber-500 hover:bg-white md:rounded-lg  "   src={Birthday}   alt='Phone Icon' />
            </div>
           
            <div className=" max-sm:flex max-sm:h-full max-sm:w-full max-sm:self-stretch max-sm:col-start-2 max-sm:flex-wrap md:justify-around 
              "  >
              <h3 className=" max-sm:justify-self-start max-sm:w-full  max-sm:self-start max-sm:text-2xl
                md:text-center md:text-xl text-amber-500 "  >Birthday</h3>
              <p className=" max-sm:justify-self-start  max-sm:w-full max-sm:text-base max-sm:self-center md:justify-center md:text-lg " >Feb 12, 1997</p>
            </div>
            
          </div>
        </div>
      </div>
      </div>
              {/* Encapsulate with parent div. */}
               {/*Fix Adobe Acrobat for PDF Downloads. */}
      

      
        
      <div className=" max-sm:pl-4 max-sm:py-4 max-sm:flex-col max-sm:place-self-center max-sm:space-y-12
                         md:flex md:group  md:row-start-3 md:flex-col md:col-start-1 md:col-span-5 md:space-x-8 md:w-full 
                          md:h-2/3 md:self-start md:space-y-6 
                         "  >
                          <div className=" max-sm:flex max-sm:flex-row 
                          md:flex md:flex-row md:justify-start md:w-2/5  md:items-start " >
                             <h3  className=" max-sm:text-3xl md:text-3xl md:self-start md:px-4 md:w-2/4 text-amber-500  "  >What I do!</h3>
                             <hr  className=" max-sm:w-1/2 border-amber-500 border-2 md:-ml-16 md:w-1/3  self-center   "  />

                          </div>
           <div className=" flex max-sm:grid max-sm:grid-cols-2 max-sm:grid-rows-3 max-sm:space-y-4  md:space-x-8" >
           <div className=" max-sm:justify-center max-sm:row-start-1 max-sm:col-start-1 max-sm:col-span-2   max-sm:border-2 max-sm:rounded-lg max-sm:w-full max-sm:flex max-sm:flex-row max-sm:space-x-4
                           md:border-2 border-amber-500  md:rounded-2xl md:flex md:space-x-2 md:h-full "  >
            <Image className="max-sm:h-1/4 max-sm:w-1/4 max-sm:justify-center max-sm:self-start max-sm:rounded-lg
                              md:self-start bg-amber-500 hover:bg-white md:rounded-xl md:border-2 md:border-black  " src={UX} alt='Design Image'  />
            <div className=" md:flex md:flex-col  "  >
            <h3 className=" max-sm:text-xl md:text-2xl  "  >UI/UX Design</h3>
            <p className="  " >I design modern, clean application interfaces based on extensive market and industry research.  </p>
            </div>
            
          </div>
          <div className=' max-sm:border-2 max-sm:row-start-2 max-sm:col-start-1 max-sm:col-span-2 max-sm:rounded-lg max-sm:w-full max-sm:flex max-sm:flex-row max-sm:space-x-4 
                          md:border-2 border-amber-500  md:rounded-2xl md:flex md:space-x-2 md:h-full '  >
          <Image className=" max-sm:h-1/4 max-sm:w-1/4  max-sm:justify-center max-sm:self-start max-sm:rounded-lg
                             md:self-start bg-amber-500 hover:bg-white md:rounded-xl md:border-2 md:border-black " src={Coding} alt='Web Development'  />
          <div  className="md:flex md:flex-col " >
          <h3 className='max-sm:text-xl md:text-2xl ' >Web Development</h3>
            <p>I utilize the React.js and Next.js frameworks to deliver fast, scalable, quality web applications to you and your clientele 
               in a timely manner.  </p>
          </div>
            
          </div>
          <div className=' max-sm:border-2 max-sm:row-start-3 max-sm:col-start-1 max-sm:col-span-2 max-sm:rounded-lg max-sm:w-full max-sm:flex max-sm:flex-row max-sm:space-x-4 
                          md:border-2 border-amber-500  md:rounded-2xl md:flex md:space-x-2 md:h-full ' >
          <Image className=" max-sm:h-1/4 max-sm:w-1/4  max-sm:self-start max-sm:pl-2 max-sm:rounded-lg
                             md:self-start bg-amber-500 hover:bg-white md:rounded-lg md:border-2 md:border-black " src={Seo} alt='SEO'  />
          <div>
          <h3 className='max-sm:text-xl md:text-2xl  ' >Digital Marketing & SEO</h3>
            <p>I have extensive knowledge of Search Engine Optimization tools and Digital Marketing expertise to make sure your application reaches 
              your target audience in a way that they find appealing and engaging! </p>
          </div>
            
          </div>

           </div>
          
        </div>
        {/* Need to modify the second row out of order.*/}
        <div className='max-sm:flex max-sm:flex-col max-sm:col-span-4
        md:flex md:flex-col md:row-start-4 md:col-start-1 md:col-span-4 md:justify-around md:w-full md:space-y-4 md:self-start 
         ' >
          <div className=" flex " >
          <h1 className=" max-sm:text-3xl md:text-3xl md:pl-4 text-amber-500 " >Coding Languages</h1>
          </div>
          
          <div className='max-sm:flex max-sm:flex-row max-sm:place-self-center max-sm:col-span-4 
           md:flex md:border-2 md:border-amber-500 md:rounded-lg md:col-start-1 md:col-span-2 md:flex-row ' >
            <div className=" max-sm:flex max-sm:w-full max-sm:space-x-4 md:flex md:justify-around md:flex-row md:w-full   " >
             <div className="max-sm:flex max-sm:flex-col max-sm:w-2/3
              md:flex md:flex-row md:space-x-2   " >
              <Image className='bg-amber-500 max-sm:rounded-lg max-sm:w-10 
              md:w-3/4 md:h-3/4 hover:bg-white md:rounded-xl md:self-center ' src={Javascript} alt='JavaScript' />
              <h1 className='max-sm:justify-center md:self-center md:text-2xl text-amber-500 ' >JS</h1>
             </div>
             <div className="max-sm:flex max-sm:flex-col max-sm:w-2/3
             md:flex  md:flex-row md:space-x-2  " >
              <Image className='bg-amber-500 max-sm:rounded-lg max-sm:w-10
               md:w-3/4 md:h-3/4 hover:bg-white md:rounded-xl md:self-center  ' src={Html} alt='html' />
              <h1 className='  max-sm:justify-center md:self-center md:text-2xl text-amber-500 ' >HTML</h1>
              </div>
             <div className="max-sm:flex max-sm:flex-col max-sm:w-2/3
              md:flex md:flex-row md:space-x-2 " >
              <Image className=" bg-amber-500 max-sm:rounded-lg max-sm:w-10
               md:w-3/4 md:h-3/4 hover:bg-white md:rounded-xl  md:self-center " src={Css} alt='css' />
              <h1 className='max-sm:justify-center md:self-center md:text-2xl text-amber-500 ' >Css</h1>
              </div>
              <div className="max-sm:flex max-sm:flex-col max-sm:w-2/3
              md:flex md:flex-row md:space-x-2 " >
              <Image className=" bg-amber-500 max-sm:rounded-lg max-sm:w-10
               md:w-3/4 md:h-3/4 hover:bg-white md:rounded-xl  md:self-center " src={Express} alt='css' />
              <h1 className='max-sm:justify-center md:self-center md:text-2xl text-amber-500 ' >Express</h1>
              </div>
              <div className="max-sm:flex max-sm:flex-col max-sm:w-2/3
              md:flex md:flex-row md:space-x-2 " >
              <Image className=" bg-amber-500 max-sm:rounded-lg max-sm:w-10
               md:w-3/4 md:h-3/4 hover:bg-white md:rounded-xl  md:self-center " src={ReactJS} alt='css' />
              <h1 className='max-sm:justify-center md:self-center md:text-2xl text-amber-500 ' >React</h1>
              </div>
             
              <div className="max-sm:flex max-sm:flex-col max-sm:w-2/3
              md:flex md:flex-row md:space-x-2 " >
              <Image className=" bg-amber-500 max-sm:rounded-lg max-sm:w-10
               md:w-3/4 md:h-3/4 hover:bg-white md:rounded-xl  md:self-center " src={Tailwind} alt='css' />
              <h1 className='max-sm:justify-center md:self-center md:text-2xl text-amber-500 ' >Tailwind</h1>
              </div>
            </div>
          </div>
          
          <div className=" md:flex md:flex-col md:w-full  md:col-start-1 md:col-span-3   " >
      <AboutFooter/>
      </div>
        </div>
        
           
       </div>
     
      
  </div>
  )
}

export default About