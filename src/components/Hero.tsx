import React from "react";
import Image from "next/image";
import Link from "next/link";
import AutoCarousel from "./Carousel";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-center text-slate-950 flex items-center justify-center px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left: Text Section */}
          <div className="space-y-6">
            {/* <span className="inline-block px-4 py-1 text-sm rounded-full">Smart Shopping, Timeless Design – Powered by AI.</span> */}
            <h1 className="text-4xl md:text-6xl font-extrabold">
              <span className="text-fuchsia-500">Revolutionize</span> Your
              Shopping with Lightyear.
            </h1>
            <p className="text-slate-900 font-bold text-lg md:text-xl">
              The AI-powered home device that blends cutting-edge technology
              with classic elegance.
            </p>

            <div className="flex items-center w-full max-w-md"></div>

            {/* Tags */}
            <div className="space-x-2 mt-4 flex flex-wrap items-center font-medium">
              {["Business", "Animation", "Creative", "Realistic"].map((tag) => (
                <button
                  key={tag}
                  className="bg-fuchsia-500 font-bold px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </button>
              ))}
            </div>

            <Link href="/Shop" className="inline-block">
              <button className="bg-sky-600 px-5 py-2 rounded-full mt-6 text-white font-semibold transition-colors">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Right: Image with Glowing Gradient Background */}
          <div className="relative flex justify-center items-center lg:ml-[410px] mt-10 lg:mt-0">
            {/* Glowing Gradient Background */}
            <div className="absolute w-72 h-72 md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-[#0f0220] to-[#1a0c3d] blur-2xl opacity-90 animate-pulse z-0" />

            {/* Man Image */}
            <div className="relative z-10">
              <Image
                width={500}
                height={900}
                src="/images/man.png"
                alt="AiGenerated"
                className="rounded-xl shadow-lg max-w-[90vw] h-auto object-cover md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>
      <div className="overflow-hidden whitespace-nowrap bg-gradient-to-br from-[#0f0220] to-[#1a0c3d] py-2 ">
        <h2 className="inline-block text-2xl text-white font-bold animate-marquee">
          Smart Shopping, Timeless Design – Powered by AI.
        </h2>
      </div>

      <div className="bg-[url('/images/background.jpg')] bg-cover bg-center">
        <AutoCarousel />
      </div>
    </div>
  );
}

// bg-gradient-to-br from-[#0f0220] to-[#1a0c3d]
