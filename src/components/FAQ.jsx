import React from 'react'
import Hero from "../assets/FAQ.png"

export default function FAQ() {
  return (
    <section className='FAQ flex items-center text-white relative p-20'>
        <div className="content">
            <h1 className='text-4xl font-bold' style={{ fontFamily: "ClashDisplay" }}>Frequently Ask <br /><span className='text-[#D434FE]'>Question</span></h1>
            <p className='font-normal text-sm leading-[27.5px] mt-4' style={{ fontFamily: "Montserrat" }}>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
            <ul className='flex flex-col gap-6 mt-7'>
                <li className='flex justify-between border-b-[#D434FE] border-b pb-4'>Can I work on a project I started before the hackathon? <span className='text-[#D434FE] text-xl'>+</span> </li>
                <li className='flex justify-between border-b-[#D434FE] border-b pb-4'>What happens if I need help during the hackathon? <span className='text-[#D434FE] text-xl'>+</span> </li>
                <li className='flex justify-between border-b-[#D434FE] border-b pb-4'>What happens if I don't have an idea for a project? <span className='text-[#D434FE] text-xl'>+</span> </li>
                <li className='flex justify-between border-b-[#D434FE] border-b pb-4'>Can I join a team or do I have to come with one? <span className='text-[#D434FE] text-xl'>+</span> </li>
                <li className='flex justify-between border-b-[#D434FE] border-b pb-4'>What happens after the hackathon ends? <span className='text-[#D434FE] text-xl'>+</span></li>
                <li className='flex justify-between border-b-[#D434FE] border-b pb-4'>Can I work on a project I started before the hackathon? <span className='text-[#D434FE] text-xl'>+</span> </li>
            </ul>
        </div>
        <div>
          <img src={Hero} alt="FAQ section Hero Image" className='object-contain w-full max-w-200'/>
        </div>
    </section>
  )
}
