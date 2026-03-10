import React from 'react'
import Hero from "../assets/idea.png"
import Arrow from "../assets/arrow.png"
export default function Introduction() {
  return (
    <section className='flex items-center justify-between min-h-screen  text-white bg-[#150f25] p-20'>
       <div className='relative'>
         <img src={Hero} alt="Introduction Hero Image" className='object-contain w-full max-w-lg ' />
         <img src={Arrow} alt="Arrow Image" className='absolute bottom-0 right-0 object-contain w-10 rotate-270' />
       </div>
        <div className="content max-w-lg ">
            <h1 className='text-4xl font-bold' style={{ fontFamily: "ClashDisplay" }}>Introduction to getlinked <br /><span className='text-[#D434FE]'>tech Hackathon 1.0</span></h1>
            <p className='font-normal text-sm leading-[27.5px] mt-3' style={{ fontFamily: "Montserrat" }}>Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!</p>
        </div>
    </section>
  )
}
