import React from 'react'
import Hero from "../assets/FAQ.png"
import Star from "../assets/star.png";
import Spark from "../assets/starpu.png";

export default function FAQ() {
  return (
    <section className='FAQ flex flex-col-reverse md:flex-row items-center justify-between min-h-screen text-white bg-[#150f25] px-6 py-10 md:px-10 lg:px-20 md:py-0 relative overflow-hidden'>

      {/* Spark/Star decorations - adjusted positions for mobile */}
      <div className="absolute top-10 left-4 md:top-14 md:left-10">
        <img src={Spark} alt="" className="w-5 h-6 md:w-7 md:h-8" />
      </div>

      <div className="absolute top-20 right-4 md:top-4 md:right-120">
        <img src={Spark} alt="" className="w-5 h-6 md:w-7 md:h-8" />
      </div>
      
      <div className="absolute top-40 left-20 md:top-50 md:left-150">
        <img src={Spark} alt="" className="w-5 h-6 md:w-7 md:h-8" />
      </div>

      <div className="absolute bottom-10 right-4 md:bottom-20 md:right-30">
        <img src={Star} alt="" className="w-5 h-6 md:w-7 md:h-8" />
      </div>

      {/* Image section - appears first on mobile due to flex-col-reverse */}
      <div className='w-full md:w-auto flex justify-center order-1 md:order-2 mb-8 md:mb-0'>
        <img 
          src={Hero} 
          alt="FAQ section Hero Image" 
          className='object-contain w-4/5 sm:w-3/5 md:w-full max-w-xs sm:max-w-sm md:max-w-200 mx-auto'
        />
      </div>

      {/* Content section - appears second on mobile */}
      <div className="content w-full md:w-auto text-center md:text-left order-2 md:order-1">
        <h1 
          className='text-3xl sm:text-4xl md:text-4xl font-bold' 
          style={{ fontFamily: "ClashDisplay" }}
        >
          Frequently Ask <br />
          <span className='text-[#D434FE]'>Question</span>
        </h1>
        
        <p 
          className='font-normal text-xs sm:text-sm leading-5 sm:leading-6 md:leading-[27.5px] mt-4 max-w-lg mx-auto md:mx-0' 
          style={{ fontFamily: "Montserrat" }}
        >
          We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
        </p>
        
        <ul className='flex flex-col gap-4 sm:gap-5 md:gap-6 mt-5 md:mt-7 max-w-2xl mx-auto md:mx-0'>
          <li className='flex justify-between items-center border-b-[#D434FE] border-b pb-3 md:pb-4 text-xs sm:text-sm md:text-base'>
            Can I work on a project I started before the hackathon? 
            <span className='text-[#D434FE] text-lg sm:text-xl md:text-xl ml-2'>+</span>
          </li>
          
          <li className='flex justify-between items-center border-b-[#D434FE] border-b pb-3 md:pb-4 text-xs sm:text-sm md:text-base'>
            What happens if I need help during the hackathon? 
            <span className='text-[#D434FE] text-lg sm:text-xl md:text-xl ml-2'>+</span>
          </li>
          
          <li className='flex justify-between items-center border-b-[#D434FE] border-b pb-3 md:pb-4 text-xs sm:text-sm md:text-base'>
            What happens if I don't have an idea for a project? 
            <span className='text-[#D434FE] text-lg sm:text-xl md:text-xl ml-2'>+</span>
          </li>
          
          <li className='flex justify-between items-center border-b-[#D434FE] border-b pb-3 md:pb-4 text-xs sm:text-sm md:text-base'>
            Can I join a team or do I have to come with one? 
            <span className='text-[#D434FE] text-lg sm:text-xl md:text-xl ml-2'>+</span>
          </li>
          
          <li className='flex justify-between items-center border-b-[#D434FE] border-b pb-3 md:pb-4 text-xs sm:text-sm md:text-base'>
            What happens after the hackathon ends? 
            <span className='text-[#D434FE] text-lg sm:text-xl md:text-xl ml-2'>+</span>
          </li>
          
          <li className='flex justify-between items-center border-b-[#D434FE] border-b pb-3 md:pb-4 text-xs sm:text-sm md:text-base'>
            Can I work on a project I started before the hackathon? 
            <span className='text-[#D434FE] text-lg sm:text-xl md:text-xl ml-2'>+</span>
          </li>
        </ul>
      </div>
    </section>
  )
}