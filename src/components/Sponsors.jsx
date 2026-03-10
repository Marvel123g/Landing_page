import React from 'react'
import Assured from "../assets/libertyassured.png"
import Pay from "../assets/libertyPay.png"
import Winwise from "../assets/winwise.png"
import Whispersms from "../assets/whispersms.png"

export default function Sponsors() {
  return (
    <section className="py-16 px-8 lg:px-16 bg-[#150E28] text-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "ClashDisplay" }}>
            Partners and Sponsors
          </h3>

          <p className="text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: "Montserrat" }}>
            Getlinked Hackathon 1.0 is honored to have the following major 
            companies as its partners and sponsors
          </p>
        </div>

        {/* Grid Container */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-[#D434FE] opacity-5 blur-3xl rounded-3xl"></div>

          <div className="relative border-2 border-[#D434FE] rounded-2xl p-8">

            <div className="grid grid-cols-2 md:grid-cols-3">

              {/* Liberty Assured */}
              <div className="relative flex items-center justify-center p-10">
                <img src={Assured} alt="Liberty Assured" />

                {/* right line */}
                <span className="absolute right-0 top-6 bottom-6 w-0.5 bg-[#D434FE]"></span>

                {/* bottom line */}
                <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#D434FE]"></span>
              </div>

              {/* Liberty Pay */}
              <div className="relative flex items-center justify-center p-10">
                <img src={Pay} alt="Liberty Pay" />

                <span className="absolute right-0 top-6 bottom-6 w-0.5 bg-[#D434FE]"></span>
                <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#D434FE]"></span>
              </div>

              {/* Winwise */}
              <div className="relative flex items-center justify-center p-10">
                <img src={Winwise} alt="Winwise" />

                <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#D434FE]"></span>
              </div>

              {/* Whispersms */}
              <div className="relative flex items-center justify-center p-10">
                <img src={Whispersms} alt="Whispersms" />

                <span className="absolute right-0 top-6 bottom-6 w-0.5 bg-[#D434FE]"></span>
              </div>

              {/* Paybox */}
              <div className="relative flex items-center justify-center p-10">
                <p className="text-3xl lg:text-4xl font-bold">
                  Pay<span className="text-[#00A3FF]">box</span>
                </p>

                <span className="absolute right-0 top-6 bottom-6 w-0.5 bg-[#D434FE]"></span>
              </div>

              {/* Vuzual Plus */}
              <div className="relative flex items-center justify-center p-10">
                <div className="text-center">
                  <p className="text-2xl lg:text-3xl font-bold">
                    Vuzual <span className="text-red-500">Plus</span>
                  </p>
                  <p className="text-xs text-gray-400">Design Studios</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}