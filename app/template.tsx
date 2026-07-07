"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isPresent, setIsPresent] = useState(false);

  useEffect(() => {
    setIsPresent(true);
  }, []);

  // 5 Panels for the Blast Door effect
  const columns = 5;

  return (
    <>
      {/* Advanced Multi-Panel Shutter Transition */}
      <div className="fixed inset-0 z-[100] pointer-events-none flex w-full h-full">
        {[...Array(columns)].map((_, i) => (
          <motion.div
            key={i}
            className="h-full w-full bg-black border-r border-white/5 relative overflow-hidden"
            initial={{ y: "0%" }}
            animate={{ y: "100%" }}
            transition={{
              duration: 0.8,
              ease: [0.77, 0, 0.175, 1], // Custom cubic bezier for that heavy mechanical feel
              delay: i * 0.1, // Staggered unlock
            }}
          >
            {/* Inner techy details on the doors */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1 h-20 bg-saffron/20 rounded-full" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10" />
            
            {/* Flashing lock light */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-saffron rounded-full blur-[2px]"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Global Techy Scanning Line */}
      <motion.div
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 2.5, ease: "linear" }}
        className="fixed left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-saffron/50 to-transparent z-[90] pointer-events-none shadow-[0_0_20px_rgba(255,153,51,0.5)] blur-[1px]"
      />

      {/* Main Content Reveal */}
      <motion.div
        initial={{ 
          opacity: 0, 
          scale: 0.95, 
          filter: "blur(15px)", 
          rotateX: 10, 
          y: 40 
        }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          filter: "blur(0px)", 
          rotateX: 0, 
          y: 0 
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.4 // Wait for the blast doors to start opening
        }}
        style={{ perspective: "1000px" }}
      >
        {children}
      </motion.div>
    </>
  );
}
