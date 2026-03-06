"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hand, Flame, Heart } from "lucide-react";

export default function SalutePage() {
  const [hasSaluted, setHasSaluted] = useState(false);
  const [saluteCount, setSaluteCount] = useState(12847);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Get salute count from localStorage if available
    const saved = localStorage.getItem("saluteCount");
    if (saved) {
      setSaluteCount(parseInt(saved));
    }
  }, []);

  const handleSalute = () => {
    if (!hasSaluted) {
      setShowAnimation(true);
      const newCount = saluteCount + 1;
      setSaluteCount(newCount);
      localStorage.setItem("saluteCount", newCount.toString());
      setHasSaluted(true);

      setTimeout(() => setShowAnimation(false), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          {/* Icon */}
          <motion.div
            animate={showAnimation ? { rotate: [0, -15, 15, -10, 10, 0] } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Hand className={`w-20 h-20 mx-auto ${showAnimation ? "text-amber-500" : "text-white/30"}`} />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {hasSaluted ? "Thank You for Saluting" : "Pay Your Respect"}
          </h1>
          
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            A salute is more than a gesture — it's a promise to remember, to honor, 
            and to carry forward the legacy of those who gave everything.
          </p>

          {/* Salute Button */}
          {!hasSaluted ? (
            <motion.button
              onClick={handleSalute}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-transparent border-2 border-amber-500 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-amber-500/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <span className="relative z-10 flex items-center gap-3 text-amber-500 font-semibold text-xl">
                <Hand size={24} />
                SALUTE
              </span>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="glass rounded-3xl p-8 border border-amber-500/30">
                <p className="text-6xl font-bold text-amber-500 mb-2">{saluteCount.toLocaleString()}</p>
                <p className="text-white/60">Total Salutes from Visitors</p>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500"
              >
                JAI HIND 🇮🇳
              </motion.div>
            </motion.div>
          )}

          {/* Animation Overlay */}
          <AnimatePresence>
            {showAnimation && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
              >
                {/* Candle flames */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 100, x: (i - 2) * 50 }}
                    animate={{ opacity: [0, 1, 0], y: -200 }}
                    transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatDelay: 0.5 }}
                    className="absolute"
                    style={{ left: "50%" }}
                  >
                    <Flame
                      size={40}
                      className="text-amber-500 animate-pulse"
                      style={{ transform: `translateX(${(i - 2) * 80}px)` }}
                    />
                  </motion.div>
                ))}

                {/* Hearts */}
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={`heart-${i}`}
                    initial={{ opacity: 0, y: "80%", x: (Math.random() - 0.5) * 400 }}
                    animate={{ opacity: [0, 1, 0], y: "20%" }}
                    transition={{ duration: 2, delay: Math.random() * 0.5, repeat: Infinity }}
                    className="absolute"
                  >
                    <Heart
                      size={24}
                      className="text-red-500 fill-red-500"
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <p className="text-3xl font-bold text-amber-500">{saluteCount.toLocaleString()}</p>
              <p className="text-white/60 text-sm mt-1">Total Salutes</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <p className="text-3xl font-bold text-amber-500">24/7</p>
              <p className="text-white/60 text-sm mt-1">Guarding Borders</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="glass rounded-2xl p-6"
            >
              <p className="text-3xl font-bold text-amber-500">1.2M+</p>
              <p className="text-white/60 text-sm mt-1">Active Personnel</p>
            </motion.div>
          </div>

          {/* Pledge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 p-6 bg-army-green-900/20 rounded-2xl border border-army-green-500/30"
          >
            <p className="text-white/80 italic mb-2">
              "The safety, honour and welfare of your country come first, always and every time."
            </p>
            <p className="text-army-green-500 text-sm">— Indian Army Motto</p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}

