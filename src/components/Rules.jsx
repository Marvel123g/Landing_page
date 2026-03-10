import React from 'react'
import Hero from "../assets/guidelines.png"

export default function Rules() {
  return (
    <section className='rules_section flex items-center relative text-white'>
        <div className="rules-text p-30">
          <p className='text-5xl font-bold' style={{ fontFamily: "ClashDisplay" }}>Rules and <br /><span className='text-[#D434FE]'>Guildelines</span></p>
        <p className='font-normal text-sm leading-[27.5px] mt-7' style={{ fontFamily: "Montserrat" }}>Our tech hackathon is a melting pot of visionaries, and its purpose is as
        clear as day: to shape the future. Whether you're a coding genius, a 
        design maverick, or a concept wizard, you'll have the chance to transform 
        your ideas into reality. Solving real-world problems, pushing the boundaries
        of technology, and creating solutions that can change the world,
        that's what we're all about!</p>
        </div>
    <div>
      <img src={Hero} alt="Rules Section Image " />
      
    </div>
    </section>
  )
}
