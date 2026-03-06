"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import { Shield } from "lucide-react";

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 px-6 overflow-hidden">
        <div className="absolute inset-0 army-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-army-green-950/30 via-transparent to-black" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-army-green-500" />
            <span className="text-army-green-500 text-sm tracking-widest uppercase">
              Historical Journey
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Timeline of Courage</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Seven decades of defending the nation, from the first Kashmir war to modern-day operations. 
            Each conflict shaped India's destiny and tested the courage of its soldiers.
          </p>
        </motion.div>
      </section>

      {/* Timeline Component */}
      <Timeline />

      <Footer />
    </main>
  );
}

