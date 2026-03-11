import React from "react";
import Hero from "../assets/criteria.png";
import Star from "../assets/star.png";
import Spark from "../assets/starpu.png";

export default function Criteria() {
  return (
    <section className="criteria_section flex flex-col lg:flex-row items-center text-white relative px-6 md:px-12 lg:px-20 py-16 gap-12">

      {/* decorative stars */}
      <div className="absolute top-10 left-10 hidden md:block">
        <img src={Spark} alt="" className="w-6 h-6" />
      </div>

      <div className="absolute top-40 left-[40%] opacity-20 hidden lg:block">
        <img src={Spark} alt="" className="w-6 h-6" />
      </div>

      <div className="absolute bottom-10 right-10 hidden md:block">
        <img src={Star} alt="" className="w-6 h-6" />
      </div>

      {/* image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={Hero}
          alt="Criteria section Hero"
          className="object-contain w-full max-w-112.5"
        />
      </div>

      {/* content */}
      <div className="content w-full lg:w-1/2">

        <p
          className="text-3xl md:text-4xl lg:text-5xl font-bold"
          style={{ fontFamily: "ClashDisplay" }}
        >
          Judging Criteria <br />
          <span className="text-[#D434FE]">Key attributes</span>
        </p>

        {/* items */}
        <div className="item mt-4" style={{ fontFamily: "Montserrat" }}>
          <b className="font-bold text-[15px] md:text-[16px] text-[#FF26B9]">
            Innovation and Creativity:
          </b>
          <p className="font-normal text-sm text-gray-300">
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
        </div>

        <div className="item mt-4" style={{ fontFamily: "Montserrat" }}>
          <b className="font-bold text-[15px] md:text-[16px] text-[#FF26B9]">
            Functionality:
          </b>
          <p className="font-normal text-sm text-gray-300">
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
        </div>

        <div className="item mt-4" style={{ fontFamily: "Montserrat" }}>
          <b className="font-bold text-[15px] md:text-[16px] text-[#FF26B9]">
            Impact and Relevance:
          </b>
          <p className="font-normal text-sm text-gray-300">
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem and is it relevant to the
            target audience?
          </p>
        </div>

        <div className="item mt-4" style={{ fontFamily: "Montserrat" }}>
          <b className="font-bold text-[15px] md:text-[16px] text-[#FF26B9]">
            Technical Complexity:
          </b>
          <p className="font-normal text-sm text-gray-300">
            Evaluate the technical sophistication of the solution including the
            complexity of the code and scalability of the solution.
          </p>
        </div>

        <div className="item mt-4" style={{ fontFamily: "Montserrat" }}>
          <b className="font-bold text-[15px] md:text-[16px] text-[#FF26B9]">
            Adherence to Hackathon Rules:
          </b>
          <p className="font-normal text-sm text-gray-300">
            Judges will ensure that the team adhered to the rules and
            guidelines of the hackathon including deadlines and use of
            specific technologies.
          </p>
        </div>

         <button className="text-white bg-linear-to-r from-[#fe34b9] to-[#903aff] border-transparent px-6 py-2 rounded-sm font-medium hover:opacity-90 transition-opacity">
            Register
        </button>
      </div>
    </section>
  );
}