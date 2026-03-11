import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiPhoneCall, FiMapPin, FiTwitter } from 'react-icons/fi'
import Star from "../assets/star.png";
import Spark from "../assets/starpu.png";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-25 py-15 sm:py-10 md:py-16 lg:py-20 text-white bg-[#100B20] relative">
      
      <div className="absolute top-5 left-4 sm:top-10 sm:left-6 md:top-15 md:left-9">
        <img src={Star} alt="" className="w-4 h-5 sm:w-5 sm:h-6 md:w-7 md:h-8" />
      </div>

      <div className="absolute top-10 right-4 sm:top-15 sm:right-10 md:top-20 md:right-100 opacity-7">
        <img src={Star} alt="" className="w-4 h-5 sm:w-5 sm:h-6 md:w-7 md:h-8" />
      </div>
      
      <div className="absolute bottom-10 right-4 sm:bottom-16 sm:right-10 md:bottom-26 md:left-170">
        <img src={Spark} alt="" className="w-4 h-5 sm:w-5 sm:h-6 md:w-7 md:h-8" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-16 xl:gap-30">
        
        <div className="flex flex-col w-full lg:w-1/3 md:text-left lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-3 md:mb-4" style={{ fontFamily: "ClashDisplay" }}>
            get <span className='text-[#d434fe]'>linked</span>
          </h2>

          <p className="text-white text-xs sm:text-sm md:text-sm leading-5 sm:leading-6 max-w-md mx-auto lg:mx-0" style={{fontFamily: "Montserrat"}}>
            Getlinked Tech Hackathon is a technology innovation program 
            established by a group of organizations with the aim of showcasing 
            young and talented individuals in the field of technology.
          </p>

          <div className="terms flex md:justify-start lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm mt-6 md:mt-8 lg:mt-auto" style={{fontFamily: "Montserrat"}}>
            <p className="cursor-pointer hover:text-[#D434FE] transition-colors">Terms of Use</p>
            <p className="border-l border-[#D434FE] pl-3 sm:pl-4 cursor-pointer hover:text-[#D434FE] transition-colors">Privacy Policy</p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 w-full lg:w-2/3'>
          
          <div className="flex flex-col gap-2 sm:gap-3 w-full sm:w-1/2 md:text-left sm:text-left">
            <b className="text-[#D434FE] text-sm sm:text-base md:text-lg">Useful Links</b>

            <p className='text-xs sm:text-sm md:text-sm cursor-pointer hover:text-[#D434FE] transition-colors' style={{fontFamily: "Montserrat"}}>Overview</p>
            <p className='text-xs sm:text-sm md:text-sm cursor-pointer hover:text-[#D434FE] transition-colors' style={{fontFamily: "Montserrat"}}>Timeline</p>
            <p className='text-xs sm:text-sm md:text-sm cursor-pointer hover:text-[#D434FE] transition-colors' style={{fontFamily: "Montserrat"}}>FAQs</p>
            <p className='text-xs sm:text-sm md:text-sm cursor-pointer hover:text-[#D434FE] transition-colors' style={{fontFamily: "Montserrat"}}>Register</p>

            <div className='flex flex-col sm:flex-row md:items-center gap-2 sm:gap-3 mt-2'>
              <span className="text-[#D434FE] text-xs sm:text-sm md:text-base">Follow us</span>
              <div className='flex gap-3 sm:gap-4'>
                <FiInstagram className="text-base sm:text-lg md:text-xl cursor-pointer hover:text-[#D434FE] transition-colors"/>
                <FiTwitter className="text-base sm:text-lg md:text-xl cursor-pointer hover:text-[#D434FE] transition-colors"/>
                <FiFacebook className="text-base sm:text-lg md:text-xl cursor-pointer hover:text-[#D434FE] transition-colors"/>
                <FiLinkedin className="text-base sm:text-lg md:text-xl cursor-pointer hover:text-[#D434FE] transition-colors"/>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:gap-3 w-full sm:w-1/2 md:text-left">
            <b className="text-[#D434FE] text-sm sm:text-base md:text-lg">Contact Us</b>

            <div className='flex flex-col gap-3 sm:gap-4'>
              <p className='text-xs sm:text-sm md:text-sm flex items-center md:justify-start gap-2' style={{fontFamily: "Montserrat"}}>
                <FiPhoneCall className="shrink-0"/>
                <span>+234 6707653444</span>
              </p>

              <div className='text-xs sm:text-sm md:text-sm flex items-start md:justify-start gap-2' style={{fontFamily: "Montserrat"}}>
                <FiMapPin className="shrink-0 mt-0.5" style={{fill: "white"}}/>
                <span>27, Alara Street Yaba 100012 Lagos State</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <p className="text-center mt-8 sm:mt-10 md:mt-19 lg:mt-16 text-xs sm:text-sm text-white" style={{fontFamily: "Montserrat"}}>
        All rights reserved. © getlinked Ltd.
      </p>
    </footer>
  )
}