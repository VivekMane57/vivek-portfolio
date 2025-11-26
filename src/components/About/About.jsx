import React, { useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/vivek-profile.png";
import { RESUME_LINKS } from "../../constants";

const About = () => {
  const [showCvMenu, setShowCvMenu] = useState(false);

  return (
    <section
      id="about"
      className="min-h-[90vh] w-full px-[7vw] lg:px-[12vw] pt-24 pb-16 bg-gradient-to-b from-[#050516] to-[#05010d]"
    >
      <div className="flex flex-col-reverse gap-12 md:flex-row items-center justify-between">
        {/* ================= Left text side ================= */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-sm md:text-base text-purple-300 mb-2 tracking-[0.25em] uppercase">
            Hi, I am
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Vivek <span className="text-purple-400">Mane</span>
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-slate-200">
            I am a{" "}
            <span className="text-purple-400">
              <ReactTypingEffect
                speed={80}
                eraseSpeed={60}
                eraseDelay={1500}
                typingDelay={200}
                text={[
                  "Java Full-Stack Developer",
                  "Data Analyst",
                  "Data Scientist",
                  "AI / ML Engineer",
                  "Problem Solver",
                ]}
              />
            </span>
          </h2>

          <p className="mt-6 text-sm md:text-base text-slate-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            I'm a final-year B.Tech CSE student at D.Y. Patil College of
            Engineering, Kolhapur (2022–2026). I build data-driven and
            AI-powered products – from influencer marketing SaaS and social
            commerce platforms to SQL data warehouses, computer-vision and NLP
            projects.
          </p>

          {/* ================= Download CV menu ================= */}
          <div className="mt-8 flex justify-center md:justify-start">
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowCvMenu((prev) => !prev)}
                className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold shadow-lg shadow-purple-500/40"
              >
                Download CV
              </button>

              {showCvMenu && (
                <div className="absolute left-0 mt-3 w-64 rounded-2xl bg-[#090920] border border-purple-500/60 shadow-xl z-20 p-2">
                  <a
                    href={RESUME_LINKS.softwareDev}
                    target="_blank"
                    rel="noreferrer"
                    className="block px-3 py-2 text-sm text-slate-100 rounded-xl hover:bg-purple-600/40"
                  >
                    Software Developer CV
                  </a>
                  <a
                    href={RESUME_LINKS.dataAnalytics}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block px-3 py-2 text-sm text-slate-100 rounded-xl hover:bg-purple-600/40"
                  >
                    Data / Analytics CV
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================= Right image side ================= */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Tilt glareEnable={true} glareMaxOpacity={0.35} glareColor="#a855f7">
            <div className="relative w-[260px] md:w-[320px] lg:w-[360px] aspect-square rounded-full bg-gradient-to-tr from-purple-700/40 via-transparent to-purple-900/80 border-4 border-purple-500 shadow-[0_0_80px_rgba(168,85,247,0.75)] flex items-center justify-center">
              <div className="w-[82%] h-[82%] rounded-full overflow-hidden bg-[#05010d]">
                <img
                  src={profileImage}
                  alt="Vivek Mane"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-4 rounded-full border border-purple-400/40" />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
