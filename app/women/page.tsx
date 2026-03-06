"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { womenInArmy } from "@/data/women";
import { Search, Star, Award, ChevronRight, User, TrendingUp, Target, Heart } from "lucide-react";
import Link from "next/link";

export default function WomenInArmyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOfficer, setSelectedOfficer] = useState<typeof womenInArmy[0] | null>(null);
  const [filterRole, setFilterRole] = useState("All");

  const roles = ["All", "Infantry", "Medical", "Aviation", "Signals", "Intelligence", "Artillery"];

  const filteredOfficers = womenInArmy.filter(officer => {
    const matchesSearch = officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          officer.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          officer.achievements.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesRole = filterRole === "All" || officer.role.includes(filterRole);
    return matchesSearch && matchesRole;
  });

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
              <Star className="w-6 h-6 text-amber-500" />
              <span className="text-amber-500 text-sm tracking-widest uppercase">
                Breaking Barriers
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Women in Indian Army</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              The Indian Army has witnessed remarkable contributions from women officers who have broken 
              barriers, shattered glass ceilings, and made their mark in the world's oldest profession. 
              From the first female infantry officer to surgeons at Siachen, these women redefine courage.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-4 gap-4 mb-12"
          >
            <div className="glass rounded-2xl p-6 text-center">
              <User className="w-10 h-10 mx-auto mb-2 text-amber-500" />
              <p className="text-3xl font-bold text-amber-500">10+</p>
              <p className="text-white/60 text-sm">Pioneering Women</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <TrendingUp className="w-10 h-10 mx-auto mb-2 text-army-green-500" />
              <p className="text-3xl font-bold text-army-green-500">2016</p>
              <p className="text-white/60 text-sm">First Lt. General</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Target className="w-10 h-10 mx-auto mb-2 text-blue-500" />
              <p className="text-3xl font-bold text-blue-500">2020</p>
              <p className="text-white/60 text-sm">First Infantry Officer</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Heart className="w-10 h-10 mx-auto mb-2 text-red-500" />
              <p className="text-3xl font-bold text-red-500">15+</p>
              <p className="text-white/60 text-sm">Years of Progress</p>
            </div>
          </motion.div>

          {/* Search & Filter */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                <input
                  type="text"
                  placeholder="Search women officers, achievements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <p className="text-white/40 text-sm">Showing {filteredOfficers.length} officers</p>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {roles.map(role => (
                <button
                  key={role}
                  onClick={() => setFilterRole(role)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all border ${
                    filterRole === role
                      ? "bg-amber-600 border-amber-500 text-white"
                      : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Officers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOfficers.map((officer, index) => (
              <motion.div
                key={officer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedOfficer(officer)}
                className="glass rounded-3xl p-6 hover:bg-white/10 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-2xl font-bold text-amber-500">
                    {officer.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-amber-400 transition-colors">
                      {officer.name}
                    </h3>
                    <p className="text-sm text-amber-500">{officer.rank}</p>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="px-2 py-1 bg-army-green-900/30 border border-army-green-500/30 rounded-full text-xs text-army-green-400">
                    {officer.role}
                  </span>
                </div>

                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {officer.pioneering}
                </p>

                <div className="flex flex-wrap gap-1">
                  {officer.awards.slice(0, 2).map((award, i) => (
                    <span key={i} className="px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/30 rounded text-xs text-yellow-400">
                      {award}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-white/50">{officer.year}</span>
                  <ChevronRight size={16} className="text-amber-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* History Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Journey of Women in Indian Army</h2>
            <div className="glass rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                    <span className="text-amber-500 font-bold">1992</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl">
                    <h3 className="font-semibold mb-1">Women Allowed in Military Nursing</h3>
                    <p className="text-sm text-white/60">Indian Army began commissioning women as officers in the Army Medical Corps and Military Nursing Service.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-full bg-army-green-500/20 flex items-center justify-center shrink-0">
                    <span className="text-army-green-500 font-bold">2008</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl">
                    <h3 className="font-semibold mb-1">Women in Combat Roles</h3>
                    <p className="text-sm text-white/60">Women started being inducted into combat roles including infantry, artillery, and armored regiments.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <span className="text-blue-500 font-bold">2016</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl">
                    <h3 className="font-semibold mb-1">First Female Lieutenant General</h3>
                    <p className="text-sm text-white/60">Lt. Gen. Punita Arora became the first woman to achieve the rank of Lieutenant General in the Indian Army.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <span className="text-purple-500 font-bold">2020</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl">
                    <h3 className="font-semibold mb-1">First Female Infantry Officer</h3>
                    <p className="text-sm text-white/60">Captain Anujika Gnamb became the first woman commissioned into the Indian Army's infantry, breaking a 234-year tradition.</p>
                  </div>
                </div>
              </div>
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
              href="/stories"
              className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-500 transition-colors"
            >
              Valor Stories <ChevronRight size={18} />
            </Link>
            <Link
              href="/training"
              className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Join the Army
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <AnimatePresence>
        {selectedOfficer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedOfficer(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-3xl p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-amber-500">
                  {selectedOfficer.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold mb-1">{selectedOfficer.name}</h3>
                <p className="text-amber-500 mb-4">{selectedOfficer.rank}</p>
                
                <div className="p-4 bg-amber-900/20 rounded-2xl mb-4">
                  <p className="text-amber-400 font-medium text-sm uppercase tracking-wider mb-2">Pioneering Achievement</p>
                  <p className="text-white/80">{selectedOfficer.pioneering}</p>
                </div>

                <p className="text-white/70 mb-4 text-left">{selectedOfficer.story}</p>

                <div className="text-left mb-4">
                  <p className="text-sm text-white/60 mb-2"><span className="text-amber-500">Role:</span> {selectedOfficer.role}</p>
                  <p className="text-sm text-white/60"><span className="text-amber-500">Year:</span> {selectedOfficer.year}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-amber-500 mb-2">Key Achievements:</p>
                  <ul className="space-y-1">
                    {selectedOfficer.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-white/70 flex items-start gap-2">
                        <Award size={14} className="text-amber-500 mt-1 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {selectedOfficer.awards.map((award, i) => (
                    <span key={i} className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-xs text-yellow-400">
                      {award}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedOfficer(null)}
                  className="mt-4 px-6 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

