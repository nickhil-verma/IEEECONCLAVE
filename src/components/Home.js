import React from "react";
import HERO from "../img/Meeting.gif";
import { Typewriter } from "react-simple-typewriter";
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#e5e7ff] min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl">
        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={HERO}
            alt="Industry Conclave Hero"
            className="w-full mix-blend-multiply h-auto rounded-lg"
          />
        </div>

        {/* Typewriter Text */}
        <div className="flex flex-col items-start text-[#012ba1] w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Industry Conclave 2024</h1>
          <div className="text-lg md:text-xl">
            <span>
              <Typewriter
                words={[
                  "⚡ Lightening Talk: Agility in action - leading Teams in fast-paced world",
                  "🛠 Workshop: Strategy for Managerial success",
                  "⚡ Lightening Talk: Decision making in digital Age",
                  "📊 Planary: Generative AI for executives",
                  "⚡ PechaKucha: Leadership tactics in a Flash",
                  "⚡ Talk: Conflict Alchemy",
                  "🔥 Ignite Talk: Network Weaving",
                  "🤝 Talk: Social Synergy",
                  "⚡ SpeedTalk: AI Sparks",
                  "💡 4 Panel Talks: Resilient and Rising",
                  "⚙️ Techno Engg Management in the era of GenAI",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>

          {/* Button */}
          <div className="mt-10 m-auto">
            <a href="/" className="w-full max-w-xs">
              <button className="max-sm:text-sm m-auto border-[0.5px] text-gray-500 flex items-center hover:text-black gap-2 duration-100 hover:gap-3 hover:bg-gray-100 px-4 py-2 rounded-3xl w-full text-center">
                ✨ Register Now <span><GoArrowRight /></span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
