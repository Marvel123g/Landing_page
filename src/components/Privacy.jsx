import React from 'react'
import PrivacyHero from "../assets/privacy.png"
import { FiCheck } from "react-icons/fi"
import Star from "../assets/star.png";
import Spark from "../assets/starpu.png";

export default function Privacy() {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-12 px-4 md:px-10 lg:px-20 py-10 md:py-16 lg:py-24 text-white bg-[#150f25] relative overflow-hidden">

      <div className="absolute top-40 left-4 md:top-150 md:left-9 opacity-19">
        <img src={Spark} alt="" className="w-5 h-6 md:w-7 md:h-8" />
      </div>
      
      <div className="absolute top-10 right-4 md:top-20 md:left-110 opacity-16">
        <img src={Star} alt="" className="w-5 h-6 md:w-7 md:h-8" />
      </div>
      
      <div className="absolute bottom-20 right-4 md:bottom-56 md:right-130">
        <img src={Star} alt="" className="w-4 h-4 md:w-5 md:h-5" />
      </div>
      
      <div className="absolute bottom-40 right-4 md:bottom-86 md:right-10 opacity-16">
        <img src={Star} alt="" className="w-4 h-4 md:w-5 md:h-5" />
      </div>
      
      <div className="absolute bottom-60 right-20 md:bottom-106 md:right-140">
        <img src={Spark} alt="" className="w-4 h-4 md:w-5 md:h-5" />
      </div>
      
      <div className="absolute top-10 left-4 md:top-20 md:right-50">
        <img src={Star} alt="" className="w-4 h-4 md:w-5 md:h-5" />
      </div>

      <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
        <img 
          src={PrivacyHero} 
          alt="" 
          className="w-4/5 sm:w-3/5 lg:w-full max-w-xs sm:max-w-sm lg:max-w-200 object-contain mx-auto"
        />
      </div>

      <div className="content w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">

        <div className="heading mb-4 md:mb-6">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" 
            style={{fontFamily: "ClashDisplay"}}
          >
            Privacy Policy and <br />
            <span className="text-[#D434FE]">Terms</span>
          </h2>

          <small className="text-white text-xs sm:text-sm" style={{ fontFamily: "Montserrat" }}>
            Last updated on September 12, 2023
          </small>
        </div>

        <p className="mb-4 md:mb-8 text-white text-xs sm:text-sm px-2 lg:px-0" style={{ fontFamily: "Montserrat" }}>
          Below are our privacy & policy, which outline a lot of goodies. it's our aim to always take care of our participant
        </p>

        <div className="border border-[#D434FE] rounded p-4 sm:p-6 md:p-8 lg:p-20 bg-[#D434FE1A] flex flex-col items-center lg:items-start" style={{ fontFamily: "Montserrat" }}>
          
          <div className="w-full">
            <p className="text-white text-xs sm:text-sm mb-4 md:mb-6 text-center lg:text-left">
              At getlinked tech Hackathon 1.0, we value your privacy
              and are committed to protecting your personal information.
              This Privacy Policy outlines how we collect, use, disclose,
              and safeguard your data when you participate in our tech
              hackathon event. By participating in our event, you consent
              to the practices described in this policy.
            </p>

            <div className="title mb-4 md:mb-6 flex flex-col gap-1 md:gap-2 text-center lg:text-left">
              <b className="text-[#D434FE] font-bold text-sm sm:text-base">Licensing Policy</b>
              <span className="text-white font-bold text-xs sm:text-sm">
                Here are terms of our Standard License:
              </span>
            </div>

            <div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4 text-left">
              <span className="bg-[#2DE100] p-1 rounded-full shrink-0 mt-0.5">
                <FiCheck className='text-white text-xs'/>
              </span>
              <p className="text-white text-xs sm:text-sm">
                The Standard License grants you a non-exclusive right to navigate and register for our event
              </p>
            </div>

            <div className="flex items-start gap-2 md:gap-3 mb-4 md:mb-6 text-left">
              <span className="bg-[#2DE100] p-1 rounded-full shrink-0 mt-0.5">
                <FiCheck className='text-white text-xs'/>
              </span>
              <p className="text-white text-xs sm:text-sm">
                You are licensed to use the item available at any free source sites, for your project development
              </p>
            </div>
          </div>

          <button className="text-white bg-linear-to-r from-[#fe34b9] to-[#903aff] border-[#D434FE] px-4 sm:px-6 py-1.5 sm:py-2 rounded-sm font-medium text-sm sm:text-base">
            Read More
          </button>

        </div>
      </div>

    </section>
  )
}