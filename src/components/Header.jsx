import React from 'react'
import Hero from "../assets/Image.png"
import Spark from "../assets/spark.png"
import Chain from "../assets/chain.png"

export default function Header() {
  return (
    <header className='flex items-center w-full min-h-screen bg-linear-to-b from-[#150E28] to-[#1A0B2E] text-white px-8'>
        <div className="content max-w-2xl w-full">
            <div className='flex items-center '>
                <p className="text-7xl font-bold" style={{ fontFamily: "ClashDisplay" }}>
                    getlinked Tech <br /> 
                    <span className='flex items-center'>
                        Hackathon <span className='text-transparent bg-clip-text bg-linear-to-r from-[#D434FE] to-[#FF26B9]'> 1.0</span>
                        <div className='flex'>
                            <img src={Chain} alt="" className="w-18 h-18"/>
                            <img src={Spark} alt="" className="w-18 h-18"/>
                        </div>
                    </span>
                </p>
                
            </div>
           
            <p className="text-xl font-normal text-white mb-8 max-w-xl mt-2" style={{ fontFamily: "Montserrat" }}>
                Participate in getlinked tech Hackathon 2023 stand a chance to win a Big price
            </p>
            <button className="px-8 py-3 bg-linear-to-r from-[#D434FE] to-[#FF26B9] rounded-sm font-semibold mb-8">
                Register
            </button>
            <div className="timer flex gap-6">
                <div className="text-center">
                    <span className="text-7xl font-normal">00</span>
                    <span className="text-sm ml-1 text-white" style={{ fontFamily: "Montserrat" }}>H</span>
                </div>
                <div className="text-center">
                    <span className="text-7xl font-normal">00</span>
                    <span className="text-sm ml-1 text-white" style={{ fontFamily: "Montserrat" }}>M</span>
                </div>
                <div className="text-center">
                    <span className="text-7xl font-normal">00</span>
                    <span className="text-sm ml-1 text-white" style={{ fontFamily: "Montserrat" }}>S</span>
                </div>
            </div>
        </div>
        <div className="flex-1 flex justify-end">
            <img src={Hero} alt="Hero" className="hero object-contain w-full max-w-xxl"/>
        </div>
    </header>
  )
}


