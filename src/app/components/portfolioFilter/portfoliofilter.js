import React from 'react'
import Link from 'next/link'

const PortfolioFilter = () => {
  return (
    <div className=" max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:px-4 
                      md:row-start-1 md:col-start-2 md:col-span-3 md:w-full md:pb-12 md:flex md:flex-row md:justify-around md:px-4    " >
        {/* Make filter for your projects. Give Web Dev, UI and Design active states. If a project is active, show it. */}
        <div className=" " >
           <h1 className="  md:text-color-500 md:text-amber-500 md:rounded-lg md:bg-white " >All</h1>
        </div>
        <div className=" " >
           <h1 className=" md:text-amber-500 md:bg-white md:rounded-lg " >Web Development</h1>
        </div>
        <div className=" " >
            <h1 className="md:text-amber-500 md:bg-white md:rounded-lg " >UI/UX</h1>
        </div>
        <div className=" " >
            <h1 className=" md:text-amber-500 md:bg-white md:rounded-lg " >Design</h1>
        </div>
        
    </div>
  )
}

export default PortfolioFilter