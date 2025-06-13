"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  img: string;
}

export default function TeamMember({ name, role, bio, img }: TeamMemberProps) {
  const explosionVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0 0 30px rgba(255, 100, 0, 0.5)",
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 10 
      }
    }
  };

  const particleVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: [0, 1, 0],
      x: Math.sin(i * 36 * (Math.PI / 180)) * 50,
      y: Math.cos(i * 36 * (Math.PI / 180)) * 50,
      transition: {
        delay: i * 0.05,
        duration: 1,
        repeat: Infinity,
        repeatDelay: 2
      }
    })
  };

  return (
    <div className="relative">
      {/* Explosion particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={particleVariants}
            initial="hidden"
            animate="visible"
            className="absolute w-2 h-2 rounded-full bg-orange-500"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-0.25rem',
              marginTop: '-0.25rem'
            }}
          />
        ))}
      </div>

      <motion.div
        variants={explosionVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, margin: "-100px" }}
        className="relative overflow-hidden border-2 border-transparent hover:border-orange-500 transition-all z-10"
      >
        <div className="relative h-96 w-60 overflow-hidden">
          <Image 
            src={img} 
            alt={name} 
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p className="text-orange-400 tracking-wider font-bold">{bio}</p>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-black mb-1">{name}</h3>
          <p className="text-orange-400 font-bold mb-3">{role}</p>
        </div>
      </motion.div>
    </div>
  );
}