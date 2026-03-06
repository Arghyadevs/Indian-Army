"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { armyRanks, getCategoryOrder } from "@/data/ranks";
import { Search, ChevronDown, ChevronUp, Award, Shield, Star, User } from "lucide-react";
import Link from "next/link";

export default function RanksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState("Commissioned Officers");
  const [selectedRank, setSelectedRank] = useState<typeof armyRanks[0] | null>(null);

  const categories = getCategoryOrder();

  const filteredRanks = armyRanks.filter(rank => {
    return rank.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           rank.abbreviation.toLowerCase().includes(searchTerm.toLowerCase()) ||
           rank.category.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const getCategoryRanks = (category: string) => {
    return filteredRanks.filter(r => r.category === category);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Commissioned Officers": return "from-amber-500/20 to-orange-500/20 border-amber-500/30";
      case "Junior Commissioned Officers": return "from-army-green-500/20 to-emerald-500/20 border-army-green-500/30";
      case "Non-Commissioned Officers": return "from-blue-500/20 to-cyan-500/20 border-blue-500/30";
      case "Other Ranks": return "from-purple-500/20 to-pink-500/20 border-purple-500/30";
      default: return "from-gray-500/20 to-gray-500/20 border-gray-500/30";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Commissioned Officers": return <Award className="w-5 h-5 text-amber-500" />;
      case "Junior Commissioned Officers": return <Shield className="w-5 h-5 text-army-green-500" />;
      case "Non-Commissioned Officers": return <Star className="w-5 h-5 text-blue-500" />;
      case "Other Ranks": return <User className="w-5 h-5 text-purple-500" />;
      default: return <Star className="w-5 h-5 text-gray-500" />;
    }
  };

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
              <Award className="w-6 h-6 text-amber-500" />
              <span className="text-amber-500 text-sm tracking-widest uppercase">
                Hierarchy of Command
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Indian Army Ranks</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              The Indian Army follows a structured rank system that has evolved since colonial times. 
              From the highest Field Marshal to the humble Sepoy, each rank carries its own honor, 
              responsibility, and tradition.
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
              <Award className="w-10 h-10 mx-auto mb-2 text-amber-500" />
              <p className="text-3xl font-bold text-amber-500">11</p>
              <p className="text-white/60 text-sm">Commissioned Officer Ranks</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Shield className="w-10 h-10 mx-auto mb-2 text-army-green-500" />
              <p className="text-3xl font-bold text-army-green-500">3</p>
              <p className="text-white/60 text-sm">JCO Ranks</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Star className="w-10 h-10 mx-auto mb-2 text-blue-500" />
              <p className="text-3xl font-bold text-blue-500">3</p>
              <p className="text-white/60 text-sm">NCO Ranks</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <User className="w-10 h-10 mx-auto mb-2 text-purple-500" />
              <p className="text-3xl font-bold text-purple-500">3</p>
              <p className="text-white/60 text-sm">Other Ranks</p>
            </div>
          </motion.div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input
                type="text"
                placeholder="Search ranks, abbreviations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>

          {/* Ranks by Category */}
          <div className="space-y-6">
            {categories.map((category) => {
              const categoryRanks = getCategoryRanks(category);
              if (categoryRanks.length === 0) return null;

              const isExpanded = expandedCategory === category;

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass rounded-3xl overflow-hidden"
                >
                  {/* Category Header */}
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? "" : category)}
                    className={`w-full p-6 flex items-center justify-between bg-gradient-to-r ${getCategoryColor(category)}`}
                  >
                    <div className="flex items-center gap-4">
                      {getCategoryIcon(category)}
                      <div className="text-left">
                        <h2 className="text-xl font-bold">{category}</h2>
                        <p className="text-sm text-white/60">{categoryRanks.length} ranks</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-white/70" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-white/70" />
                    )}
                  </button>

                  {/* Ranks Grid */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {categoryRanks
                            .sort((a, b) => a.level - b.level)
                            .map((rank, index) => (
                              <motion.div
                                key={rank.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={() => setSelectedRank(rank)}
                                className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer group border border-white/10"
                              >
                                <div className="flex items-center gap-4">
                                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
                                    category === "Commissioned Officers" ? "bg-amber-500/20" :
                                    category === "Junior Commissioned Officers" ? "bg-army-green-500/20" :
                                    category === "Non-Commissioned Officers" ? "bg-blue-500/20" :
                                    "bg-purple-500/20"
                                  }`}>
                                    {rank.insignia}
                                  </div>
                                  <div>
                                    <h3 className="font-bold group-hover:text-amber-400 transition-colors">
                                      {rank.name}
                                    </h3>
                                    <p className="text-sm text-white/60">{rank.abbreviation}</p>
                                  </div>
                                </div>
                                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                  <span className="text-xs text-white/50">Level {rank.level}</span>
                                  <span className="text-xs text-white/50">Click for details</span>
                                </div>
                              </motion.div>
                            ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Rank Structure Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Understanding the Rank Structure</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-3xl p-8 border-l-4 border-amber-500">
                <h3 className="text-xl font-semibold mb-4 text-amber-400">Commissioned Officers</h3>
                <p className="text-white/70 mb-4">
                  The highest tier of the military hierarchy, commissioned officers are graduates 
                  from military academies like the Indian Military Academy (IMA) or Officer Training Academy (OTA).
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Ranks: Second Lieutenant to Field Marshal</li>
                  <li>• Command strategic and tactical operations</li>
                  <li>• Responsible for planning and decision-making</li>
                  <li>• Hold leadership positions at all levels</li>
                </ul>
              </div>

              <div className="glass rounded-3xl p-8 border-l-4 border-army-green-500">
                <h3 className="text-xl font-semibold mb-4 text-army-green-400">Junior Commissioned Officers (JCOs)</h3>
                <p className="text-white/70 mb-4">
                  A unique feature of the Indian Army, JCOs bridge the gap between officers and other ranks. 
                  They are senior non-commissioned officers granted honorary commissions.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Ranks: Naib Subedar to Subedar Major</li>
                  <li>• Act as vital link between officers and troops</li>
                  <li>• Responsible for discipline and welfare</li>
                  <li>• Highly respected in the regiment</li>
                </ul>
              </div>

              <div className="glass rounded-3xl p-8 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Non-Commissioned Officers (NCOs)</h3>
                <p className="text-white/70 mb-4">
                  NCOs are experienced soldiers who have risen through the ranks. They form the backbone 
                  of the army's operational structure and are responsible for training and discipline.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Ranks: Lance Naik to Havildar</li>
                  <li>• Command sections and platoons</li>
                  <li>• Responsible for training junior soldiers</li>
                  <li>• Ensure operational readiness</li>
                </ul>
              </div>

              <div className="glass rounded-3xl p-8 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Other Ranks</h3>
                <p className="text-white/70 mb-4">
                  The foundation of the Indian Army, these soldiers form the majority of the force. 
                  They are the ones who execute the orders and carry out the mission.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Ranks: Sepoy and equivalents</li>
                  <li>• Basic trained soldiers</li>
                  <li>• Serve in various capacities</li>
                  <li>• Can rise through the ranks</li>
                </ul>
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
              href="/training"
              className="flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-500 transition-colors"
            >
              Join the Army <Award size={18} />
            </Link>
            <Link
              href="/regiments"
              className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              View Regiments
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <AnimatePresence>
        {selectedRank && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedRank(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-3xl p-8 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-5xl ${
                  selectedRank.category === "Commissioned Officers" ? "bg-amber-500/20" :
                  selectedRank.category === "Junior Commissioned Officers" ? "bg-army-green-500/20" :
                  selectedRank.category === "Non-Commissioned Officers" ? "bg-blue-500/20" :
                  "bg-purple-500/20"
                }`}>
                  {selectedRank.insignia}
                </div>
                <h3 className="text-2xl font-bold mb-1">{selectedRank.name}</h3>
                <p className="text-white/60 mb-4">{selectedRank.abbreviation}</p>

                <div className="p-4 bg-white/5 rounded-2xl mb-4">
                  <p className="text-sm text-white/60 mb-2">
                    <span className="text-amber-500">Level:</span> {selectedRank.level}
                  </p>
                  <p className="text-sm text-white/60">
                    <span className="text-army-green-500">Salutation:</span> {selectedRank.salutation}
                  </p>
                </div>

                <p className="text-white/70 mb-4">{selectedRank.description}</p>

                <div className="text-left mb-4 p-4 bg-white/5 rounded-2xl">
                  <p className="text-sm text-white/60 mb-2">
                    <span className="text-amber-500">Shoulder Badge:</span> {selectedRank.shoulderBadge}
                  </p>
                  <p className="text-sm text-white/60">
                    <span className="text-blue-500">Equivalent (Other Armies):</span> {selectedRank.equivalents}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedRank(null)}
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

