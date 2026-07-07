"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicEmbers() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(60)].map((_, i) => {
        const size = Math.random() * 3 + 1; // 1px to 4px
        const left = Math.random() * 100; // 0% to 100%
        const delay = Math.random() * 5; // 0s to 5s
        const duration = Math.random() * 10 + 10; // 10s to 20s
        
        // Randomize color between saffron, white, and a hint of red/orange
        const colors = [
          "bg-orange-500",
          "bg-amber-400",
          "bg-yellow-300",
          "bg-white",
          "bg-red-500",
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${color} mix-blend-screen shadow-[0_0_8px_rgba(255,150,0,0.8)]`}
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: "-10px",
            }}
            initial={{ 
              opacity: 0, 
              y: 0, 
              x: 0 
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [0, -window.innerHeight * 1.5],
              x: [0, (Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}
