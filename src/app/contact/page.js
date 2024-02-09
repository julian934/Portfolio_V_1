'use client'
import React from 'react'
import Image from 'next/image'
import ContactNav from '../components/contactNav/contactNav'
import ContactFooter from '../components/contactFooter/footer'
import Julian_Borner_Logo from '../images/Julian_Borner_Logo.png'
import {useState,useRef} from 'react'
import emailjs from '@emailjs/browser'

{/* Figure out contact form APIs.*/}
const Contact = () => {
  
  const [email,setEmail]=useState();
  const [message,setMessage]=useState();
  let userRef=useRef();
  let emailRef=useRef();
  let messageRef=useRef();
  let form=useRef();
  let emailState=(event)=>{
    setEmail(emailRef.current.value);
    console.log('email: ',email)
  }
  let messageState=(event)=>{
    setMessage(messageRef.current.value);
    console.log('message: ', message)
  }
  let submitCheck=(event)=>{
    let emailCheck={
      userName:email,
      userMessage:message
    }
            event.preventDefault()
            emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID,process.env.NEXT_PUBLIC_TEMPLATE_ID,form.current,{
              publicKey:process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            }).then(()=>{
              console.log('SUCCESS!');
            },
              (error)=>{
                console.log('FAILED...',error.text);
              })
  }
  
  return (
    <div className=" max-sm:grid max-sm:grid-cols-4 max-sm:grid-rows-6 max-sm:h-screen max-sm:flex max-sm:flex-col bg-zinc-900
                     md:grid md:grid-cols-5 md:grid-rows-4 md:h-screen md:flex md:space-y-8 md: "  >
      <div className=" max-sm:row-start-1 max-sm:col-start-1 max-sm:col-span-3 max-sm:-pl-10
                       md:row-start-1  md:col-start-2   md:self-end md:pt-4 max-sm:w-full " >
        <Image className=' max-sm:w-full max-sm:-ml-20 max-sm:-mt-16 md:h-2/3   ' src={Julian_Borner_Logo} alt='Julians Logo' />
      </div>
      <div className=" max-sm:row-start-1 max-sm:col-start-2 max-sm:col-span-3 max-sm:row-span-2 max-sm:self-center max-sm:pb-4
                       md:row-start-1   md:col-start-4 md:col-span-1 md:self-end md:place-content-center" >
      <ContactNav/>
      </div>
      <div className=" max-sm:row-start-2 max-sm:row-span-2 max-sm:pb-6  max-sm:col-start-1 max-sm:col-span-4 max-sm:space-y-8 max-sm:px-4 max-sm:h-full  
                       max-sm:grid max-sm:grid-cols-3 max-sm:grid-rows-3 max-sm:flex max-sm:space-y-4 max-sm:rounded-xl max-sm:row-span-5
                       md:flex md:row-start-2 md:row-span-2 md:col-start-2 md:col-span-3 md:grid md:grid-cols-2 
                       md:grid-rows-5 md:rounded-2xl  md:space-x-4 md:bg-white " >
        <div className="max-sm:flex max-sm:row-start-1 max-sm:col-start-1 max-sm:col-span-3 max-sm:h-6 max-sm:space-y-4 max-sm:flex-row max-sm:pt-6
        md:flex md:flex-row md:space-x-12 md:justify-start md:h-1/3  " >
          <h1 className=" max-sm:text-4xl md:text-5xl md:space-x-12 text-amber-500 " >Contact</h1>
          <hr className=" md:w-1/3 md:border-2 border-amber-500 md:self-center  " />
        </div>
        <div className=" max-sm:row-start-1 max-sm:flex max-sm:flex-col max-sm:col-start-1 max-sm:col-span-3 max-sm:space-y-6 max-sm:pt-8 
         md:col-start-1 md:col-span-2  md:space-y-12 md:flex md:justify-center md:flex-col md:items-start md:place-items-center 
                         md:col-start-1 md:row-start-2  md:col-span-1 md:h-full md:row-span-2 " >
        <div className=" max-sm:col-start-1 max-sm:py-12 max-sm:group max-sm:border-2 max-sm:border-black
                          max-sm:rounded-xl max-sm:flex max-sm:flex-col max-sm:space-x-12 max-sm:bg-amber-500
                         max-sm:row-start-2 max-sm:col-start-1 max-sm:col-span-3 max-sm:w-full max-sm:h-3/4 
                          md:bg-amber-500
                         md:flex md:flex-col  md:rounded-xl  md:row-span-4 md:h-full md:w-1/4 md:space-x-10 
                         md:justify-around " >
            <h3 className="max-sm:flex max-sm:text-3xl max-sm:pl-12 max-sm:-mt-6 md:h-1/6 md:text-3xl md:pl-10 text-white " >Phone:</h3>
            <p className="max-sm:flex md:text-xl  text-white  " >832-270-3292 </p>
        </div>
        <div className='max-sm:col-start-1 max-sm:col-span-3 max-sm:row-start-2 max-sm:py-12 max-sm:group max-sm:border-2 max-sm:border-black max-sm:flex max-sm:flex-col
                        max-sm:h-3/4 max-sm:rounded-xl 
                        md:flex md:flex-col md:col-start-1 md:rounded-xl md:row-span-2 bg-amber-500
                        md:w-1/4 md:h-full md:space-x-10 
                        md:justify-around ' >
            <h3 className="max-sm:flex max-sm:text-3xl max-sm:pl-12 max-sm:-mt-6 md:h-1/6 md:text-3xl text-white md:pl-10   " >Email:</h3>
            <p className="max-sm:flex md:text-xl max-sm:pl-12  text-white  " >jborner111@gmail.com</p>
        </div>
        </div>
        <div className=' max-sm:row-start-2 max-sm:row-span-2 max-sm:col-start-1 max-sm:col-span-4 max-sm:self-end max-sm:space-y-4 z-50
        md:col-start-2 md:row-start-2 md:row-span-3 md:space-y-4 md:border-amber-500 md:border-2 
        md:flex md:rounded-2xl md:space-x-8 md:w-5/6   md:flex-col   md:justify-start  md:-pl-8          ' >
            <div className=" max-sm:flex max-sm:space-y-4 
            md:flex md:justify-center md:w-full  md:h-2/6" >
              <p className=" max-sm:pb-4 md:text-center md:flex md:row-start-1 text-amber-500 md:text-4xl max-sm:text-2xl md:self-center " >I&apos;m always open to design or development work!</p>
              </div>
          
          <form className=" max-sm:space-y-4   md:flex md:flex-col md:justify-start md:rounded-xl 
                             md:border-2 md:w-full  md:h-full md:self-end md:z-50 md:space-y-10 " ref={form}  onSubmit={submitCheck} >
          
  <label className="block">
    <span className="  text-amber-500 block text-sm max-sm:text-lg font-medium md:text-xl ">Email</span>
    
    <input type="text" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
  </label>
  <label className="block">
    <span className=" text-amber-500 block text-sm max-sm:text-lg font-medium md:text-xl ">Message</span>
    
    <input type="text" name="message" className="  mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
  </label>
            {/*  Get template for button */}
            <button className=' max-sm:flex text-white max-sm:bg-amber-500 max-sm:h-12 max-sm:w-24 max-sm:text-center max-sm:py-2 md:px-20 md:ml-10  max-sm:px-4 max-sm:rounded-lg  max-sm:space-y-4 max-sm:w-1/4 max-sm:text-center max-sm:h-1/2 md:bg-amber-500 md:w-1/2 md:rounded-lg ' type='submit'  >
              <h3 className=" flex max-sm:text-center" >Submit</h3>
              </button>
          </form>
        </div>
        
        <div className=" max-sm:row-start-6 max-sm:col-start-1 max-sm:col-span-4 md:row-start-5 md:col-start-2 " >
        <ContactFooter/>
        </div>
      </div>
        
        
        
    </div>
  )
}

export default Contact