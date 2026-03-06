"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plane, Shield, Crosshair, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";

interface Equipment {
  name: string;
  type: string;
  description: string;
  capabilities: string[];
  image: string;
  role: string;
}

const equipment: Equipment[] = [
  {
    name: "Arjun MBT",
    type: "Main Battle Tank",
    description: "India's indigenously developed main battle tank, designed to operate in all terrains.",
    capabilities: ["120mm rifled gun", "Composite armor", "Thermal imaging sights", "Auxiliary power unit"],
    image: "🛡️",
    role: "Armoured Warfare"
  },
  {
    name: "T-90 Bhishma",
    type: "Main Battle Tank",
    description: "The backbone of India's armoured corps, acquired from Russia and manufactured in India.",
    capabilities: ["125mm smoothbore gun", "Kontakt-5 ERA", "Shtora countermeasures", "Night vision"],
    image: "🎖️",
    role: "Armoured Warfare"
  },
  {
    name: "BrahMos Missile",
    type: "Cruise Missile",
    description: "The world's fastest supersonic cruise missile, developed jointly by India and Russia.",
    capabilities: ["Mach 2.8 speed", "300km range", "Precision guidance", "Land-sea launch"],
    image: "🚀",
    role: "Strategic Strike"
  },
  {
    name: "Rafale Fighter",
    type: "Multirole Fighter",
    description: "French-made 4.5 generation fighter jet with superior air superiority capabilities.",
    capabilities: ["Meteor missiles", "SCALP cruise missile", "Helmet-mounted display", "Electronic warfare"],
    image: "✈️",
    role: "Air Superiority"
  },
  {
    name: "MiG-29UPG",
    type: "Fighter Aircraft",
    description: "Upgraded MiG-29 fleet with modern avionics and weapons systems.",
    capabilities: ["R-73 missiles", "R-27 missiles", "In-flight refueling", "Phazotron radar"],
    image: "🛩️",
    role: "Air Superiority"
  },
  {
    name: "C-130J Super Hercules",
    type: "Transport Aircraft",
    description: "Tactical airlifter for special operations and humanitarian missions.",
    capabilities: ["20,000 kg payload", "All-weather operation", "Short landing", "Special ops capable"],
    image: "🏆",
    role: "Strategic Transport"
  },
  {
    name: "Akash Missile",
    type: "Surface-to-Air",
    description: "Indigenously developed medium-range surface-to-air missile system.",
    capabilities: ["30km range", "Multi-target engagement", "All-weather", "Quick reaction"],
    image: "🎯",
    role: "Air Defense"
  },
  {
    name: "PINAKA MBRL",
    type: "Rocket Artillery",
    description: "Indigenously developed multiple rocket launcher system.",
    capabilities: ["40km range", "Rapid fire", "HE fragmentation", "Area denial"],
    image: "💥",
    role: "Artillery Support"
  },
  {
    name: "INSAS Rifle",
    type: "Assault Rifle",
    description: "Indian Small Arms System - the standard issue rifle of the Indian Army.",
    capabilities: ["5.56x45mm", "600 rpm", "400m effective range", "Ergonomic design"],
    image: "🔫",
    role: "Infantry Weapon"
  },
  {
    name: "SIG Sauer MCX",
    type: "Assault Rifle",
    description: "Modern modular rifle replacing older systems in special forces.",
    capabilities: ["7.62x51mm", "Modular design", "Short recoil", "Night vision compatible"],
    image: "⚡",
    role: "Special Forces"
  }
];

export default function EquipmentPage() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "Armoured Warfare", "Air Superiority", "Strategic Transport", "Air Defense", "Artillery Support", "Strategic Strike", "Infantry Weapon"];

  const filteredEquipment = filter === "all" ? equipment : equipment.filter(e => e.role === filter);

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-army-green-500" />
              <span className="text-army-green-500 text-sm tracking-widest uppercase">
                India's Defense Arsenal
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Army Equipment</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              From main battle tanks to cutting-edge missiles, explore the sophisticated 
              arsenal that equips the Indian Army to defend the nation.
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-army-green-600 text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {cat === "all" ? "All Equipment" : cat}
              </button>
            ))}
          </motion.div>

          {/* Equipment Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEquipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-3xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{item.image}</div>
                  <span className="px-3 py-1 bg-army-green-600/20 border border-army-green-500/30 rounded-full text-xs text-army-green-400">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1 group-hover:text-army-green-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-army-green-500 mb-3">{item.role}</p>
                
                <p className="text-white/70 text-sm mb-4">
                  {item.description}
                </p>

                <div className="space-y-2">
                  {item.capabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                      <Zap size={12} className="text-amber-500" />
                      {cap}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-4 gap-4 mt-12"
          >
              <div className="glass rounded-2xl p-6 text-center">
                <Plane className="w-8 h-8 mx-auto mb-2 text-army-green-500" />
                <p className="text-3xl font-bold text-army-green-500">2,000+</p>
                <p className="text-white/60 text-sm">Combat Aircraft</p>
              </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Shield className="w-8 h-8 mx-auto mb-2 text-army-green-500" />
              <p className="text-3xl font-bold text-army-green-500">4,000+</p>
              <p className="text-white/60 text-sm">Main Battle Tanks</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Crosshair className="w-8 h-8 mx-auto mb-2 text-army-green-500" />
              <p className="text-3xl font-bold text-army-green-500">10,000+</p>
              <p className="text-white/60 text-sm">Artillery Pieces</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Zap className="w-8 h-8 mx-auto mb-2 text-amber-500" />
              <p className="text-3xl font-bold text-amber-500">100+</p>
              <p className="text-white/60 text-sm">Missile Systems</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mt-12 gap-4"
          >
            <Link
              href="/regiments"
              className="flex items-center gap-2 px-6 py-3 bg-army-green-600 text-white font-medium rounded-full hover:bg-army-green-500 transition-colors"
            >
              View Regiments <ChevronRight size={18} />
            </Link>
            <Link
              href="/stories"
              className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Valor Stories
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

