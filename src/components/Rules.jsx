import React from 'react'
import Hero from "../assets/guidelines.png"
import Star from "../assets/star.png";
import Spark from "../assets/starpu.png";

export default function Rules() {
  return (
    <section className='rules_section flex flex-col md:flex-row items-center justify-between min-h-screen text-white bg-[#150f25] px-6 py-10 md:px-10 lg:px-20 md:py-0 relative overflow-hidden'>

      <div className="absolute top-10 left-4 md:top-24 md:left-120 opacity-16">
        <img src={Star} alt="" className="w-5 h-6 md:w-7 md:h-8" />
      </div>

      <div className="absolute bottom-10 right-4 md:bottom-20 md:right-130">
        <img src={Star} alt="" className="w-5 h-6 md:w-7 md:h-8" />
      </div>

      <div className='w-full md:w-auto flex justify-center order-1 md:order-1'>
        <img 
          src={Hero} 
          alt="Rules Section Image" 
          className='object-contain w-4/5 sm:w-3/5 md:w-full max-w-xs sm:max-w-sm md:max-w-lg mx-auto'
        />
      </div>

      <div className="rules-text w-full md:w-auto text-center md:text-left order-2 md:order-2 mt-8 md:mt-0">
        <p 
          className='text-3xl sm:text-4xl md:text-5xl font-bold' 
          style={{ fontFamily: "ClashDisplay" }}
        >
          Rules and <br />
          <span className='text-[#D434FE]'>Guidelines</span>
        </p>
        
        <p 
          className='font-normal text-xs sm:text-sm leading-5 sm:leading-6 md:leading-[27.5px] mt-4 md:mt-7 max-w-lg px-2 md:px-0' 
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