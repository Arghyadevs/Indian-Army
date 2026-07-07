"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicEmbers from "@/components/CinematicEmbers";
import { Hand } from "lucide-react";

// Advanced 3D Tilt Card Component
function TiltCard({ stat, i }: { stat: any, i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
      className="relative glass rounded-2xl p-8 overflow-visible group hover:bg-white/[0.03] transition-colors"
    >
      <div style={{ transform: "translateZ(40px)" }} className="relative z-10 pointer-events-none">
        <div className={`absolute -top-8 -left-8 w-[calc(100%+64px)] h-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <p className="text-4xl font-bold text-white mb-2 drop-shadow-md">{stat.value}</p>
        <p className="text-white/60 text-sm tracking-widest uppercase font-medium">{stat.label}</p>
      </div>
      {/* Background ambient glow on hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} 
        style={{ transform: "translateZ(-10px)" }}
      />
    </motion.div>
  );
}

export default function SalutePage() {
  const [hasSaluted, setHasSaluted] = useState(false);
  const [saluteCount, setSaluteCount] = useState(12848);
  const [showAnimation, setShowAnimation] = useState(false);

  // Mouse spotlight state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const saved = localStorage.getItem("saluteCount");
    if (saved) {
      setSaluteCount(Math.max(12848, parseInt(saved)));
    }
  }, []);

  const handleSalute = () => {
    if (!hasSaluted) {
      setShowAnimation(true);
      const newCount = saluteCount + 1;
      setSaluteCount(newCount);
      localStorage.setItem("saluteCount", newCount.toString());
      setHasSaluted(true);

      setTimeout(() => setShowAnimation(false), 2500);
    }
  };

  function handleGlobalMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  }

  // JAI HIND staggered text animation
  const jaiHindText = Array.from("JAI HIND 🇮🇳");
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 1.2 }
    }
  };
  const letterVars = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)", scale: 0.8 },
    show: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, transition: { type: "spring", damping: 12 } }
  };

  return (
    <main 
      className="min-h-screen bg-black relative overflow-hidden cursor-default"
      onMouseMove={handleGlobalMouseMove}
    >
      <Navbar />

      {/* Majestic Background with Advanced Mouse Spotlight */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-black to-black opacity-80" />
        
        {/* Dynamic Spotlight */}
        <motion.div 
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-saffron/10 blur-[120px] pointer-events-none"
          style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
          transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
        />
        
        <CinematicEmbers />
      </div>

      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 style={{ perspective: 1000 }}">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-5xl w-full"
        >
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-sm">
              {hasSaluted ? "Thank You for Saluting" : "Pay Your Respect"}
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              A salute is more than a gesture — it's a promise to remember, to honor, 
              and to carry forward the legacy of those who gave everything.
            </p>
          </div>

          {/* Interactive Area */}
          <div className="relative min-h-[300px] flex flex-col items-center justify-center mb-16">
            <AnimatePresence mode="wait">
              {!hasSaluted ? (
                <motion.div
                  key="salute-button"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
                  transition={{ duration: 0.5 }}
                >
                  <button
                    onClick={handleSalute}
                    className="group relative flex flex-col items-center justify-center w-52 h-52 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(255,153,51,0.1)] hover:shadow-[0_0_80px_rgba(255,153,51,0.4)] transition-all duration-700 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-saffron/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <Hand size={56} className="text-saffron mb-3 group-hover:scale-125 transition-transform duration-700 drop-shadow-[0_0_15px_rgba(255,153,51,0.5)]" />
                    <span className="text-white font-bold tracking-[0.2em] uppercase text-sm group-hover:text-saffron transition-colors duration-500">Salute</span>
                    
                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-full border border-saffron/0 group-hover:border-saffron/60 group-hover:animate-ping opacity-30" />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="salute-success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center"
                >
                  {/* Advanced Shockwave effect */}
                  {showAnimation && (
                    <>
                      <motion.div
                        initial={{ scale: 0.5, opacity: 1, borderWidth: "12px" }}
                        animate={{ scale: 4, opacity: 0, borderWidth: "1px" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute rounded-full border-saffron w-52 h-52 z-0 pointer-events-none"
                      />
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0.8, borderWidth: "8px" }}
                        animate={{ scale: 5, opacity: 0, borderWidth: "1px" }}
                        transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
                        className="absolute rounded-full border-white/30 w-52 h-52 z-0 pointer-events-none"
                      />
                    </>
                  )}

                  <motion.div
                    initial={{ y: 40, opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ delay: 0.4, duration: 1, type: "spring", damping: 15 }}
                    className="relative z-10 glass rounded-[3rem] p-12 md:p-20 border border-white/10 shadow-[0_0_100px_rgba(255,153,51,0.15)] backdrop-blur-2xl bg-black/40 overflow-hidden"
                  >
                    {/* Shine effect inside card */}
                    <motion.div 
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                    />

                    <div className="flex flex-col items-center justify-center gap-6 relative z-10">
                      <motion.p 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7, type: "spring", damping: 10 }}
                        className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30 drop-shadow-2xl"
                      >
                        {saluteCount.toLocaleString()}
                      </motion.p>
                      <p className="text-saffron font-bold tracking-[0.3em] uppercase text-sm md:text-base opacity-80">
                        Total Salutes from Visitors
                      </p>
                      
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-saffron/40 to-transparent my-6" />
                      
                      {/* Advanced Text Stagger Animation */}
                      <motion.h2 
                        variants={containerVars}
                        initial="hidden"
                        animate="show"
                        className="text-4xl md:text-7xl font-black tracking-tight flex space-x-2"
                      >
                        {jaiHindText.map((char, idx) => (
                          <motion.span 
                            key={idx} 
                            variants={letterVars}
                            className={char === ' ' ? 'w-4' : 'text-transparent bg-clip-text bg-gradient-to-r from-saffron via-white to-india-green drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]'}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </motion.h2>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3D Tilt Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20 perspective-[1000px]">
            {[
              { value: hasSaluted ? saluteCount.toLocaleString() : "12,848", label: "Total Salutes", color: "from-saffron to-amber-600" },
              { value: "24/7", label: "Guarding Borders", color: "from-white to-gray-400" },
              { value: "1.2M+", label: "Active Personnel", color: "from-india-green to-emerald-700" }
            ].map((stat, i) => (
              <TiltCard key={stat.label} stat={stat} i={i} />
            ))}
          </div>

          {/* The Motto Pledge */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
            className="relative p-12 rounded-[2.5rem] overflow-hidden border border-white/5 bg-gradient-to-br from-army-green-900/60 to-black/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] group hover:border-saffron/20 transition-colors duration-700"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-saffron/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-saffron/20 transition-colors duration-700" />
            
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-6xl text-saffron/30 font-serif leading-none absolute -top-6 -left-4 pointer-events-none">"</span>
              <p className="text-2xl md:text-4xl text-white/95 font-serif italic mb-8 leading-relaxed max-w-4xl text-center px-6">
                The safety, honour and welfare of your country come first, always and every time.
              </p>
              <div className="flex items-center gap-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-saffron" />
                <p className="text-saffron font-bold tracking-[0.2em] uppercase text-sm group-hover:text-white transition-colors duration-500">Indian Army Motto</p>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-saffron" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
