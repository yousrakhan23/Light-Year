"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import TeamMember from "@/components/TeamMember";
import { fadeInUp, staggerContainer, bombDrop } from "@/app/animations";

const cardHover = {
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function AboutUs() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-fixed"
    >
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <motion.div variants={fadeInUp} className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto max-h-[600px] object-cover backdrop-blur-md shadow-2xl absolute inset-0 z-0"
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl font-bold text-white mb-6"
          >
            Crafting the Future
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Where AI meets timeless design to revolutionize your shopping
            experience.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <button className="group relative h-[4em] w-[15em] cursor-pointer rounded-[40px] border-none overflow-hidden">
              <span className="absolute z-[1] inline-block bg-black h-[3em] w-[11.5em] text-white leading-[3em] text-lg tracking-[3px] transition-all duration-500 rounded-[25px] left-1/2 transform -translate-x-1/2 top-[0.5em] group-hover:w-0 group-hover:opacity-0">
                Explore LightYear
              </span>
              <div className="absolute z-[-1] w-0 flex justify-center items-center left-1/2 transform -translate-x-1/2 -translate-y-[50px] transition-all duration-400 group-hover:z-[2] group-hover:w-full group-hover:translate-y-0">
                <svg
                  className="icon px-2.5 py-0"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={45}
                  height={45}
                >
                  <path
                    d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"
                    fill="currentColor"
                    className="text-white mt-6 md:mt-0 md:ml-2 md:translate-x-0 translate-x-[-50px] transition-transform duration-500 group-hover:translate-x-0"
                  />
                </svg>
                <svg
                  className="icon px-2.5 py-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width={45}
                  height={45}
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="currentColor"
                    className="text-white mt-6 md:mt-0 md:ml-2 md:translate-x-0 translate-x-[-50px] transition-transform duration-500 group-hover:translate-x-0"
                  />
                </svg>
                <svg
                  className="icon px-2.5 py-0"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={45}
                  height={45}
                >
                  <path
                    d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"
                    fill="currentColor"
                    className="text-white mt-6 md:mt-0 md:ml-2 md:translate-x-0 translate-x-[-50px] transition-transform duration-500 group-hover:translate-x-0"
                  />
                </svg>
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <motion.section
        variants={fadeInUp}
        className="px-4 sm:px-6 lg:px-8 py-20 max-w-6xl mx-auto"
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto max-h-[600px] object-cover"
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </motion.section>

      {/* Story Section */}
      <section
        id="our-story"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold  text-fuchsia-500 mb-6">
                Our Story
              </h2>
              <p className="text-gray-900 font-bold text-lg leading-relaxed mb-6">
                Founded in 2023, Lightyear began as a passion project to bridge
                cutting-edge AI with the elegance of classic design. Today,
                we are redefining how millennials shop.
              </p>
              <p className="text-gray-900 font-bold text-lg leading-relaxed mb-8">
                Every product we create carries our signature blend of power and
                tradition—just like the stars we are named after.
              </p>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/shop"
                  className="inline-flex items-center text-blue-400 font-bold text-lg group"
                >
                  Discover Our Products
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  whileHover="hover"
                  variants={cardHover}
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 cursor-pointer"
                >
                  <h3 className="text-white font-medium mb-2 tracking-wider">
                    Milestone {item}
                  </h3>
                  <p className="text-gray-900 font-bold text-sm">
                    {item === 1 && "Launched first AI prototype"}
                    {item === 2 && "10,000+ customers served"}
                    {item === 3 && "Featured in TechCrunch"}
                    {item === 4 && "Global shipping available"}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

       {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div variants={bombDrop} className="relative mb-16">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-500 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-fuchsia-500 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          
          <motion.div variants={fadeInUp} className="relative text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-fuchsia-500 mb-4">
              Meet The Team
            </h2>
            <p className="text-gray-900 font-bold max-w-2xl mx-auto text-lg">
              The explosive minds behind our creative destruction.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}

const teamMembers = [
  {
    name: "Phoebe Caulfield",
    role: "CEO & Founder",
    bio: "Visionary leader blending tech with timeless design principles.",
    img: "/images/team1.png",
  },
  {
    name: "Alex Morgan",
    role: "Lead AI Engineer",
    bio: "Makes machines think creatively while drinking artisan coffee.",
    img: "/images/team2.png",
  },
  {
    name: "Jordan Smith",
    role: "Design Director",
    bio: "Transforms complex tech into beautiful, intuitive interfaces.",
    img: "/images/team3.png",
  },
];
