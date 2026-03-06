"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Shield, ChevronRight, Zap, Crosshair, Mountain } from "lucide-react";
import Link from "next/link";

interface Command {
  name: string;
  location: string;
  jurisdiction: string;
  role: string;
  keyBases: string[];
  description: string;
}

interface BattleLocation {
  name: string;
  state: string;
  coordinates: string;
  year: string;
  significance: string;
}

const commands: Command[] = [
  {
    name: "Northern Command",
    location: "Udhampur, Jammu & Kashmir",
    jurisdiction: "Jammu & Kashmir, Ladakh",
    role: "Defends India's northern borders with Pakistan and China",
    keyBases: ["Udhampur", "Srinagar", "Leh", "Kargil"],
    description: "Responsible for the most sensitive and strategically important borders."
  },
  {
    name: "Western Command",
    location: "Chandigarh",
    jurisdiction: "Punjab, Haryana, Rajasthan, Gujarat",
    role: "Defends western borders with Pakistan",
    keyBases: ["Jaipur", "Jaisalmer", "Bathinda", "Nagrota"],
    description: "Covers the border from Gujarat to Punjab, including the Thar Desert."
  },
  {
    name: "Eastern Command",
    location: "Kolkata, West Bengal",
    jurisdiction: "West Bengal, Bihar, Jharkhand, Odisha",
    role: "Defends eastern borders and handles counter-insurgency",
    keyBases: ["Kolkata", "Jashpore", "Panagarh", "Sukna"],
    description: "Strategic command covering the India-Bangladesh border."
  },
  {
    name: "Southern Command",
    location: "Pune, Maharashtra",
    jurisdiction: "Maharashtra, Karnataka, Tamil Nadu, Kerala",
    role: "Defends southern borders and handles coastal security",
    keyBases: ["Pune", "Bangalore", "Coimbatore", "Trivandrum"],
    description: "Focuses on the Western Ghats and coastal defense."
  },
  {
    name: "Central Command",
    location: "Lucknow, Uttar Pradesh",
    jurisdiction: "Uttar Pradesh, Madhya Pradesh, Chhattisgarh",
    role: "Counter-insurgency and internal security",
    keyBases: ["Lucknow", "Jhansi", "Mhow", "Ramgarh"],
    description: "Strategic depth and internal security operations."
  },
  {
    name: "South Western Command",
    location: "Jaipur, Rajasthan",
    jurisdiction: "Rajasthan, Gujarat, Maharashtra",
    role: "Defends the western borders",
    keyBases: ["Jaipur", "Jodhpur", "Bikaner", "Ahmednagar"],
    description: "Covers the desert sector of the western border."
  },
  {
    name: "Army Training Command",
    location: "Shimla, Himachal Pradesh",
    jurisdiction: "All India",
    role: "Training and doctrine development",
    keyBases: ["Mhow", "Devlali", "Kamptee"],
    description: "Responsible for training all army personnel."
  }
];

const battleLocations: BattleLocation[] = [
  { name: "Kargil", state: "Ladakh", coordinates: "34.5°N, 76.3°E", year: "1999", significance: "Kargil War - Operation Vijay" },
  { name: "Tiger Hill", state: "Jammu & Kashmir", coordinates: "34.1°N, 76.8°E", year: "1999", significance: "Iconic victory in Kargil War" },
  { name: "Srinagar", state: "Jammu & Kashmir", coordinates: "34.0°N, 74.8°E", year: "1947", significance: "First Kashmir War - Battle of Srinagar" },
  { name: "Poonch", state: "Jammu & Kashmir", coordinates: "33.7°N, 74.0°E", year: "1947", significance: "Siege of Poonch" },
  { name: "Asal Uttar", state: "Punjab", coordinates: "31.8°N, 75.0°E", year: "1965", significance: "Battle of Asal Uttar - Largest tank battle" },
  { name: "Longewala", state: "Rajasthan", coordinates: "27.0°N, 70.9°E", year: "1971", significance: "Battle of Longewala - 300 vs 2000 tanks" },
  { name: "Sylhet", state: "Bangladesh", coordinates: "24.9°N, 91.9°E", year: "1971", significance: "Mighty Swordsmen Division breakthrough" },
  { name: "Walong", state: "Arunachal Pradesh", coordinates: "28.4°N, 96.8°E", year: "1962", significance: "Battle of Walong - Sino-Indian War" },
  { name: "Tawang", state: "Arunachal Pradesh", coordinates: "27.9°N, 91.8°E", year: "1962", significance: "Battle of Tawang - Sino-Indian War" },
  { name: "Basantar River", state: "Jammu & Kashmir", coordinates: "32.6°N, 74.8°E", year: "1971", significance: "Battle of Basantar - Armored warfare" },
  { name: "Hailam", state: "Jammu & Kashmir", coordinates: "34.2°N, 74.4°E", year: "1948", significance: "Battle of Hailam - First Kashmir War" },
  { name: "Gangasagar", state: "West Bengal", coordinates: "22.2°N, 88.1°E", year: "1971", significance: "Battle of Gangasagar - PVC award" }
];

export default function CommandsPage() {
  const [selectedCommand, setSelectedCommand] = useState(commands[0]);
  const [activeTab, setActiveTab] = useState<"commands" | "locations">("commands");

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
              <MapPin className="w-6 h-6 text-army-green-500" />
              <span className="text-army-green-500 text-sm tracking-widest uppercase">
                Strategic Command Structure
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Commands & Battlegrounds</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Explore the seven commands of the Indian Army and the historic battlegrounds 
              where Indian soldiers demonstrated unparalleled courage.
            </p>
          </motion.div>

          {/* Tab Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setActiveTab("commands")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === "commands"
                  ? "bg-army-green-600 text-white"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              <span className="flex items-center gap-2">
                <Shield size={18} />
                Commands
              </span>
            </button>
            <button
              onClick={() => setActiveTab("locations")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === "locations"
                  ? "bg-army-green-600 text-white"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              <span className="flex items-center gap-2">
                <Crosshair size={18} />
                Battle Locations
              </span>
            </button>
          </motion.div>

          {activeTab === "commands" && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Commands Sidebar */}
              <div className="lg:col-span-1">
                <div className="glass rounded-3xl p-6 sticky top-24">
                  <h2 className="text-lg font-semibold mb-4">Select Command</h2>
                  <div className="space-y-3 max-h-[60vh] overflow-y-auto">
                    {commands.map((cmd) => (
                      <button
                        key={cmd.name}
                        onClick={() => setSelectedCommand(cmd)}
                        className={`w-full text-left p-4 rounded-xl transition-all ${
                          selectedCommand.name === cmd.name
                            ? "bg-army-green-600/30 border border-army-green-500"
                            : "bg-white/5 hover:bg-white/10 border border-transparent"
                        }`}
                      >
                        <p className="font-medium">{cmd.name}</p>
                        <p className="text-xs text-white/60">{cmd.location}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Command Details */}
              <div className="lg:col-span-2">
                <motion.div
                  key={selectedCommand.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-3xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-army-green-600/30 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-army-green-500" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedCommand.name}</h2>
                      <p className="text-army-green-400">{selectedCommand.location}</p>
                    </div>
                  </div>

                  <p className="text-white/70 mb-6">{selectedCommand.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-amber-500" />
                        <span className="text-amber-400 text-sm font-medium">Jurisdiction</span>
                      </div>
                      <p className="text-sm text-white/70">{selectedCommand.jurisdiction}</p>
                    </div>

                    <div className="p-4 bg-white/5 rounded-2xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-amber-500" />
                        <span className="text-amber-400 text-sm font-medium">Role</span>
                      </div>
                      <p className="text-sm text-white/70">{selectedCommand.role}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Mountain className="text-army-green-500" size={20} />
                      Key Bases
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCommand.keyBases.map((base, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-army-green-900/30 border border-army-green-500/30 rounded-full text-sm"
                        >
                          {base}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {activeTab === "locations" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {battleLocations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass rounded-3xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{location.name}</h3>
                      <p className="text-sm text-army-green-500">{location.state}</p>
                    </div>
                    <span className="px-3 py-1 bg-amber-600/20 border border-amber-500/30 rounded-full text-xs text-amber-400">
                      {location.year}
                    </span>
                  </div>
                  
                  <p className="text-white/70 text-sm mb-3">{location.significance}</p>
                  
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <MapPin size={12} />
                    {location.coordinates}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Map Legend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 glass rounded-3xl p-8"
          >
            <h2 className="text-xl font-semibold mb-6">Strategic Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/5 rounded-2xl">
                <p className="text-3xl font-bold text-army-green-500">7,517 km</p>
                <p className="text-white/60 text-sm">Total Border Length</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-2xl">
                <p className="text-3xl font-bold text-amber-500">4</p>
                <p className="text-white/60 text-sm">Neighboring Countries</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-2xl">
                <p className="text-3xl font-bold text-army-green-500">12</p>
                <p className="text-white/60 text-sm">Major Battle Locations</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12 gap-4"
          >
            <Link
              href="/equipment"
              className="flex items-center gap-2 px-6 py-3 bg-army-green-600 text-white font-medium rounded-full hover:bg-army-green-500 transition-colors"
            >
              View Equipment <ChevronRight size={18} />
            </Link>
            <Link
              href="/timeline"
              className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Timeline
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

