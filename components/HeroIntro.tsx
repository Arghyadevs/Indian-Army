"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface HeroIntroProps {
  onEnter: () => void;
}

export default function HeroIntro({ onEnter }: HeroIntroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 army-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      
      {/* Animated Gradient Orb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-army-green-900/20 blur-[120px]"
      />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: Math.random() * 0.5 + 0.2, scale: 1 }}
            transition={{ duration: Math.random() * 2 + 1, delay: Math.random() * 2 }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-white/50 mb-4"
        >
          Operation: Tribute
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          <span className="text-white">Freedom</span>
          <br />
          <span className="text-army-green-500">Is Not Free</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-6 max-w-2xl mx-auto text-white/60 text-sm md:text-base leading-relaxed"
        >
          This is a non-official digital memorial honoring the brave soldiers 
          of India. Walk through history. Feel the sacrifice. Remember their courage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="mt-10"
        >
          <button
            onClick={onEnter}
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Enter Memorial
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-army-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

