import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
//import Home from '../../images/icons8-home-24.png'
import About from '../../images/icons8-about-me-50.png'
import Resume from '../../images/icons8-resume-48.png'
import Projects from '../../images/icons8-projects-50.png'
import Home from '../../images/homeicon.png'

const NewProjectNav = () => {
  return (
    
    <div className=" max-sm:flex  max-sm:col-start-1 max-sm:flex-row max-sm:justify-around max-sm:w-full
     md:row-start-1
    md:flex md:flex-row md:w-1/2 md:col-start-2 md:justify-around md:h-1/4 md:relative md:-top-64 md:z-50 "  >
      {/* Fix Nav Bar with button and add hamburger bars. */}
      {/*Research conditional rendering using classes. */}
      <div className="md:flex md:flex-row md:rounded-xl md:pt-2 md:space-x-2 md:pr-2 md:pl-2 max-sm:z-50 " >
        
        <Link className=" md:text-xl  "  href="/" >
          <Image className="  bg-amber-500 hover:bg-white hover:border-2 hover:border-amber-500 max-sm:rounded-lg  md:rounded-xl max-sm:rounded-xl md:w-full  md:h-full md:rounded-lg " src={Home} alt="Home"  />
          </Link>
      </div>
      <div className="md:flex md:flex-row md:rounded-xl md:pt-2 md:space-x-2 md:pr-2 md:pl-2  max-sm:z-50 " >
      <Link className=" md:text-xl " href="/about" >
        <Image className="  bg-amber-500 hover:bg-white hover:border-2 hover:border-amber-500 max-sm:rounded-lg md:w-full md:h-full md:rounded-lg " src={About} alt="About"  />
        </Link>
      </div>
      <div className="md:flex md:flex-row  md:rounded-xl md:pt-2 md:space-x-2 md:pr-2 md:pl-2 max-sm:z-50  " >
      
      <Link className=" md:text-xl" href="/resume"  >
        <Image className="  bg-amber-500 hover:bg-white hover:border-2 hover:border-amber-500 max-sm:rounded-lg md:w-full md:h-full md:rounded-lg " src={Resume} alt="Resume"  />
        </Link>
      </div>
      <div className="md:flex md:flex-row md:rounded-xl md:pt-2 md:space-x-2 md:pr-2 md:pl-2 max-sm:z-50 " >
      
      <Link className=" md:text-xl " href="/newProjects"  >
        <Image className="  bg-amber-500 hover:bg-white hover:border-2 hover:border-amber-500 max-sm:rounded-lg md:w-full md:h-full md:rounded-lg " src={Projects} alt="Projects"  />
        </Link>
      </div>
      
    </div>
  )
}

export default NewProjectNav