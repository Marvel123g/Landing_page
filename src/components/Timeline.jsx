import React from "react";
import Star from "../assets/star.png";
import Spark from "../assets/starpu.png";

export default function Timeline() {
  const timelineData = [
    {
      id: 1,
      title: "Hackathon Announcement",
      description:
        "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date: "November 18, 2023",
      align: "left",
    },
    {
      id: 2,
      title: "Teams Registration begins",
      description:
        "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      date: "November 18, 2023",
      align: "right",
    },
    {
      id: 3,
      title: "Teams Registration ends",
      description:
        "Interested Participants are no longer Allowed to register",
      date: "November 18, 2023",
      align: "left",
    },
    {
      id: 4,
      title: "Announcement of the accepted teams and ideas",
      description:
        "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      date: "November 18, 2023",
      align: "right",
    },
    {
      id: 5,
      title: "Getlinked Hackathon 1.0 Offically Begins",
      description:
        "Accepted teams can now proceed to build their ground breaking skill driven solutions",
      date: "November 18, 2023",
      align: "left",
    },
    {
      id: 6,
      title: "Demo Day",
      description:
        "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
      date: "November 18, 2023",
      align: "right",
    },
  ];

  return (
    <section className="relative py-15 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 text-white overflow-hidden">
      <div className="absolute top-20 left-10 sm:top-30 sm:left-20 md:top-40 md:left-40 lg:left-60">
        <img src={Spark} alt="" className="w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8" />
      </div>

      <div className="absolute top-40 right-10 sm:top-60 sm:right-20 md:top-100 md:right-30 lg:top-150 lg:right-50">
        <img src={Star} alt="" className="w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8" />
      </div>
      
      <div className="absolute bottom-10 left-10 sm:bottom-15 sm:left-20 md:bottom-20 md:left-30 lg:left-40 opacity-7">
        <img src={Star} alt="" className="w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4"
            style={{ fontFamily: "ClashDisplay" }}
          >
            Timeline
          </h2>

          <p
            className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4"
            style={{ fontFamily: "Montserrat" }}
          >
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>

        <div className="hidden md:block relative">
          {timelineData.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row items-center ${
                  item.align === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    item.align === "right" ? "md:text-left" : "md:text-right"
                  }`}
                >
                   <>
                      <h3 className="text-2xl font-bold text-[#D434FE]">
                        {item.title}
                      </h3>

                      <p className="text-gray-300 mt-2">
                        {item.description}
                      </p>

                      <p className="text-xl font-bold text-[#D434FE] mt-2 md:hidden">
                        {item.date}
                      </p>
                    </>
                </div>

                <div className="relative flex flex-col items-center justify-center w-16 md:w-2/12 my-4 md:my-0">

                  <div className="w-1 h-12 bg-[#D434FE] mb-3"></div>

                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white z-10 bg-linear-to-r from-[#903AFF] to-[#D434FE]">
                    {item.id}
                  </div>

                  <div className="w-1 h-12 bg-linear-to-b bg-[#D434FE] mt-3"></div>

                </div>

                <div
                  className={`hidden md:block w-5/12 ${
                    item.align === "right" ? "text-right" : "text-left"
                  }`}
                >
                  <p className="text-xl font-bold text-[#D434FE]">
                      {item.date}
                    </p>
                </div>
              </div>
            ))}
        </div>

        <div className="block md:hidden">
          {timelineData.map((item) => (
            <div key={item.id} className="mb-4">
              <div className="flex gap-2 items-end">
                <div className="flex items-center flex-col">
                  <div className="w-1 h-12 bg-[#D434FE] mt-3"></div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white bg-linear-to-r from-[#903AFF] to-[#D434FE] text-sm">
                    {item.id}
                  </div>
                </div>
                
                <div className="content">
                  <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-[#D434FE]">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mt-0.5">
                    {item.description}
                  </p>
                </div>
                
                  <p className="text-xs sm:text-sm font-bold text-[#D434FE]">
                    {item.date}
                  </p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}