import React from 'react'
import Cup from "../assets/cup.png"
import Silver from "../assets/silver_medal.png"
import Bronze from "../assets/bronze_medal.png"
import Gold from "../assets/gold_medal.png"
import Star from "../assets/star.png";
import Spark from "../assets/starpu.png";

export default function Price() {
  return (
    <section className='px-4 sm:px-8 md:px-12 py-15 lg:px-20 relative'>
        <div className="absolute top-8 left-4 sm:top-10 sm:left-8 md:top-14 md:left-18 lg:top-14 lg:left-18">
            <img src={Spark} alt="" className="w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8" />
        </div>

        <div className="absolute bottom-5 left-4 sm:bottom-8 sm:left-10 md:bottom-10 md:left-20 lg:bottom-10 lg:left-40 opacity-16">
            <img src={Star} alt="" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
        </div>
        
        <div className="absolute top-40 left-20 sm:top-50 sm:left-60 md:top-60 md:left-100 lg:top-60 lg:left-150">
            <img src={Star} alt="" className="w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8" />
        </div>
        
        <div className="absolute top-0 right-2 sm:right-4 md:right-6 lg:right-9">
            <img src={Star} alt="" className="w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8" />
        </div>

        <div className="content flex flex-col items-center lg:items-end">
            <div className="heading text-center lg:text-right text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-15 md:mb-20 lg:mb-30" style={{ fontFamily: "ClashDisplay" }}>
                <h1 className='text-white'>Prizes and <br /><span className='text-[#D434FE]'>Rewards</span></h1>
                <p className='font-normal text-xs sm:text-sm text-white mt-2 max-w-md lg:max-w-none mx-auto lg:mx-0'>
                    Highlight of the prizes or rewards for winners and for participants.
                </p>
            </div>

            <div className="card_wrapper flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-0">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img src={Cup} alt="" className='object-contain w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-300'/>
                </div>
                
                <div className="box flex flex-row justify-center items-end gap-3 sm:gap-4 md:gap-6 w-full lg:w-1/2 pb-0 lg:pb-6">
                    <div className="card relative bg-[#D434FE1F] border-[#D434FE] border rounded-lg w-28 sm:w-32 md:w-36 lg:w-auto flex-shrink-0">
                        <img src={Silver} alt="" className="absolute -top-20 sm:-top-13 lg:-top-28 left-1/2 -translate-x-1/2 w-16 sm:w-20 lg:w-auto"/>
                        <div className="details py-8 sm:py-10 lg:py-15 text-center mt-6 sm:mt-8 lg:mt-9 px-2 sm:px-3" style={{fontFamily: "Montserrat"}}>
                            <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-white'>2nd <br /><span className='font-semibold text-sm sm:text-lg lg:text-2xl'>Runner</span></h1>
                            <span className='text-[#D434FE] font-bold text-xl sm:text-2xl lg:text-4xl'>N300k</span>
                        </div>
                    </div>

                    <div className="card relative bg-[#903AFF1F] border-[#903AFF] border rounded-lg w-32 sm:w-36 md:w-40 lg:w-auto flex-shrink-0">
                        <img src={Gold} alt="" className='absolute -top-20 sm:-top-13 lg:-top-27 left-1/2 -translate-x-1/2 w-16 sm:w-20 lg:w-auto'/>
                        <div className="details py-10 sm:py-12 lg:py-18 text-center mt-6 sm:mt-8 lg:mt-9 px-2 sm:px-3" style={{fontFamily: "Montserrat"}}>
                            <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-white'>1st <br /><span className='font-semibold text-sm sm:text-lg lg:text-2xl'>Runner</span></h1>
                            <span className='text-[#903AFF] font-bold text-xl sm:text-2xl lg:text-4xl'>N400k</span>
                        </div>
                    </div>

                    <div className="card relative bg-[#D434FE1F] border-[#D434FE] border rounded-lg w-28 sm:w-32 md:w-36 lg:w-auto flex-shrink-0">
                        <img src={Bronze} alt="" className='absolute -top-20 sm:-top-13 lg:-top-27 left-1/2 -translate-x-1/2 w-16 sm:w-20 lg:w-auto' />
                        <div className="details py-8 sm:py-10 lg:py-15 text-center mt-6 sm:mt-8 lg:mt-9 px-2 sm:px-3" style={{fontFamily: "Montserrat"}}>
                            <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-white'>3rd <br /><span className='font-semibold text-sm sm:text-lg lg:text-2xl'>Runner</span></h1>
                            <span className='text-[#D434FE] font-bold text-xl sm:text-2xl lg:text-4xl'>N150k</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}