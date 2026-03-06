"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { operations } from "@/data/operations";
import { Search, Shield, Target, ChevronRight, CheckCircle, Clock, XCircle, MapPin, Calendar, Zap } from "lucide-react";
import Link from "next/link";

export default function OperationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOperation, setSelectedOperation] = useState<typeof operations[0] | null>(null);
  const [filterType, setFilterType] = useState("All");
  const [filterOutcome, setFilterOutcome] = useState("All");

  const types = ["All", "Counter-terrorism", "Counter-insurgency", "Defensive", "Naval operation", "Peacekeeping", "Air operation", "Humanitarian", "Pre-emptive strike"];
  const outcomes = ["All", "success", "partial", "ongoing"];

  const filteredOperations = operations.filter(op => {
    const matchesSearch = op.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          op.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          op.keyPoints.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = filterType === "All" || op.type === filterType;
    const matchesOutcome = filterOutcome === "All" || op.outcomeType === filterOutcome;
    return matchesSearch && matchesType && matchesOutcome;
  });

  const getOutcomeIcon = (type: string) => {
    switch (type) {
      case "success": return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "partial": return <Clock className="w-5 h-5 text-amber-500" />;
      case "ongoing": return <Clock className="w-5 h-5 text-blue-500" />;
      default: return <XCircle className="w-5 h-5 text-red-500" />;
    }
  };

  const getOutcomeColor = (type: string) => {
    switch (type) {
      case "success": return "bg-green-500/20 border-green-500/30 text-green-400";
      case "partial": return "bg-amber-500/20 border-amber-500/30 text-amber-400";
      case "ongoing": return "bg-blue-500/20 border-blue-500/30 text-blue-400";
      default: return "bg-red-500/20 border-red-500/30 text-red-400";
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
              <Shield className="w-6 h-6 text-army-green-500" />
              <span className="text-army-green-500 text-sm tracking-widest uppercase">
                Mission History
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Indian Army Operations</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              From the icy heights of Siachen to the jungles of Sri Lanka, explore the military 
              operations that have shaped India's security landscape and demonstrated the Army's 
              commitment to protecting the nation.
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
              <Shield className="w-10 h-10 mx-auto mb-2 text-green-500" />
              <p className="text-3xl font-bold text-green-500">
                {operations.filter(op => op.outcomeType === "success").length}
              </p>
              <p className="text-white/60 text-sm">Successful Operations</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Clock className="w-10 h-10 mx-auto mb-2 text-amber-500" />
              <p className="text-3xl font-bold text-amber-500">
                {operations.filter(op => op.outcomeType === "partial").length}
              </p>
              <p className="text-white/60 text-sm">Partial Success</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Target className="w-10 h-10 mx-auto mb-2 text-blue-500" />
              <p className="text-3xl font-bold text-blue-500">
                {operations.filter(op => op.outcomeType === "ongoing").length}
              </p>
              <p className="text-white/60 text-sm">Ongoing Operations</p>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Calendar className="w-10 h-10 mx-auto mb-2 text-purple-500" />
              <p className="text-3xl font-bold text-purple-500">50+</p>
              <p className="text-white/60 text-sm">Years of Operations</p>
            </div>
          </motion.div>

          {/* Search & Filter */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                <input
                  type="text"
                  placeholder="Search operations, objectives..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/40 focus:outline-none focus:border-army-green-500 transition-colors"
                />
              </div>
              <p className="text-white/40 text-sm">Showing {filteredOperations.length} operations</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all border ${
                      filterType === type
                        ? "bg-army-green-600 border-army-green-500 text-white"
                        : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              
              <div className="flex gap-2">
                {outcomes.map(outcome => (
                  <button
                    key={outcome}
                    onClick={() => setFilterOutcome(outcome)}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all border ${
                      filterOutcome === outcome
                        ? outcome === "success" ? "bg-green-600 border-green-500 text-white"
                          : outcome === "partial" ? "bg-amber-600 border-amber-500 text-white"
                          : "bg-blue-600 border-blue-500 text-white"
                        : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    {outcome === "All" ? "All Outcomes" : outcome.charAt(0).toUpperCase() + outcome.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Operations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOperations.map((operation, index) => (
              <motion.div
                key={operation.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedOperation(operation)}
                className="glass rounded-3xl p-6 hover:bg-white/10 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getOutcomeColor(operation.outcomeType)}`}>
                      {getOutcomeIcon(operation.outcomeType)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-army-green-400 transition-colors">
                        {operation.name}
                      </h3>
                      <p className="text-sm text-white/60">{operation.year}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-3 flex gap-2">
                  <span className="px-2 py-1 bg-army-green-900/30 border border-army-green-500/30 rounded-full text-xs text-army-green-400">
                    {operation.type}
                  </span>
                </div>

                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {operation.objective}
                </p>

                <div className="mb-4">
                  <p className="text-xs text-white/50 mb-1">Outcome:</p>
                  <p className="text-sm text-white/70 line-clamp-2">{operation.outcomeSummary}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className={`px-2 py-1 rounded-full text-xs ${getOutcomeColor(operation.outcomeType)}`}>
                    {operation.outcomeType}
                  </span>
                  <ChevronRight size={16} className="text-army-green-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Operations Timeline</h2>
            <div className="glass rounded-3xl p-8">
              <div className="space-y-6">
                {/* 1971 */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <span className="text-green-500 font-bold">1971</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl">
                    <h3 className="font-semibold mb-1 text-green-400">Year of Victory</h3>
                    <p className="text-sm text-white/60">Operation Trident and Python - Decisive naval victories. 13-day war resulting in creation of Bangladesh.</p>
                  </div>
                </div>
                {/* 1984 */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                    <span className="text-amber-500 font-bold">1984</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl">
                    <h3 className="font-semibold mb-1 text-amber-400">Meghdoot & Blue Star</h3>
                    <p className="text-sm text-white/60">Operation Meghdoot secured Siachen Glacier. Operation Blue Star neutralized militants in Golden Temple.</p>
                  </div>
                </div>
                {/* 1999 */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-full bg-army-green-500/20 flex items-center justify-center shrink-0">
                    <span className="text-army-green-500 font-bold">1999</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl">
                    <h3 className="font-semibold mb-1 text-army-green-400">Kargil War</h3>
                    <p className="text-sm text-white/60">Operation Vijay successfully evicted Pakistani infiltrators from Kargil. Tiger Hill and Point 5140 captured.</p>
                  </div>
                </div>
                {/* 2016 */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <span className="text-blue-500 font-bold">2016</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl">
                    <h3 className="font-semibold mb-1 text-blue-400">Surgical Strikes</h3>
                    <p className="text-sm text-white/60">India conducted surgical strikes across the LoC, destroying terrorist camps in response to Uri attack.</p>
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
              href="/timeline"
              className="flex items-center gap-2 px-6 py-3 bg-army-green-600 text-white font-medium rounded-full hover:bg-army-green-500 transition-colors"
            >
              View Timeline <ChevronRight size={18} />
            </Link>
            <Link
              href="/equipment"
              className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              View Equipment
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <AnimatePresence>
        {selectedOperation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedOperation(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${getOutcomeColor(selectedOperation.outcomeType)}`}>
                  {getOutcomeIcon(selectedOperation.outcomeType)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedOperation.name}</h3>
                  <p className="text-white/60">{selectedOperation.year} • {selectedOperation.type}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-army-green-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Target size={16} /> Objective
                  </h4>
                  <p className="text-white/70">{selectedOperation.objective}</p>
                </div>

                <div>
                  <h4 className="text-sm text-amber-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Zap size={16} /> Key Points
                  </h4>
                  <ul className="space-y-2">
                    {selectedOperation.keyPoints.map((point, i) => (
                      <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-army-green-500 rounded-full mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl">
                  <h4 className="text-sm text-green-500 uppercase tracking-wider mb-2">Outcome</h4>
                  <p className="text-white/70">{selectedOperation.outcome}</p>
                </div>

                <div>
                  <h4 className="text-sm text-white/50 uppercase tracking-wider mb-2">Significance</h4>
                  <p className="text-white/60">{selectedOperation.significance}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedOperation(null)}
                className="mt-6 px-6 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors w-full"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

