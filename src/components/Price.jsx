import React from 'react'
import Cup from "../assets/cup.png"
import Silver from "../assets/silver_medal.png"
import Bronze from "../assets/bronze_medal.png"
import Gold from "../assets/gold_medal.png"

export default function Price() {
  return (
    <section className='px-20'>
        <div className="content flex flex-col items-end">
            <div className="heading text-4xl font-bold mb-30" style={{ fontFamily: "ClashDisplay" }}>
                <h1 className='text-white'>Prizes and <br /><span className='text-[#D434FE]'>Rewards</span></h1>
            <p className='font-normal text-sm text-white mt-2'>Highlight of the prizes or rewards for winners and for participants.</p>
            </div>

            <div className="card_wrapper flex items-center justify-between w-ful">
                <div>
                    <img src={Cup} alt="" className='object-contain w-full max-w-300'/>
                </div>
                <div className="box flex gap-2.5 items-center">
                    <div className="card relative bg-[#D434FE1F] border-[#D434FE] border rounded-lg">
                    <img src={Silver} alt="" className='absolute -top-33 max-w-50'/>
                    <div className="details py-15 text-center mt-9 px-3" style={{fontFamily: "Montserrat"}}>
                        <h1 className='font-bold text-4xl text-white'>2nd <br /><span className='font-semibold text-2xl'>Runner</span></h1>
                        <span className='text-[#D434FE] font-bold text-4xl'>N300,000</span>
                    </div>
                </div>
                <div className="card relative bg-[#903AFF1F] border-[#903AFF] border rounded-lg">
                     <img src={Gold} alt="" className='absolute -top-27'/>
                    <div className="details py-18 text-center mt-9 px-3">
                        <h1 className='font-bold text-4xl text-white'>1st <br /><span className='font-semibold text-2xl'>Runner</span></h1>
                        <span className='text-[#903AFF] font-bold text-4xl'>N400,000</span>
                    </div>
                </div>
                <div className="card relative bg-[#D434FE1F] border-[#D434FE] border rounded-lg">
                     <img src={Bronze} alt=""className='absolute -top-27' />
                    <div className="details py-15 text-center mt-9 px-3">
                        <h1 className='font-bold text-4xl text-white'>3rd <br /><span className='font-semibold text-2xl'>Runner</span></h1>
                        <span className='text-[#D434FE] font-bold text-4xl'>N150,000</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
