"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroBanner() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const pulse = {
    hidden: { scale: 0.95 },
    visible: {
      scale: 1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden py-20 px-6 sm:px-12 rounded-3xl shadow-2xl">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute rounded-full bg-fuchsia-500"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Glow effects */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Ready to Elevate Your Shopping Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-300"> With LightYear</span> ?
        </motion.h1>

        <motion.p 
          variants={fadeInUp}
          className="text-xl text-white/80 font-bold max-w-3xl mx-auto mb-10"
        >
          Join thousands of millennials who trust Lightyear for smarter, stylish shopping
        </motion.p>

        <motion.div variants={fadeInUp}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={pulse}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Join Us Now
          </motion.button>
        </motion.div>

        {/* Floating AI illustration */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute -right-20 -bottom-20 opacity-80"
        >
          <Image
            src="/images/banner_illustration.png" // Replace with your AI illustration
            alt="AI Illustration"
            width={300}
            height={300}
            className="w-40 h-40 sm:w-60 sm:h-60"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}