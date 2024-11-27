import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { GoArrowRight } from "react-icons/go";
import BACKROUNDVID from "../img/Background.mp4";
import Navbar from "./Navbar";

const Home = () => {
    const videoRef = useRef(null);  // Create a reference for the video

  useEffect(() => {
    if (videoRef.current) {
      // Set the playback rate to half the normal speed
      videoRef.current.playbackRate = 0.6;
    }
  }, []);
  return (
    <>
      <div className="relative bg-transparent min-h-screen flex flex-col items-center py-0 px-4">
        <Navbar />
        {/* Background Video */}
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <video
            className="object-cover w-full h-full"
            autoPlay
            loop
            muted
            ref={videoRef}
            style={{ playbackRate: 0.1 }} // Set playback speed to half
          >
            <source src={BACKROUNDVID} type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl relative z-10">
          {/* Heading (Left side) */}
          <div className="flex flex-col items-start text-white w-full md:w-1/2 space-y-4 pt-20 md:pt-32">
            {" "}
            {/* Increased padding-top */}
            <h1
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-[900]"
              style={{ fontFamily: "'Geist', sans-serif" }}
            >
              IEEE <br /> Industry Conclave <br /> 2024
            </h1>
          </div>

          {/* Typewriter Text and Button (Right side) */}
          <div className="flex flex-col items-center text-white w-full md:w-1/2 space-y-8">
            {" "}
            {/* Center items */}
            <div className="text-xl text-bold md:text-xl mt-16 md:mt-0 text-center">
              <Typewriter
                words={[
                  " Lightening Talk: Agility in action - leading Teams in fast-paced world",
                  " Workshop: Strategy for Managerial success",
                  " Lightening Talk: Decision making in digital Age",
                  " Planary: Generative AI for executives",
                  " PechaKucha: Leadership tactics in a Flash",
                  " Talk: Conflict Alchemy",
                  " Ignite Talk: Network Weaving",
                  " Talk: Social Synergy",
                  " SpeedTalk: AI Sparks",
                  " 4 Panel Talks: Resilient and Rising",
                  " Techno Engg Management in the era of GenAI",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            {/* Register Button */}
            <div className="mt-10 m-auto flex justify-center w-full">
              <a href="/" className="w-full max-w-xs">
                <button className="max-sm:text-sm m-auto font-semibold border-[0.5px] border-white text-gray-100 flex items-center hover:text-black gap-2 duration-100 hover:gap-3 hover:bg-gray-100 px-4 py-2 rounded-3xl w-[170px] text-center">
                   Register Now{" "}
                  <span>
                    <GoArrowRight />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
