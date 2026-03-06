"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Target, Crosshair, Award, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Regiment {
  name: string;
  nickname: string;
  description: string;
  specialties: string[];
  famousBattles: string[];
  motto: string;
}

const regiments: Regiment[] = [
  {
    name: "Indian Army",
    nickname: "The Sashastra Sena",
    description: "The land-based branch of the Indian Armed Forces",
    specialties: ["Infantry", "Armoured Corps", "Artillery", "Engineers", "Signals"],
    famousBattles: ["Battle of Longewala", "Battle of Srinagar", "Tiger Hill"],
    motto: "Service Before Self"
  },
  {
    name: "Para Special Forces",
    nickname: "The Marcos",
    description: "India's elite special forces unit",
    specialties: ["Counter-terrorism", "Unconventional Warfare", "Special Reconnaissance"],
    famousBattles: ["Operation Vijay", "Surgical Strikes 2016"],
    motto: "Men of Steel"
  },
  {
    name: "Gorkha Regiment",
    nickname: "The Gorkhas",
    description: "Famous for their bravery and loyalty",
    specialties: ["Mountain Warfare", "High Altitude Operations"],
    famousBattles: ["Battle of Kashmir 1947", "Kargil War"],
    motto: "Better to Die than to be a Coward"
  },
  {
    name: "Sikh Regiment",
    nickname: "Sikh LI",
    description: "One of the oldest and most decorated regiments",
    specialties: ["Armored Warfare", "Infantry Operations"],
    famousBattles: ["Battle of Basantar 1971", "1947-48 Kashmir"],
    motto: "Nischay Kar Apni Ijmma Karo"
  },
  {
    name: "Rajput Regiment",
    nickname: "The Rajputs",
    description: "Known for their martial traditions",
    specialties: ["Desert Warfare", "Mountain Warfare"],
    famousBattles: ["Battle of Tithwal", "Kargil Operations"],
    motto: "The Forward"
  },
  {
    name: "Jat Regiment",
    nickname: "The Jats",
    description: "Renowned for their physical prowess",
    specialties: ["Armored Corps", "Infantry"],
    famousBattles: ["Battle of Walong 1962", "1971 War"],
    motto: "For Valour"
  },
  {
    name: "Maratha Light Infantry",
    nickname: "The Marathas",
    description: "Descendants of the legendary Maratha warriors",
    specialties: ["Jungle Warfare", "Counter-insurgency"],
    famousBattles: ["Battle of Poonch", "Kargil War"],
    motto: "Dharmo Rakshati Rakshitah"
  },
  {
    name: "Assam Regiment",
    nickname: "The Assamese",
    description: "Proud soldiers from the North-East",
    specialties: ["Mountain Warfare", "Jungle Operations"],
    famousBattles: ["Battle of Gangasagar 1971", "Operation Vijay"],
    motto: "Anything Anywhere"
  }
];

export default function RegimentsPage() {
  const [selectedRegiment, setSelectedRegiment] = useState(regiments[0]);

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
                The Backbone of India's Defense
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Indian Army Regiments</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Explore the glorious regiments that form the backbone of the Indian Army. 
              Each has its unique history, traditions, and legacy of valor.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Regiments Grid */}
            <div className="lg:col-span-1">
              <div className="glass rounded-3xl p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Select a Regiment</h2>
                <div className="space-y-3">
                  {regiments.map((regiment) => (
                    <button
                      key={regiment.name}
                      onClick={() => setSelectedRegiment(regiment)}
                      className={`w-full text-left p-4 rounded-xl transition-all ${
                        selectedRegiment.name === regiment.name
                          ? "bg-army-green-600/30 border border-army-green-500"
                          : "bg-white/5 hover:bg-white/10 border border-transparent"
                      }`}
                    >
                      <p className="font-medium">{regiment.name}</p>
                      <p className="text-xs text-white/60">{regiment.nickname}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Regiment Details */}
            <div className="lg:col-span-2">
              <motion.div
                key={selectedRegiment.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-army-green-600/30 flex items-center justify-center">
                    <Shield className="w-10 h-10 text-army-green-500" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedRegiment.name}</h2>
                    <p className="text-army-green-400">{selectedRegiment.nickname}</p>
                  </div>
                </div>

                <p className="text-white/70 text-lg mb-6">
                  {selectedRegiment.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-5 bg-white/5 rounded-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-amber-500" />
                      <span className="text-amber-400 font-medium">Specialties</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedRegiment.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-army-green-900/30 border border-army-green-500/30 rounded-full text-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 bg-white/5 rounded-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Crosshair className="w-5 h-5 text-amber-500" />
                      <span className="text-amber-400 font-medium">Famous Battles</span>
                    </div>
                    <ul className="space-y-1">
                      {selectedRegiment.famousBattles.map((battle, i) => (
                        <li key={i} className="text-sm text-white/70 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-army-green-500 rounded-full" />
                          {battle}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-r from-amber-900/20 to-army-green-900/20 rounded-2xl border border-amber-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span className="text-amber-400 font-medium">Regimental Motto</span>
                  </div>
                  <p className="text-xl font-serif italic text-amber-100/80">
                    "{selectedRegiment.motto}"
                  </p>
                </div>
              </motion.div>

              {/* Additional Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid md:grid-cols-3 gap-4 mt-8"
              >
                <div className="glass rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-army-green-500">1.2M+</p>
                  <p className="text-white/60 text-sm mt-1">Active Personnel</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-army-green-500">18</p>
                  <p className="text-white/60 text-sm mt-1">Corpus Corps</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <p className="text-4xl font-bold text-army-green-500">7</p>
                  <p className="text-white/60 text-sm mt-1">Commands</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12 gap-4"
          >
            <Link
              href="/timeline"
              className="flex items-center gap-2 px-6 py-3 bg-army-green-600 text-white font-medium rounded-full hover:bg-army-green-500 transition-colors"
            >
              View Timeline <ChevronRight size={18} />
            </Link>
            <Link
              href="/stories"
              className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Bravehearts
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

