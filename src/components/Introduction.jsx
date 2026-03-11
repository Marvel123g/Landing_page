import React from 'react'
import Hero from "../assets/idea.png"
import Arrow from "../assets/arrow.png"
import Spark from "../assets/starpu.png";

export default function Introduction() {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between min-h-screen text-white bg-[#150f25] px-6 py-10 md:px-10 lg:px-20 md:py-0 relative'>
      <div className="absolute top-20 left-4 md:top-44 md:left-18">
        <img src={Spark} alt="" className="w-5 h-6 md:w-7 md:h-8" />
      </div>

      <div className="absolute bottom-20 right-4 md:bottom-20 md:right-10">
        <img src={Spark} alt="" className="w-5 h-6 md:w-7 md:h-8" />
      </div>

      <div className='relative'>
        <img 
          src={Hero} 
          alt="Introduction Hero Image" 
          className='object-contain w-4/5 sm:w-2/3 md:w-1/2 lg:w-2/5 max-w-full mx-auto' 
        />
        <img 
          src={Arrow} 
          alt="Arrow Image" 
          className='absolute bottom-0 right-0 object-contain w-6 sm:w-8 md:w-10 rotate-270' 
        />
      </div>
      
      <div className="content max-w-lg text-center md:text-left">
        <h1 
          className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-0' 
          style={{ fontFamily: "ClashDisplay" }}
        >
          Introduction to getlinked <br />
          <span className='text-[#D434FE]'>tech Hackathon 1.0</span>
        </h1>
        
        <p 
          className='font-normal text-xs sm:text-sm leading-5 sm:leading-6 md:leading-[27.5px] mt-2 md:mt-3 px-2 md:px-0' 
          style={{ fontFamily: "Montserrat" }}
        >
          Our tech hackathon is a melting pot of visionaries, and its purpose is as
          clear as day: to shape the future. Whether you're a coding genius, a 
          design maverick, or a concept wizard, you'll have the chance to transform 
          your ideas into reality. Solving real-world problems, pushing the boundaries
          of technology, and creating solutions that can change the world,
          that's what we're all about!
        </p>
      </div>
    </section>
  )
}