import React from 'react'
import Hero from "../assets/Image.png"
import Hero2 from "../assets/manwithglass.png"
import Spark from "../assets/spark.png"
import Chain from "../assets/chain.png"

export default function Header() {
  return (
    <header className='flex flex-col md:flex-row items-center w-full bg-linear-to-b from-[#150E28] to-[#1A0B2E] text-white px-4 md:px-8 py-15 md:py-0'>
        <div className="content w-full md:max-w-2xl text-center md:text-left">
            <div className='flex items-center justify-center md:justify-start '>
                <p className="text-4xl sm:text-5xl md:text-7xl font-bold" style={{ fontFamily: "ClashDisplay" }}>
                    getlinked Tech <br /> 
                    <span className='flex items-center justify-center md:justify-start'>
                        Hackathon <span className='text-transparent bg-clip-text bg-linear-to-r from-[#D434FE] to-[#FF26B9]'> 1.0</span>
                        <div className='flex ml-2'>
                            <img src={Chain} alt="" className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18"/>
                            <img src={Spark} alt="" className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18"/>
                        </div>
                    </span>
                </p>
            </div>
           
            <p className="text-base sm:text-lg md:text-xl font-normal text-white mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 mt-2" style={{ fontFamily: "Montserrat" }}>
                Participate in getlinked tech Hackathon 2023 stand a chance to win a Big price
            </p>
            
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-linear-to-r from-[#D434FE] to-[#FF26B9] rounded-sm font-semibold mb-6 md:mb-8">
                Register
            </button>
            
            <div className="timer flex gap-4 sm:gap-6 justify-center md:justify-start">
                <div className="text-center">
                    <span className="text-5xl sm:text-6xl md:text-7xl font-normal" style={{fontFamily: "UnicaOne"}}>00</span>
                    <span className="text-xs sm:text-sm ml-1 text-white" style={{ fontFamily: "Montserrat" }}>H</span>
                </div>
                <div className="text-center">
                    <span className="text-5xl sm:text-6xl md:text-7xl font-normal" style={{fontFamily: "UnicaOne"}}>00</span>
                    <span className="text-xs sm:text-sm ml-1 text-white" style={{ fontFamily: "Montserrat" }}>M</span>
                </div>
                <div className="text-center">
                    <span className="text-5xl sm:text-6xl md:text-7xl font-normal" style={{fontFamily: "UnicaOne"}}>00</span>
                    <span className="text-xs sm:text-sm ml-1 text-white" style={{ fontFamily: "Montserrat" }}>S</span>
                </div>
            </div>
        </div>
        
        <div className="w-full md:flex-1 flex justify-center md:justify-end relative">
            <img 
                src={Hero} 
                alt="Hero" 
                className="absolute -left-10 opacity-80 top-10 object-contain w-4/5 sm:w-3/4 md:w-full max-w-xl md:max-w-xxl sm:max-h-75"
            />
            <img 
                src={Hero2} 
                alt="Hero" 
                className="object-contain sm:w-3/4 md:w-full max-w-xxl md:max-w-xxl"
            />
        </div>
    </header>
  )
}




