import React from 'react'
import Assured from "../assets/libertyassured.png"
import Pay from "../assets/libertyPay.png"
import Winwise from "../assets/winwise.png"
import Whispersms from "../assets/whispersms.png"
import Star from "../assets/star.png";
import Spark from "../assets/starpu.png";

export default function Sponsors() {
  return (
    <section className="py-8 sm:py-10 md:py-16 lg:py-20 px-3 sm:px-4 md:px-8 lg:px-16 bg-[#150E28] text-white relative overflow-hidden">

      <div className="absolute top-10 left-2 sm:top-16 sm:left-4 md:top-28 md:left-10 lg:top-44 lg:left-18">
        <img src={Spark} alt="" className="w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-7 lg:w-7 lg:h-8" />
      </div>

      <div className="absolute bottom-5 right-2 sm:bottom-8 sm:right-4 md:bottom-12 md:right-10 lg:bottom-20 lg:right-16 xl:left-130">
        <img src={Star} alt="" className="w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-7 lg:w-7 lg:h-8" />
      </div>
      
      <div className="absolute top-20 right-2 sm:top-28 sm:right-4 md:top-40 md:right-10 lg:top-60 lg:right-20 xl:left-150">
        <img src={Spark} alt="" className="w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-7 lg:w-7 lg:h-8" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h3 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 md:mb-4 px-2" 
            style={{ fontFamily: "ClashDisplay" }}
          >
            Partners and Sponsors
          </h3>

          <p 
            className="text-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base max-w-2xl mx-auto px-4" 
            style={{ fontFamily: "Montserrat" }}
          >
            Getlinked Hackathon 1.0 is honored to have the following major 
            companies as its partners and sponsors
          </p>
        </div>

        <div className="logo_section grid grid-cols-3 border border-[#D434FE] rounded-lg sm:rounded-xl p-1 sm:p-2 md:p-4 lg:p-6 xl:p-10">
          
          <div className="relative flex items-center justify-center p-1 sm:p-2 md:p-3 lg:p-5 xl:p-10 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[150px]">
            <img 
              src={Assured} 
              alt="Liberty Assured" 
              className="max-w-[50px] xs:max-w-[60px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-full object-contain" 
            />

            <span className="absolute right-0 top-1 bottom-1 sm:top-2 sm:bottom-2 md:top-3 md:bottom-3 lg:top-4 lg:bottom-4 xl:top-6 xl:bottom-6 w-px bg-[#D434FE]"></span>
            <span className="absolute bottom-0 left-1 right-1 sm:left-2 sm:right-2 md:left-3 md:right-3 lg:left-4 lg:right-4 xl:left-6 xl:right-6 h-px bg-[#D434FE]"></span>
          </div>

          <div className="relative flex items-center justify-center p-1 sm:p-2 md:p-3 lg:p-5 xl:p-10 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[150px]">
            <img 
              src={Pay} 
              alt="Liberty Pay" 
              className="max-w-[50px] xs:max-w-[60px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-full object-contain" 
            />
            <span className="absolute right-0 top-1 bottom-1 sm:top-2 sm:bottom-2 md:top-3 md:bottom-3 lg:top-4 lg:bottom-4 xl:top-6 xl:bottom-6 w-px bg-[#D434FE]"></span>
            <span className="absolute bottom-0 left-1 right-1 sm:left-2 sm:right-2 md:left-3 md:right-3 lg:left-4 lg:right-4 xl:left-6 xl:right-6 h-px bg-[#D434FE]"></span>
          </div>

          <div className="relative flex items-center justify-center p-1 sm:p-2 md:p-3 lg:p-5 xl:p-10 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[150px]">
            <img 
              src={Winwise} 
              alt="Winwise" 
              className="max-w-[50px] xs:max-w-[60px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-full object-contain" 
            />
            <span className="absolute bottom-0 left-1 right-1 sm:left-2 sm:right-2 md:left-3 md:right-3 lg:left-4 lg:right-4 xl:left-6 xl:right-6 h-px bg-[#D434FE]"></span>
          </div>

          <div className="relative flex items-center justify-center p-1 sm:p-2 md:p-3 lg:p-5 xl:p-10 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[150px]">
            <img 
              src={Whispersms} 
              alt="Whispersms" 
              className="max-w-[50px] xs:max-w-[60px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[120px] xl:max-w-full object-contain" 
            />
            <span className="absolute right-0 top-1 bottom-1 sm:top-2 sm:bottom-2 md:top-3 md:bottom-3 lg:top-4 lg:bottom-4 xl:top-6 xl:bottom-6 w-px bg-[#D434FE]"></span>
          </div>

          <div className="relative flex items-center justify-center p-1 sm:p-2 md:p-3 lg:p-5 xl:p-10 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[150px]">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center" style={{ fontFamily: "TypoHoop" }}>
              Pay<span className="text-[#00A3FF]">box</span>
            </p>
            <span className="absolute right-0 top-1 bottom-1 sm:top-2 sm:bottom-2 md:top-3 md:bottom-3 lg:top-4 lg:bottom-4 xl:top-6 xl:bottom-6 w-px bg-[#D434FE]"></span>
          </div>

          <div className="relative flex items-center justify-center p-1 sm:p-2 md:p-3 lg:p-5 xl:p-10 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[150px]">
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold" style={{fontFamily: "Voces"}}>
                Vuzual <span className="text-[#FF0000]">Plus</span>
              </p>
              <p className="text-[6px] xs:text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-white" style={{fontFamily: "Voces"}}>
                Design Studios
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}