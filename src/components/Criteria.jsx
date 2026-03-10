import React from 'react'
import Hero from "../assets/criteria.png"

export default function Criteria() {
  return (
    <section  className='criteria_section flex items-center text-white relative p-20'>
        <div >
            <img src={Hero} alt="Criteria section Hero" className='object-contain w-full max-w-450' />
        </div>
        <div className="content">
            <p className='text-5xl font-bold' style={{ fontFamily: "ClashDisplay" }}>Judging Criteria <span className='text-[#D434FE]'>Key attributes</span></p>
            <div className="item mt-4" style={{ fontFamily: "Montserrat" }}>
                <b className='font-bold text-[16px] text-[#FF26B9]'>Innovation and Creativity:</b>
                <p className='font-normal text-sm text-light'>Evaluate the uniqueness and creativity of the
solution. Consider whether it addresses a real-world problem in a novel 
way or introduces innovative features.</p>
            </div>
            <div className="item mt-4" style={{ fontFamily: "Montserrat" }}>
                <b className='font-bold text-[16px] text-[#FF26B9]'>Functionality: </b>
                <p className='font-normal text-sm text-light'>Assess how well the solution works. Does it perform its 
intended functions effectively and without major issues? Judges would
consider the completeness and robustness of the solution.</p>
            </div>
            <div className="item mt-4" style={{ fontFamily: "Montserrat" }}>
                <b className='font-bold text-[16px] text-[#FF26B9]'>Impact and Relevance:</b>
                <p className='font-normal text-sm text-light'> Determine the potential impact of the solution 
in the real world. Does it address a significant problem, and is it relevant 
to the target audience? Judges would assess the potential social, 
economic, or environmental benefits.</p>
            </div>
            <div className="item mt-4" style={{ fontFamily: "Montserrat" }}>
                <b className='font-bold text-[16px] text-[#FF26B9]'>Technical Complexity: </b>
                <p className='font-normal text-sm text-light'>Evaluate the technical sophistication of the solution. 
Judges would consider the complexity of the code, the use of advanced 
technologies or algorithms, and the scalability of the solution.</p>
            </div>
            <div className="item mt-4" style={{ fontFamily: "Montserrat" }}>
                <b className='font-bold text-[16px] text-[#FF26B9]'>Adherence to Hackathon Rules:</b>
                <p className='font-normal text-sm text-light'> Judges will Ensure that the team adhered 
to the rules and guidelines of the hackathon, including deadlines, use of 
specific technologies or APIs, and any other competition-specific requirements.</p>
            </div>
            <button className="text-white mt-5 bg-linear-to-r from-[#fe34b9] to-[#903aff] border-transparent px-6 py-4 rounded-sm font-medium hover:opacity-90 transition-opacity">Read More</button>
        </div>
    </section>
  )
}
